import React from "react";
import sakLogo from "../assets/LOGO.png";
import divider from "../assets/Line 1.png";
import "../style/ResponsiveNav.css";
function ResponsiveNav() {
  return (
    <div className="navbar-side">
      <img src={sakLogo} alt="sakuchi" className="btn d-md-none btn-logo" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive" />

      <div className="offcanvas-md offcanvas-start bg-custom" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
        <div className="offcanvas-header logo">
          <img src={sakLogo} alt="Sakuchi" />
        </div>
        <div className="sidebar-body">
          <div className="responsive-item">
            <a href="">
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
        <div className="sidebar-bottom">
          <div className="responsive-item">
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
    </div>
  );
}

export default ResponsiveNav;
