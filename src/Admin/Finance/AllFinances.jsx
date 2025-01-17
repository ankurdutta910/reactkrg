import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AllFinances = () => {
  return (
   <>
      <main className="main-content">
        <header>
          <h5>All Finances</h5>
          <Link to="/add-new-record" className="btn btn-primary btn-sm">
            <FaPlus className="btn-icon" /> Add Record
          </Link>
        </header>

        <div className="main-table">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date of Payment</th>
                <th scope="col">Purpose of Payment</th>
                <th scope="col">Amount</th>
                <th scope="col">Balance(if any)</th>
                <th scope="col">Status</th>
                <th className="text-center" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {riders && riders.length > 0 ? (
                riders.map((rider, index) => (
                  <tr key={rider.id}>
                    <th scope="row" style={{ width: "50px" }}>
                      {index + 1}
                    </th>
                    <td>{rider.name}</td>
                    <td>
                      {rider.bike || "-"} <br />
                      <small>{rider.regNo || "-"}</small>
                    </td>
                    <td>{rider.place}</td>
                    <td>
                      {rider.insta_id || "-"}{" "}
                      {rider.insta_url && rider.insta_url.length > 2 ? (
                        <>
                          <a href={rider.insta_url} target="_blank">
                            <i className="fa fa-link"></i>
                          </a>
                        </>
                      ) : null}
                    </td>
                    <td style={{textTransform:'capitalize', width:'100px'}}><span class="badge bg-success p-2">{rider.status}</span></td>
                    <td className="text-center" style={{width:'100px'}}>
                      <button className="btn btn-secondary btn-sm" onClick={()=>handleEditRider(rider.id)}>
                        <FaPencilAlt className="btn-icon" /> Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center" }}>
                    {loading ? "Loading..." : "No riders available"}
                  </td>
                </tr>
              )} */}
            </tbody>
          </table>
        </div>
      </main>
      </>
  )
}

export default AllFinances