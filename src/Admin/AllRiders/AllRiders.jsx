import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../Firebase"; // Firestore reference
import { onSnapshot } from "firebase/firestore";
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const AllRiders = () => {
  const navigate = useNavigate();
  const [riders, setRiders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      // db.collection("Freelancers"),
      db.collection("riders").orderBy("name"),
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
          <h5>All KRG Riders</h5>
          <Link to="/add-new-rider" className="btn btn-primary btn-sm">
            <FaPlus className="btn-icon" /> Add Rider
          </Link>
        </header>

        <div className="main-table">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Rider Name</th>
                <th scope="col">Bike/Reg No</th>
                <th scope="col">Place</th>
                <th scope="col">Instagram ID</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {riders && riders.length > 0 ? (
                riders.map((rider, index) => (
                  <tr key={rider.id}>
                    <th scope="row" style={{ width: "50px" }}>
                      {index + 1}
                    </th>
                    <td>{rider.name}</td>
                    <td>
                      {rider.bike} <br />
                      <small>{rider.regNo}</small>
                    </td>
                    <td>{rider.place}</td>
                    <td>
                      {rider.insta_id}{" "}
                      {rider.insta_url && rider.insta_url.length > 2 ? (
                        <>
                          <a href={rider.insta_url} target="_blank">
                            <i className="fa fa-link"></i>
                          </a>
                        </>
                      ) : null}
                    </td>
                    <td>
                      <button className="btn btn-secondary btn-sm">
                        <FaPencilAlt className="btn-icon" /> Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center" }}>
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

export default AllRiders;
