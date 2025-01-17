import React, { useState } from "react";
import { db, storage } from "../../Firebase";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";

const AddRider = () => {
  const [name, setName] = useState("");
  const [insta_url, setInstaUrl] = useState("");
  const [insta_id, setInstaId] = useState("");
  const [place, setPlace] = useState("");
  const [bike, setBike] = useState("");
  const [regNo, setRegNo] = useState("");
  const [img, setImg] = useState(null);
  const [status, setStatus] = useState("active");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function generateUniqueId(length) {
    const characters = "0123456789";
    let uniqueId = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      uniqueId += characters.charAt(randomIndex);
    }

    return uniqueId;
  }

  const uniqueId = generateUniqueId(9);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form inputs
    if (!name) {
      toast.error("Please Provide Rider Name");
      setLoading(false);
      return;
    }

    let imgUrl = null;

    if (img) {
      try {
        // Upload the PDF file to Firebase Storage
        const storageRef = ref(storage, `riders/${uniqueId}`);
        const uploadTask = uploadBytesResumable(storageRef, img);

        await uploadTask;
        // Get the download URL of the uploaded PDF
        imgUrl = await getDownloadURL(uploadTask.snapshot.ref);
      } catch (err) {
        // console.error("Error uploading image:", err);
        toast.error("Failed to upload image. Please try again.");
        setLoading(false);
        return;
      }
    }

    try {
      // Create a unique document ID

      // Insert data into the Firestore collection with the unique ID
      const formObj = await db.collection("riders").doc(uniqueId).set({
        name: name,
        id: uniqueId, // Store the unique ID in the document
        insta_id: insta_id,
        insta_url: insta_url,
        place: place,
        bike: bike,
        regNo: regNo,
        status: status,
        postedOn: serverTimestamp(),
        img: imgUrl, // Add the PDF download URL if available
      });

      // Success alert using Swal

      // Show success alert using Swal
      Swal.fire({
        title: "Success",
        icon: "success",
        text: "Rider Added Successfully!",
      });

      // Reset form fields
      setName("");
      setInstaId("");
      setInstaUrl("");
      setPlace("");
      setRegNo("");
      setBike("");

      setStatus("active");
      setImg(null);
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } catch (err) {
      console.error("Error posting update:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Ensure loading is stopped in both success and failure cases
    }
  };
  return (
    <>
      <ToastContainer />
      <main className="main-content">
        <header>
          <h5>Add New Rider</h5>
        </header>
        <form onSubmit={handleForm}>
          <div className="row">
            <div className="col-lg-4 my-2">
              <label htmlFor="formFile" className="form-label">
                Rider Name<span>*</span>
              </label>
              <input
                className="form-control form-control-md"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Rider Name"
              />
            </div>

            <div className="col-lg-4 my-2">
              <label htmlFor="formFile" className="form-label">
                Instagram ID
              </label>
              <input
                className="form-control form-control-md"
                type="text"
                name="insta_id"
                value={insta_id}
                onChange={(e) => setInstaId(e.target.value)}
                placeholder="Instagram ID"
              />
            </div>

            <div className="col-lg-4 my-2">
              <label htmlFor="formFile" className="form-label">
                Place<span>*</span>
              </label>
              <input
                className="form-control form-control-md"
                type="text"
                name="place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                required
                placeholder="Place"
              />
            </div>

            <div className="col-lg-12 my-2">
              <label htmlFor="formFile" className="form-label">
                Instagram URL
              </label>
              <input
                className="form-control form-control-md"
                type="text"
                value={insta_url}
                onChange={(e) => setInstaUrl(e.target.value)}
                placeholder="Instagram URL"
              />
            </div>

            <div className="col-lg-3 my-2">
              <label htmlFor="formFile" className="form-label">
                Bike<span>*</span>
              </label>
              <input
                className="form-control form-control-md"
                type="text"
                value={bike}
                required
                onChange={(e) => setBike(e.target.value)}
                placeholder="Mention Bike"
              />
            </div>

            <div className="col-lg-3 my-2">
              <label htmlFor="formFile" className="form-label">
                Registration<span>*</span>
              </label>
              <input
                className="form-control form-control-md"
                type="text"
                required
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                placeholder="Registration/Number Plate"
              />
            </div>

            <div className="col-lg-3 my-2">
              <label htmlFor="formFile" className="form-label">
                Status<span>*</span>
              </label>
              <select
                name="status"
                required
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="form-control"
              >
                {/* <option defaultValue>--Select--</option> */}
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>



            <div className="col-lg-3 my-2">
              <label htmlFor="formFile" className="form-label">
                Image<span>*</span>
              </label>
              <input
                className="form-control form-control-md"
                type="file"
                required
                name="img"
                accept=".jpg,.png,.webp"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>

            <div className="col-lg-3 my-5">
              {loading ? (
                <button type="submit" className="btn btn-primary" disabled>
                  Loading...
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default AddRider;
