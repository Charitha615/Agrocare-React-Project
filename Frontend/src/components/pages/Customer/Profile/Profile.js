import React, { Component } from "react";
import Navbar from "../../customerNavibar";
import axios from "axios";
import { APIURL } from "../../../API/environment";

const initialState = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  email: "",
  Field: "",
  ID: "",
};

const token = localStorage.getItem("Token");

class FarmerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState,
      profile: [],
    };
  }

  componentDidMount() {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    console.log(token);

    axios
      .get(`${APIURL}/user/currentUser/`, config)

      .then((response) => {
        this.setState({ profile: response.data });
        console.log(" data profile", this.state.profile);

        this.setState({ firstName: this.state.profile.first_name });
        this.setState({ lastName: this.state.profile.last_name });
        this.setState({ mobileNumber: this.state.profile.mobile_no });
        this.setState({ Field: this.state.profile.Field });
        this.setState({ email: this.state.profile.email });
        this.setState({ nic: this.state.profile.nic });
        this.setState({ province: this.state.profile.province });
        this.setState({ ID: this.state.profile.id });
      });
  }

  render() {
    return (
      <>
        <div>
          <Navbar />
          <div className="page-wrapper">
            <div className="page-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="page-title-box">
                      <div className="row">
                        <div className="col">
                          <h4 className="page-title">Profile</h4>
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Customer</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters-sm mt-3">
                  <div className="col-md-4 mb-3">
                    <div
                      className="card"
                      style={{ width: "450px", marginTop: "100px" }}
                    >
                      <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt="Admin"
                            className="rounded-circle"
                            width={150}
                          />
                          <div className="mt-3">
                            <h4>{this.state.firstName}</h4>
                            <p className="text-secondary mb-1"> Farmer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-3"></div>
                  </div>
                  <div className="col-md-8">
                    <div
                      className="card mb-3"
                      style={{
                        marginLeft: "100px",
                        width: "700px",
                        marginTop: "60px",
                      }}
                    >
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Full Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {this.state.firstName} {this.state.lastName}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {this.state.email}
                          </div>
                        </div>
                        <hr />

                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">NIC</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {this.state.nic}
                          </div>
                        </div>
                        <hr />

                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Mobile Number</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {this.state.mobileNumber}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Province</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {this.state.province}
                          </div>
                        </div>
                        <hr />

                        <button
                          type="button"
                          className="btn btn-danger waves-effect waves-light"
                        >
                          Delete Profile
                        </button>
                        <a href="/CustomerProfileEdit">
                          {" "}
                          <button
                            type="button"
                            className="btn btn-warning waves-effect waves-light ml-4"
                          >
                            Update Profile
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer text-center text-sm-left">
                © 2022 Agrocare
              </footer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FarmerProfile;
