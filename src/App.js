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
import OrderList from "./pages/OrderList";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/accountmerge" element={<AccountMerge />} />
            <Route path="/orderlist" element={<OrderList />} />
          </Routes>
        </Layout>
      </Router>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router> */}
    </div>
  );
};

export default App;
