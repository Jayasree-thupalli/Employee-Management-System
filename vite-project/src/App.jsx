import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import FormComponent from "./Components/UserCreate/FormComponent";
import UsersList from "./Components/List/UsersList";
import OrgDetails from "./Components/Organization/OrgDetails";
import Layout from "./Components/Layout";
import UserDetails from "./Components/List/UserDetails";
import AuthProvider from "./Components/Authentication/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/new" element={<FormComponent />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/org-details" element={<OrgDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
