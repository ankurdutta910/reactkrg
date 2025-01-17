import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { ToastContainer, toast } from "react-toastify";

const AddRiderPayment = ({ documentId }) => {
  const [date, setDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");

  const handleSubmit = async () => {
    if (!documentId) {
      alert("Document ID is required!");
      return;
    }

    const paymentData = {
      date,
      purpose,
      amount: parseFloat(amount),
      balance: parseFloat(balance),
      createdAt: new Date(),
    };

    try {
      const paymentsCollectionRef = collection(
        db,
        "riders",
        documentId,
        "payments"
      );
      await addDoc(paymentsCollectionRef, paymentData);
      toast.success("Payment Added Successfully!")
      // Clear form fields
      setDate("");
      setPurpose("");
      setAmount("");
      setBalance("");
    } catch (error) {
      console.error("Error adding payment:", error);
      toast.error("Failed to add payment.");
    }
  };
  return (
    <>
    <ToastContainer/>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Payment
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <label htmlFor="formFile" className="form-label mb-0">
                Date of Payment
              </label>
              <input
                className="form-control form-control-sm"
                type="date"
                name="name"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />

              <label htmlFor="formFile" className="form-label mb-0 mt-2">
                Purpose
              </label>
              <input
                className="form-control form-control-sm"
                type="text"
                name="name"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
                placeholder="Purpose of Payment"
              />

              <label htmlFor="formFile" className="form-label mb-0 mt-2">
                Amount
              </label>
              <input
                className="form-control form-control-sm"
                type="text"
                name="name"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                placeholder="Paid Amount"
              />

              <label htmlFor="formFile" className="form-label mb-0 mt-2">
                Balance (if any)
              </label>
              <input
                className="form-control form-control-sm"
                type="text"
                name="name"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                required
                placeholder="Balance Amount"
              />
            </div>

            <div class="modal-footer">
              {/* <button
                type="button"
                class="btn btn-danger btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button> */}
              <button
                type="button"
                onClick={handleSubmit}
                class="btn btn-primary btn-sm"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRiderPayment;
