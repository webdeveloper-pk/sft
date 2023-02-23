import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AccountMerge from "./pages/AccountMerge";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import AccountOrders from "./pages/AccountOrders";
import AccountDownloads from "./pages/AccountDownloads";
import AccountWithdrawals from "./pages/AccountWithdrawals";
import AccountInformation from "./pages/AccountInformation";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

const App = () => {
  return (
    <div className="App">
      {/* <Router>
        <Layout>
          <Routes>
            <Route path="/accountmerge" element={<AccountMerge />} />
            <Route path="/orders" element={<AccountOrders />} />
            <Route path="/downloads" element={<AccountDownloads />} />
            <Route path="/withdrawals" element={<AccountWithdrawals />} />
            <Route path="/information" element={<AccountInformation />} />
          </Routes>
        </Layout>
      </Router> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
