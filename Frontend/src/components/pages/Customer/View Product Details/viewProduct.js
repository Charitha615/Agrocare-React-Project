import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../../API/environment";
import Navbar from '../../customerNavibar';

const id = localStorage.getItem("ProductID")
const ProductPrice = localStorage.getItem("ProductPrice")
const ProductName = localStorage.getItem("ProductName")
const ProductQty = localStorage.getItem("ProductQty")
const ProductFrom = localStorage.getItem("ProductFrom")
const ProductUntill = localStorage.getItem("ProductUntill")

class ViewVacancy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewedJobDetails: "",
        }
    }
    componentDidMount() {

        // const ID = localStorage.getItem("ProductID");
        // console.log("ID is ", ID);
        // axios
        //     .get(`${APIURL}/product?id=${ID}`)
        //     .then((response) => {
        //         console.log("count ", response.data.data);
        //         this.setState({ viewedJobDetails: response.data.data });
        //         console.log("viewedJobDetails ", this.state.viewedJobDetails);
        //     });
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
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ width: "1200px" }}>

                                    <div className="col-lg-12">
                                        <div className="card" style={{ marginTop: "50px" }}>
                                            <div className="card-header">
                                                <h4 className="card-title">Product : {ProductName}</h4>
                                            </div>
                                            <div className="card-body">
                                                <table className="table table-borderless dt-responsive">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '8rem' }} />
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody >
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" >Product Name</h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{ marginTop: "-12px" }}>{ProductName}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" style={{ marginTop: "12px" }}>Price</h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{ marginTop: "5px" }}>{ProductPrice}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" >Product Quantity</h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" >{ProductQty}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" style={{ marginTop: "12px" }}>Starting Date </h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{ marginTop: "5px" }}>{ProductFrom}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" style={{ marginTop: "12px" }}>Ending Date </h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{ marginTop: "5px" }}>{ProductUntill}</p>
                                                            </td>
                                                        </tr>
                                                        

                                                    </tbody>
                                                </table>
                                                <a href="/ApplyForJobForm" className="btn btn-success btn-block">Add</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="footer text-center text-sm-left">
                                © 2020 Job Bank
                            </footer>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ViewVacancy;
