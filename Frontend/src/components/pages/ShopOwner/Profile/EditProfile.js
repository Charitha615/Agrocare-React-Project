import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../../API/environment";
import Select from "react-select";
import Navbar from '../../shopOwnerNavBar';
import Daybar from '../../DayBar';
import jwt_decode from "jwt-decode";

const initialState = {
    product_name: "",
    unit_price: "",
    available_until: "",
    available_from: "",
    quantity: ""
};

const token = localStorage.getItem("Token");

class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onEventTypesOptionSelected = this.onEventTypesOptionSelected.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onEventTypesOptionSelected(e) {
        this.state.eventType = e.label;
    }

    onSubmit(event) {
        event.preventDefault();


        let ProfileDetails = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            mobile_no: this.state.mobile_no,
            nearest_city: this.state.nearest_city,
            district: this.state.district,
            province: this.state.province,
        };

        console.log("Product Details: ", ProfileDetails);

        const decoded = jwt_decode(token);
        console.log(decoded.result);
        
        let config = {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          }

        axios
            .patch(`${APIURL}/user/${decoded.result.id}`, ProfileDetails,config)
            .then((res) => {
                console.log("res", res);
                if (res.status === 201) {
                
                    toast.success("User updated!");
                    window.location.reload();

                } else {
                    toast.error("Please check your details");
                    alert(res.data.message);

                }
            });

    }

    render() {
        return (
            <>
                <div>
                    <Navbar />
                    <div className="page-wrapper">
                        <div className="topbar">

                        </div>
                        <div className="page-content" style={{ width: "1250px" }}>

                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-17">
                                        <div className="page-title-box">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="page-title">Edit Profile</h4>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" style={{ marginTop: "60px" }}>
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title">Update your Profile</h4>

                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">First Name</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" type="text" placeholder="" id="example-text-input"
                                                                    name="first_name"
                                                                    value={this.state.first_name}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">Last Name</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" type="text" placeholder="" id="example-text-input"
                                                                    name="last_name"
                                                                    value={this.state.last_name}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>


                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-number-input" className="col-sm-2 col-form-label text-right">Mobile</label>
                                                            <div className="col-sm-4">
                                                                <input className="form-control" type="text"  id="example-datetime-local-input"
                                                                    name="mobile_no"
                                                                    value={this.state.mobile_no}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>

                                                        </div>
                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-number-input" className="col-sm-2 col-form-label text-right">Nearest City</label>
                                                            <div className="col-sm-4">
                                                                <input className="form-control" type="text"  id="example-datetime-local-input"
                                                                    name="nearest_city"
                                                                    value={this.state.nearest_city}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>

                                                        </div>
                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-number-input" className="col-sm-2 col-form-label text-right">District</label>
                                                            <div className="col-sm-4">
                                                                <input className="form-control" type="text"  id="example-datetime-local-input"
                                                                    name="district"
                                                                    value={this.state.district}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>

                                                        </div>
                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-number-input" className="col-sm-2 col-form-label text-right">Province</label>
                                                            <div className="col-sm-4">
                                                                <input className="form-control" type="text"  id="example-datetime-local-input"
                                                                    name="province"
                                                                    value={this.state.province}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>

                                                        </div>
                                                        <div className="form-group row">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="button-items">
                                                    <button className="btn btn-outline-success waves-effect waves-light float-right" onClick={this.onSubmit}>Update</button>
                                                    <a href="/ExpertProfile" type="button" className="btn btn-outline-warning waves-effect float-left">Cancel</a>
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
                    </div></div>
            </>
        );
    }
}
export default EditProfile;