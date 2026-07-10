import React, { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [profile, setProfile] = useState({
    employeeId: "",
    password: "",
    name: "",
    phone: "",
    email: "",
    aadhar: "",
    pan: "",
    license: "",
    city: "",
    vehicle: "",
    address: ""
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (
      profile.employeeId.trim() === "" ||
      profile.password.trim() === ""
    ) {
      alert("Please enter Employee ID and Password");
      return;
    }

    setLoggedIn(true);
  };

  const handleSave = () => {
    alert("Shipping Partner Details Saved Successfully!");
    console.log(profile);
  };

  return (
    <div className="app">

      <div className="header">
        Welcome to Shipping Partner
      </div>

      {!loggedIn ? (

        <div className="card">

          <h2>Partner Login</h2>

          <input
            type="text"
            placeholder="Employee ID"
            name="employeeId"
            value={profile.employeeId}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={profile.password}
            onChange={handleChange}
          />

          <button onClick={handleLogin}>
            Login
          </button>

        </div>

      ) : (

        <div className="card">

          <h2>Shipping Partner Profile</h2>

          <input
            placeholder="Full Name"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />

          <input
            placeholder="Phone Number"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />

          <input
            placeholder="Email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />

          <input
            placeholder="Aadhar Number"
            name="aadhar"
            value={profile.aadhar}
            onChange={handleChange}
          />

          <input
            placeholder="PAN Number"
            name="pan"
            value={profile.pan}
            onChange={handleChange}
          />

          <input
            placeholder="Driving License Number"
            name="license"
            value={profile.license}
            onChange={handleChange}
          />

          <input
            placeholder="City"
            name="city"
            value={profile.city}
            onChange={handleChange}
          />

          <input
            placeholder="Vehicle Number"
            name="vehicle"
            value={profile.vehicle}
            onChange={handleChange}
          />

          <textarea
            placeholder="Address"
            name="address"
            value={profile.address}
            onChange={handleChange}
          ></textarea>

          <h3>Upload Documents</h3>

          <label>Aadhar Card</label>
          <input type="file" />

          <label>PAN Card</label>
          <input type="file" />

          <label>Driving License</label>
          <input type="file" />

          <button onClick={handleSave}>
            Save Details
          </button>

        </div>

      )}

    </div>
  );
}

export default App;