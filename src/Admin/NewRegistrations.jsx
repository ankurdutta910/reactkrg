import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../Firebase"; // Firestore reference
import { onSnapshot } from "firebase/firestore";
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const NewRegistrations = () => {
  const navigate = useNavigate();
  const [riders, setRiders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      // db.collection("Freelancers"),
      db.collection("newRegistrations").orderBy("fullName"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setRiders(list);
        setLoading(false);
      },

      (error) => {
        console.error(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  return (
    <>
      <main className="main-content">
        <header>
          <h5>New Registrations</h5>
        </header>

        <div className="main-table">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Email</th>
                <th scope="col">Bike/Reg No</th>
                <th scope="col">Place</th>
                <th scope="col">Status</th>
                <th className="text-center" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {riders && riders.length > 0 ? (
                riders.map((rider, index) => (
                  <tr key={rider.id}>
                    <th scope="row" style={{ width: "50px" }}>
                      {index + 1}
                    </th>
                    <td>{rider.fullName}</td>
                    <td>{rider.contact}</td>
                    <td>{rider.email}</td>
                    <td>
                      {rider.bike} <br />
                      <small>{rider.regno}</small>
                    </td>
                    <td>{rider.city}</td>
                    <td style={{textTransform:'capitalize'}}><span class="badge bg-danger p-2">{rider.status}</span></td>
                    <td className="text-center" style={{ width: "100px" }}>
                      <button className="btn btn-secondary btn-sm">
                        <FaPencilAlt className="btn-icon" /> Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center" }}>
                    {loading ? "Loading..." : "No riders available"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default NewRegistrations;
