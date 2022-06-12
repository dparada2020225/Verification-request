import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { users } from "../../shared/users";
import DepositRequest from "../DepositRequest/DepositRequest";
import HeaderNav from "../NavBar/HeaderNav";
import NavBar from "../NavBar/NavBar";
import VerificationRequests from "../VerificationRequests/VerificationRequests";

function AuthyDepositRequests() {
  return (
    <Router>
      <HeaderNav/>
      <NavBar />
      <Routes>
        <Route path="/VerificationRequests" element={<VerificationRequests users={users} />} />
        <Route path="/DepositRequest" element={<DepositRequest users={users} />} />
      </Routes>
    </Router>
  );
}

export default AuthyDepositRequests;
