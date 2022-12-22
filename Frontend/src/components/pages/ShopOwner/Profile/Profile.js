import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Navbar from '../../shopOwnerNavBar';
import Daybar from '../../DayBar';
import axios from "axios";
import { APIURL } from "../../../API/environment";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

const initialState = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  email: "",
  Field: "",
  ID: ""
};

const token = localStorage.getItem("Token")
class ShopProfile extends Component {


  constructor(props) {
    super(props);
    this.state = {
      initialState,
      applicant: []
    };
  }


  componentDidMount() {

    let config = {
        headers: {
          Authorization: `Bearer ${token}`
            }
    }

    // console.log(token)

    axios.get(`${APIURL}/user/currentUser/`,config)

      .then(response => {

        this.setState({ applicant: response.data });
        console.log(" data applicant", this.state.applicant);

        this.setState({ firstName: this.state.applicant.first_name });
        this.setState({ lastName: this.state.applicant.last_name });
        this.setState({ mobileNumber: this.state.applicant.mobile_no });
        this.setState({ Field: this.state.applicant.Field });
        this.setState({ email: this.state.applicant.email });
        this.setState({ nic: this.state.applicant.nic });
        this.setState({ province: this.state.applicant.province });
        this.setState({ ID: this.state.applicant.id });
      })
  }

  deleteUser(){
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
          }
  }
    const decoded = jwt_decode(token);
    axios.get(`${APIURL}/user/${decoded.result.id}`,config)

    .then(response => {

      this.setState({ applicant: response.data });
      console.log(" data applicant", this.state.applicant);

      
    })
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
                            <li className="breadcrumb-item active">Farmer</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters-sm mt-3">
                  <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: "450px", marginTop: "100px" }}>
                      <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                          <div className="mt-3">
                            <h4>{this.state.firstName}</h4>
                            <p className="text-secondary mb-1"> Shop Owner</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-3">

                    </div>
                  </div>
                  <div className="col-md-8">
                  <div className="col-md-8">
                    <div className="card mb-3" style={{ marginLeft: "100px", width: "700px", marginTop: "60px" }}>
                      <div className="card-body" >
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
                        {/* <a href="/ApplicantAppliedJobList" type="button" className="btn btn-outline-success waves-effect float-left" style={{ marginLeft: "280px" }}
                        >Applied vacancies</a> */}

                        <button type="button" className="btn btn-danger waves-effect waves-light" onClick={this.deleteUser}
                        >Delete Profile</button>
                        <a href="/ShopOwnerProfileEdit" >  <button type="button" className="btn btn-warning waves-effect waves-light ml-4"
                        >Update Profile</button></a>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <footer className="footer text-center text-sm-left">
                © 2021 Agrocare
              </footer>
            </div>
          </div>
        </div>
      </>
    );

  }
}


export default ShopProfile;