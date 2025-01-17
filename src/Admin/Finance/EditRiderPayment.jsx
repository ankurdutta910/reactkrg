import React, { useState, useEffect } from "react";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { ToastContainer, toast } from "react-toastify";

const EditRiderPayment = ({ documentId, paymentID }) => {
  const [date, setDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");

  let payId =  paymentID?.id
  useEffect(() => {
    if (documentId && payId) {
      const docRef = doc(db, "riders", documentId, "payments", payId);
      const unsubscribe = onSnapshot(
        docRef,
        (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.data();
            setDate(data.date || "");
            setPurpose(data.purpose || "");
            setAmount(data.amount || "");
            setBalance(data.balance || "");
          } else {
            toast.error("Payment not found.");
          }
        },
        (error) => {
          toast.error("Error fetching payment data.");
          console.error("Firestore error:", error);
        }
      );

      return () => unsubscribe();
    }
  }, [documentId, payId]);

  const handleSubmit = async () => {
    if (!documentId || !payId) {
      toast.error("Document ID and Payment ID are required!");
      return;
    }

    if (!date || !purpose || !amount || isNaN(amount)) {
      toast.error("Please provide valid input data.");
      return;
    }

    const paymentData = {
      date,
      purpose,
      amount: parseFloat(amount),
      balance: parseFloat(balance),
    };

    try {
      const paymentDocRef = doc(db, "riders", documentId, "payments", payId);
      await updateDoc(paymentDocRef, paymentData);
      toast.success("Payment updated successfully!");
    } catch (error) {
      console.error("Error updating payment:", error);
      toast.error("Failed to update payment.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className="modal fade"
        id="editPaymentModal"
        tabIndex="-1"
        aria-labelledby="editPaymentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editPaymentModalLabel">
                Edit Payment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="paymentDate" className="form-label mb-0">
                Date of Payment
              </label>
              <input
                id="paymentDate"
                className="form-control form-control-sm"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />

              <label htmlFor="paymentPurpose" className="form-label mb-0 mt-2">
                Purpose
              </label>
              <input
                id="paymentPurpose"
                className="form-control form-control-sm"
                type="text"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
                placeholder="Purpose of Payment"
              />

              <label htmlFor="paymentAmount" className="form-label mb-0 mt-2">
                Amount
              </label>
              <input
                id="paymentAmount"
                className="form-control form-control-sm"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                placeholder="Paid Amount"
              />

              <label htmlFor="paymentBalance" className="form-label mb-0 mt-2">
                Balance (if any)
              </label>
              <input
                id="paymentBalance"
                className="form-control form-control-sm"
                type="number"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                placeholder="Balance Amount"
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
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

export default EditRiderPayment;
