import React, { Component } from "react";
import "./utype.css";
import LogoImg from "./logo.png";

class RegistationHome extends Component {
  render() {
    return (
      <div className="RHbody">
        <div class="topnav">
          <a href="/">Home</a>
          <a href="/faq">FAQ</a>
          <a class="active" href="/utype">
            User Type
          </a>
          <a href="/login">Login</a>
        </div>
        <div className="container">
          <div className="row">
            <div className="TopRow">
              <img
                src={LogoImg}
                className="Logoimg"
                style={{
                  width: "300px",
                  height: "200px",
                  marginLeft: "300px",
                  marginBottom: "-50px",
                  marginTop: "-30px",
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              marginLeft: "270px",
              marginRight: "320px",
              marginTop: "10px",
              marginBottom: "30px",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <div className="colcontainer">
              <div>
                <center>
                  <h3>About </h3>
                </center>

                <p style={{ margin: "25px" }}>
                  Our purpose of this platform is to facilitate farmers in one
                  platform. Farmers have to fave inconveniences when they try to
                  sell their products and through this platform by connecting
                  farners and Customers directly that issue is addressed.
                  Likewise, farmers have to waste their time on finding
                  fertilizer. Through this platform, farmers can check the
                  availability of the fertilizers they want before they go.
                  Moreover, to make a direct connection between farmers and
                  agricultural Experts for getting supervision for Farmers'
                  problems are provided in this platform.
                </p>
              </div>

              <div>
                <div class="row">
                  <div class="column">
                    <div class="card" style={{ minHeight: "200px" }}>
                      <h3>Farmers </h3>
                      <p>
                        The user type "Farmer" is reserved for farmers. Farmers
                        can create account by selecting user type "Farmer".
                        After logging into the system as a farmer, Farmers can
                        add their products for sale to the system. They can
                        check the availability of the ferlizer from the
                        Fertilizer section. Moreover farmers can post the
                        questions they have related to the agricultural field
                        and get answers from the exoerts in the agricultural
                        field.
                      </p>
                    </div>
                  </div>

                  <div class="column">
                    <div class="card" style={{ minHeight: "220px" }}>
                      <h3>Customer </h3>
                      <p>
                        The user type "Customer" is reserved for the buyers who
                        want to buy the products of farmers. Likewise, Customers
                        can view the question and answers forum related to
                        agricultural sector.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="column">
                    <div class="card">
                      <h3>Owner </h3>
                      <p>
                        The user type "Owner" is reserved for shop ownera who
                        owned products such as different fertilizers which are
                        required for farners. Shop owners can add details about
                        their shop and the products available at the moment.
                      </p>
                    </div>
                  </div>

                  <div class="column">
                    <div class="card">
                      <h3>Expert </h3>
                      <p>
                        The user type "Expert" is reserved for agricultural
                        Experts who are expertized in the agricultural sector.
                        By logging into the system as an agricultural expert,
                        you can view the list of questions which are added by
                        the farmers and you can provide the answers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistationHome;
