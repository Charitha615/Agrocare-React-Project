import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../../API/environment";
import Select from "react-select";
import Navbar from '../../shopOwnerNavBar';
import Daybar from '../../DayBar';

const initialState = {
    product_name: "",
    unit_price: "",
    available_until: "",
    available_from: "",
    quantity: ""
};

const Token = localStorage.getItem("Token");

class CreateProduct extends Component {

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

        let ProductDetails = {
            product_name: this.state.product_name,
            unit_price: this.state.unit_price,
            available_until: this.state.available_until,
            available_from: this.state.available_from,
            quantity: this.state.quantity
        };

        console.log("Product Details: ", ProductDetails);

        let config = {
            headers: {
                'Authorization': 'Bearer ' + Token
            }
        }

        axios
            .post(`${APIURL}/product/`, ProductDetails, config)
            .then((res) => {
                console.log("res", res);
                if (res.status === 201) {

                    toast.success("Product added!");
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
                                                    <h4 className="page-title">Add Fertilizer</h4>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" style={{ marginTop: "60px" }}>
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title">New Fertilizer</h4>

                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">Fertilizer Name</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" type="text" placeholder="Fertilizer Name is..." id="example-text-input"
                                                                    name="product_name"
                                                                    value={this.state.product_name}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">Fertilizer Price</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" type="text" placeholder="A Fertilizer Price is..." id="example-text-input"
                                                                    name="unit_price"
                                                                    value={this.state.unit_price}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">Available From</label>
                                                            <div className="col-sm-10">
                                                            <input type="date" id="available_from" 
                                                                    name="available_from"
                                                                    value={this.state.available_from}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">Available Util</label>
                                                            <div className="col-sm-10">
                                                            <input type="date" id="available_until" 
                                                                    name="available_until"
                                                                    value={this.state.available_until}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">Fertilizer quantity</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" type="text" placeholder="Fertilizer quantities are..." id="example-text-input"
                                                                    name="quantity"
                                                                    value={this.state.quantity}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>



                                                        {/* <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-number-input" className="col-sm-2 col-form-label text-right">Starting date</label>
                                                            <div className="col-sm-4">
                                                                <input className="form-control" type="date" defaultValue="2011-08-19T13:45:00" id="example-datetime-local-input"
                                                                    name="available_from"
                                                                    value={this.state.available_from}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>

                                                        </div>
                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-number-input" className="col-sm-2 col-form-label text-right">Ending date</label>
                                                            <div className="col-sm-4">
                                                                <input className="form-control" type="date" defaultValue="2011-08-19T13:45:00" id="example-datetime-local-input"
                                                                    name="available_until"
                                                                    value={this.state.available_until}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>

                                                        </div> */}
                                                       
                                                    </div>
                                                </div>
                                                <div className="button-items">
                                                    <button className="btn btn-outline-success waves-effect waves-light float-right" onClick={this.onSubmit}>Create</button>
                                                    <a href="emp-job-list.html" type="button" className="btn btn-outline-warning waves-effect float-left">Cancel</a>
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
export default CreateProduct;