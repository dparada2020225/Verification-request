import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { users } from "../../shared/users"; 
import DepositRequest from "../DepositRequest/DepositRequest";
import HeaderNav from "../NavBar/HeaderNav";
import NavBar from "../NavBar/NavBar";
import VerificationRequests from "../VerificationRequests/VerificationRequests";
import { UserProps } from '../Interfaces/UserProps';
import VDetalles from '../VerificationDetails/VDetails'

function AuthyDepositRequests({userData}:UserProps, {setUserData}:UserProps) {
  return (
    <Router>
      <HeaderNav/>
      <NavBar />
      <Routes>
        <Route path="/VerificationRequests" element={<VerificationRequests users={users} />} />
        <Route path="/DepositRequest" element={<DepositRequest users={users} />} />
        <Route path="/VerificationDetails" element={
              <VDetalles
                userData={userData}
                setUserData={setUserData}
              />
            } />
      </Routes>
    </Router>
  );
}

export default AuthyDepositRequests;
