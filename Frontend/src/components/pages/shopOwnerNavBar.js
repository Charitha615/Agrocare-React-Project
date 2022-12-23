import React, { Component } from "react";
import LogoImg from "./Registations/RegistationHome/logo.png";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="left-sidenav">
          <div style={{ width: "250px", height: "130px" }}>
            {/* LOGO */}
            <div className="brand">
              <a href="crm-index.html" className="logo">
                <span>
                  <img
                    src={LogoImg}
                    alt="logo-large"
                    className="logo-sm"
                    style={{
                      width: "200px",
                      height: "140px",
                      marginTop: "20px",
                    }}
                  />
                </span>
                <span></span>
              </a>
            </div>
            {/*end logo*/}
          </div>

          <div
            className="menu-content h-100"
            data-simplebar
            style={{ marginTop: "50px" }}
          >
            <div style={{ color: "white" }}> Shop Owner </div>
            <ul className="metismenu left-sidenav-menu">
              <li>
                <a href="/ShopOwnerHome">
                  <i class="fas fa-home" style={{ color: "white" }}></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i
                    data-feather="grid"
                    className="align-self-center fas fa-calendar-week "
                    style={{ color: "white" }}
                  />
                  <span>Fertilizer</span>
                  <span className="menu-arrow"></span>
                </a>
                <ul className="nav-second-level" aria-expanded="false">
                  <li className="nav-item">
                    <a className="nav-link" href="/Addfertilizer">
                      <i
                        className="align-self-center fas fa-plus"
                        style={{ color: "white" }}
                      />
                      Add Fertilizer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/CreatedfertilizerList">
                      <i
                        className="align-self-center fas fa-list"
                        style={{ color: "white" }}
                      />
                      My Fertilizer
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/ShopOwnerProfile" style={{ marginTop: "10px" }}>
                  <i
                    data-feather="layers"
                    className="align-self-center fas fa-user-alt"
                    style={{ color: "white" }}
                  />
                  <span>My profile</span>
                </a>
              </li>

              <li>
                <a href="/login" style={{ marginTop: "100px" }}>
                  <i
                    data-feather="layers"
                    class="align-self-center fas fa-sign-out-alt"
                    style={{ color: "white" }}
                  ></i>
                  <span>Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
