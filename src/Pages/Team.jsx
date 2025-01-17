import React, { useEffect, useState } from "react";
import GoToTop from "../GoToTop";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../Firebase";

const Team = () => {
  const navigate = useNavigate();
  const [riders, setRiders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch updates from Firestore
    const fetchUpdates = async () => {
      setLoading(true);
      try {
        // Create a query with a limit of 3 and order by the 'postedOn' field
        const updatesQuery = query(
          collection(db, "riders"),
          orderBy("name", "asc") // Replace 'postedOn' with the field you want to order by
          // Limit to 3 updates
        );

        const querySnapshot = await getDocs(updatesQuery);
        const fetchedUpdates = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setRiders(fetchedUpdates);
      } catch (error) {
        console.error("Error fetching updates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpdates();
  }, []);

  return (
    <>
      <GoToTop />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5">
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Kayi Rider Group
            </h5>
            <h1 className="display-5">Riders</h1>
          </div>
          <div className="row g-4">
            {loading ? (
              <p style={{ textAlign: "center" }}>Loading...</p>
            ) : (
              <>
                {riders && riders.length > 0 ? (
                  riders.map((rider, index) => (
                    <>
                      <div className="col-md-4 col-lg-3 col-sm-6">
                        <div className="bg-light rounded overflow-hidden">
                          <img
                            className="img-fluid w-100"
                            src={rider.img ? rider.img : ""}
                            alt=""
                            style={{
                              width: "100%",
                              height: "45%",
                              objectFit: "cover",
                            }}
                          />
                          <div className="p-3 text-center">
                            <a className="h3 d-block mb-0">
                              Rider {rider.name}
                            </a>

                            <p className="mb-0">
                              ({rider.place ? rider.place : "-"})
                            </p>
                            <a
                              className="p"
                              href={rider.insta_url ? rider.insta_url : null}
                              target="_blank"
                            >
                              @{rider.insta_id}
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                ) : (
                  <h6 style={{ textAlign: "center", color: "grey" }}>
                    No Riders Found
                  </h6>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
