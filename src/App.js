import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Joinus from "./Pages/Joinus";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Team from "./Pages/Team";
import Events from "./Pages/Events";
import MainEvent from "./Pages/MainEvent";
import AddRider from "./Admin/AllRiders/AddRider";
import Login from "./Admin/Auth/Login";

import ProtectedRoute from "./Admin/Auth/ProtectedRoute";
import { UserAuthContextProvider } from "./Admin/Auth/UserAuthContext";
import Dashboard from "./Admin/Dashboard";
import Sidebar from "./Admin/Sidebar";
import AllRiders from "./Admin/AllRiders/AllRiders";
import NewRegistrations from "./Admin/NewRegistrations";
import AdminNavbar from "./Admin/AdminNavbar";
import InQueries from "./Admin/InQueries";
import EditRider from "./Admin/AllRiders/EditRider";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/about-us"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact-us"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/gallery"
          element={
            <>
              <Navbar />
              <Gallery />
              <Footer />
            </>
          }
        />

        <Route
          path="/team"
          element={
            <>
              <Navbar />
              <Team />
              <Footer />
            </>
          }
        />

        <Route
          path="/events"
          element={
            <>
              <Navbar />
              <Events />
              <Footer />
            </>
          }
        />

        <Route
          path="/join-us"
          element={
            <>
              <Navbar />
              <Joinus />
              <Footer />
            </>
          }
        />

        <Route
          path="/car-bike-mania"
          element={
            <>
              <Navbar />
              <MainEvent />
              <Footer />
            </>
          }
        />
      </Routes>

      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />

          <Route
            path="/dashboard"
            element={
              <>
                <AdminNavbar />
                <div class="layout">
                  <Sidebar />
                  <Dashboard />
                </div>
              </>
            }
          />

          <Route
            path="/admin-all-riders"
            element={
              <>
                <AdminNavbar />
                <div class="layout">
                  <Sidebar />
                  <AllRiders />
                </div>
              </>
            }
          />

          <Route
            path="/add-new-rider"
            element={
              <>
                <AdminNavbar />
                <div class="layout">
                  <Sidebar />
                  <AddRider />
                </div>
              </>
            }
          />

          <Route
            path="/edit-rider/:id"
            element={
              <>
                <AdminNavbar />
                <div class="layout">
                  <Sidebar />
                  <EditRider />
                </div>
              </>
            }
          />

          <Route
            path="/admin-new-registrations"
            element={
              <>
                <AdminNavbar />
                <div class="layout">
                  <Sidebar />
                  <NewRegistrations />
                </div>
              </>
            }
          />

          <Route
            path="/admin-all-inqueries"
            element={
              <>
                <AdminNavbar />
                <div class="layout">
                  <Sidebar />
                  <InQueries />
                </div>
              </>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
