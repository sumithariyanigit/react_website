import ReactDOM from "react-dom";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import run from '@jamesives/github-pages-deploy-action'

// import About from "./About";
// import Blogs from "./Blogs";
// import Packages from "./Packages";
// import PackageDetail from "./PackageDetail";
// import BookPackage from "./BookPackage";
// import Contact from "./Contact";
// import Profile  from "./Profile";
// import Login from "./Login";
// import SignUp from "./SignUp";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="blogs" element={<Blogs />} />
        <Route exact path="packages" element={<Packages />} />
        <Route exact path="Package-detail" element={<PackageDetail />} />
        <Route exact path="boook-package" element={<BookPackage />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="profile" element={<Profile />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="signup" element={<SignUp />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

