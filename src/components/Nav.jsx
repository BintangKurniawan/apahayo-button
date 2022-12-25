import sakLogo from "../assets/LOGO.png";
import home from "../assets/Vector.png";
import explore from "../assets/Explore.png";
import news from "../assets/Campaign.png";
import quest from "../assets/Vector-1.png";
import exhi from "../assets/Vector-2.png";
import store from "../assets/Vector-3.png";
import divider from "../assets/Line 1.png";
import "../style/Nav.css";
import React from "react";

import { createBrowserRouter, RouterProvider, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import { Explore } from "../components/explore";
import { Home } from "../components/Home";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// function Nav() {
//   return (
//     <BrowserRouter>
//       <div className="app">
//         <Home />
//         <div
//           className="offcanvas offcanvas-start
//        show offcanvas-md-none
//        text-bg-dark "
//           tabIndex="-1"
//           data-bs-backdrop="static"
//           id="offcanvasDark"
//         >
//           <div className="offcanvas-header">
//             <img src={sakLogo} alt="Sakuchi" className="offcanvas-title logo" id="offcanvasLabel" />
//           </div>
//           <div className="offcanvas-body">
//             <div className="navbar-nav">
//               <img src={divider} alt="" />

//               <Link className="link" to="/">
//                 <img src={home} alt="" />
//               </Link>

//               <Link className="link" to="/explore">
//                 <img src={explore} alt="" />
//               </Link>

//               <Link className="link" to="/news">
//                 <img src={news} alt="" />
//               </Link>

//               <Link className="link" to="/quest">
//                 <img src={quest} alt="" />
//               </Link>

//               <Link className="link" to="/exhi">
//                 <img src={exhi} alt="" />
//               </Link>

//               <Link className="link" to="/store">
//                 <img src={store} alt="" />
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div>
//           <Routes>
//             <Route path="/explore" element={<Explore />} />
//             <Route path="/home" element={<Home />} />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

function Nav() {
  return (
    // <div
    //   className="sidebar offcanvas offcanvas-start
    //         show offcanvas-md-none
    //        text-bg-dark"
    // >
    //   <div className="sidebar-title">
    //     <i>
    //       <img src={sakLogo} alt="sakuchi" />
    //     </i>
    //   </div>
    //   <div className="sidebar-body">
    //     <a href="#">
    //       <i className="material-icons">home</i>
    //     </a>
    //     <a href="#">
    //       <i className="material-icons">explore</i>
    //     </a>
    //     <a href="#">
    //       <i className="material-icons">campaign</i>
    //     </a>
    //     <a href="#">
    //       <i className="material-icons">forum</i>
    //     </a>
    //     <a href="#">
    //       <i className="material-icons">lightbulb</i>
    //     </a>
    //     <a href="#">
    //       <i className="material-icons">store</i>
    //     </a>
    //   </div>
    // </div>
    <div className="sidebar">
      <div className="logo">
        <img src={sakLogo} alt="Sakuchi" />
      </div>
      <div className="sidebar-body">
        <div className="sidebar-item">
          <a href="#">
            <img src={divider} alt="" />
          </a>
          <a href="#">
            <i className="material-icons">home</i>
          </a>
          <a href="#">
            <i className="material-icons">explore</i>
          </a>
          <a href="#">
            <i className="material-icons">campaign</i>
          </a>
          <a href="#">
            <i className="material-icons">forum</i>
          </a>
          <a href="#">
            <i className="material-icons">lightbulb</i>
          </a>
          <a href="#">
            <i className="material-icons">store</i>
          </a>
        </div>
      </div>
      <div className="sidebar-bottom-nores">
        <div className="sidebar-item">
          <a href="">
            <button className="material-icons button-add">add</button>
          </a>
          <a href="#">
            <img src={divider} alt="" />
          </a>
          <a href="">
            <i className="material-icons">notifications</i>
          </a>
          <a href="">
            <i className="material-icons">account_circle</i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Nav;
