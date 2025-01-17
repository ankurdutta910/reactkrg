import React, { useState, useEffect } from "react";
import { db, storage } from "../../Firebase";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  serverTimestamp,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, useParams } from "react-router-dom";

const EditRider = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [insta_url, setInstaUrl] = useState("");
  const [insta_id, setInstaId] = useState("");
  const [place, setPlace] = useState("");
  const [bike, setBike] = useState("");
  const [regNo, setRegNo] = useState("");
  const [img, setImg] = useState(null);
  const [currentImgUrl, setCurrentImgUrl] = useState("");
  const [status, setStatus] = useState("active");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const docRef = doc(db, "riders", id);
      const unsubscribe = onSnapshot(docRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          setName(data.name || "");
          setInstaUrl(data.insta_url || "");
          setInstaId(data.insta_id || "");
          setPlace(data.place || "");
          setCurrentImgUrl(data.img || "");
          setStatus(data.status || "");
          setRegNo(data.regNo || "");
          setBike(data.bike || "");
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [id]);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name) {
      toast.error("Please Provide Rider Name");
      setLoading(false);
      return;
    }

    let imgUrl = currentImgUrl;

    if (img) {
      try {
        const storageRef = ref(storage, `riders/${id}`);
        const uploadTask = uploadBytesResumable(storageRef, img);

        await uploadTask;
        imgUrl = await getDownloadURL(uploadTask.snapshot.ref);
      } catch (err) {
        console.error("Error uploading image:", err);
        toast.error("Failed to upload image. Please try again.");
        setLoading(false);
        return;
      }
    }

    try {
      const docRef = doc(db, "riders", id);
      await updateDoc(docRef, {
        name,
        insta_id,
        insta_url,
        place,
        status,
        bike,
        regNo,
        img: imgUrl,
        updatedOn: serverTimestamp(),
      });

      Swal.fire({
        title: "Success",
        icon: "success",
        text: "Rider Updated Successfully!",
      });

      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } catch (err) {
      console.error("Error updating data:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <ToastContainer />
      <main className="main-content">
        <header>
          <h5>Edit Rider</h5>
        </header>
        <form onSubmit={handleForm}>
          <div className="row">
            <div className="col-lg-4 my-2">
              <label htmlFor="formFile" className="form-label">
                Rider Name
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
                Place
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
                Status
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
                Image
              </label>
              <input
                className="form-control form-control-md"
                type="file"
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

export default EditRider;
