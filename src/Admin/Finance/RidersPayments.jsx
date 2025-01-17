import React, { useState, useEffect } from "react";
import { db } from "../../Firebase";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import { doc, onSnapshot, collection, deleteDoc } from "firebase/firestore";
import { FaPlus } from "react-icons/fa";
import AddRiderPayment from "./AddRiderPayment";
import EditRiderPayment from "./EditRiderPayment";

const RidersPayments = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [status, setStatus] = useState("active");
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Fetch Rider Details
  useEffect(() => {
    if (id) {
      const docRef = doc(db, "riders", id);
      const unsubscribe = onSnapshot(docRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          setName(data.name || "");
          setStatus(data.status || "");
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [id]);

  // Fetch Payments Subcollection
  useEffect(() => {
    if (!id) return;

    const paymentsCollectionRef = collection(db, "riders", id, "payments");

    const unsubscribe = onSnapshot(
      paymentsCollectionRef,
      (snapshot) => {
        const paymentsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPayments(paymentsData);
        setLoading(false); // Set loading to false once data is fetched
      },
      (error) => {
        toast.error("Failed to fetch payments in real-time. Please try again.");
        // console.error("Error fetching payments in real-time:", error);
        setLoading(false); // Handle loading state in case of an error
      }
    );

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [id]);

  const handleEditPayment = (payment) => {
    setSelectedPayment(payment);
    // Show the modal
    const editModal = new window.bootstrap.Modal(
      document.getElementById("editPaymentModal")
    );
    editModal.show();
  };

  const handleDeletePayment = async (paymentId) => {
    try {
      // Confirm delete action with Swal
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const paymentDocRef = doc(db, "riders", id, "payments", paymentId);
        await deleteDoc(paymentDocRef);
        toast.success("Payment deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting payment:", error);
      toast.error("Failed to delete payment.");
    }
  };

  return (
    <>
      <main className="main-content">
        <header>
          <h5>Payments</h5>
          <a
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-primary btn-sm"
          >
            <FaPlus className="btn-icon" /> Add Payment
          </a>
        </header>

        <AddRiderPayment documentId={id} />
        <EditRiderPayment documentId={id} paymentID={selectedPayment} />

        <div className="row">
          <div className="col-md-3">
            <div class="card">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <div class="card-body">
                <a
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "5px",
                    textTransform: "capitalize",
                  }}
                  class="btn btn-success btn-sm"
                >
                  {status}
                </a>
                <h5 class="card-title mb-0">{name}</h5>
                <p class="card-text mb-2">User ID: #{id}</p>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="main-table">
              <table className="table table-striped table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date of Payment</th>
                    <th scope="col">Purpose of Payment</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Balance(if any)</th>
                    <th className="text-center" scope="col">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : payments.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center">
                        No payments found.
                      </td>
                    </tr>
                  ) : (
                    payments.map((payment, index) => (
                      <tr key={payment.id}>
                        <td>{index + 1}</td>
                        <td>{payment.date || "N/A"}</td>
                        <td>{payment.purpose || "N/A"}</td>
                        <td>{payment.amount || "0"}</td>
                        <td>{payment.balance || "0"}</td>
                        <td className="text-center" style={{width:'151px', minWidth:'150px'}}>
                          <button
                            onClick={() => handleEditPayment(payment)}
                            className="btn btn-secondary btn-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeletePayment(payment.id)}
                            className="btn btn-danger btn-sm ms-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RidersPayments;
