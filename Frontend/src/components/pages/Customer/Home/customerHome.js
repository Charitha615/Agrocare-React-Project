import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../../API/environment";
import Navbar from '../../customerNavibar';
import Daybar from '../../DayBar';


const UserID = localStorage.getItem("LocalUserID");
const token = localStorage.getItem("Token")
class CustomerHome extends Component {

    constructor(props) {
        super(props);
        this.applyJob = this.applyJob.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onChange = this.onChange.bind(this);

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


        this.state = {
            Products : [
                // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" },
                // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" },
                // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" },
                // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" },
                // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" }
              ],
            ApprovedTopList: [],
            AppliedJobs: [],
            ApproveStatus: "Approved",
            SProfile_status: "Student",
            searchVal: "",
            currentDate: date,
            searchname: ""

        }
    }

    applyJob(e,
        id,
        product_name,
        unit_price,
        quantity,
        available_from,
        available_until,
    ) {

        e.preventDefault();

        window.localStorage.removeItem("ProductID");
        window.localStorage.removeItem("ProductName");
        window.localStorage.removeItem("ProductPrice");
        window.localStorage.removeItem("ProductQty");
        window.localStorage.removeItem("ProductFrom");
        window.localStorage.removeItem("ProductUntill");

        localStorage.setItem("ProductID", id)
        localStorage.setItem("ProductName", product_name)
        localStorage.setItem("ProductPrice", unit_price)
        localStorage.setItem("ProductQty", quantity)
        localStorage.setItem("ProductFrom", available_from)
        localStorage.setItem("ProductUntill", available_until)


        window.location = "/CustomerviewProduct"


    }


    componentDidMount() {
        let config = {
            headers: {
              Authorization: `Bearer ${token}`
                }
        }
    
        axios.get(`${APIURL}/product/allProducts?type=Farmer`,config)

            .then(response => {
                this.setState({ Products: response.data});
                console.log("All Products response ", response.data);
            })


        
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log("Products", this.state.searchname)
    }

    onSearch(event) {
        event.preventDefault();
        const name = this.state.searchname;
        console.log("name", name)

        axios.get(`${APIURL}/vacancy/Searchjob/${name}`)

            .then(response => {
                this.setState({ Jobs: response.data.data });
                console.log("All jobs response ", response.data.data);
            })

    }

    render() {
        return (
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
                                                <h4 className="page-title">Home</h4>
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Agrocare</a></li>
                                             
                                                </ol>
                                            </div>
                                            <Daybar />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                    

                                <div className="col-lg-6 text-right">
                                    <div className="text-right">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                              
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <h1 className="page-title">All Products</h1>


                            <div className="row" style={{ marginTop: "40px" }}>

                                {this.state.Products.length > 0 && this.state.Products.map((item, index) => (

                                    <div className="col-lg-4" key={index} >
                                        <div className="card" style={{ height: "300px", width: "350px" ,marginTop:"30px"}}>
                                            <div className="card-body">
                                                <div className="media mb-3">
                                                    <img src="assets/images/widgets/project2.jpg" alt="" className="thumb-md rounded-circle" />
                                                    <div className="media-body align-self-center text-truncate ml-3">
                                                        <h4 className="m-0 font-weight-semibold text-dark font-16">{item.product_name}</h4>
                                                        <p className="text-muted  mb-0 font-13"><span className="text-dark">Price:
                                                        </span>{item.unit_price}</p>
                                                    </div>

                                                </div>
                                                <hr className="hr-dashed" />

                                                <div className="row">
                                                    <div className="col">
                                                        <div className="mt-3">

                                                            <p className="mb-0 font-weight-semibold">Product Quantity</p>
                                                        </div>
                                                    </div>



                                                </div>

                                                <div style={{ marginTop: "-10px", height: "" }}>
                                                    <p className="text-muted mt-3">
                                                        {item.quantity}
                                                    </p>

                                                </div>
                                                <div className="d-flex justify-content-between" style={{ marginTop: "" }}>
                                                    <h6 className="font-weight-semibold">Starting Date : <span className="text-muted font-weight-normal"> {item.available_from.slice(0, -14)}</span></h6>

                                                </div>
                                                <div className="d-flex justify-content-between" style={{ marginTop: "" }}>
                                                    <h6 className="font-weight-semibold">Ending Date : <span className="text-muted font-weight-normal"> {item.available_until.slice(0, -14)}</span></h6>

                                                </div>

                                                <br />
                                                <div className="button-items">
                                                    {item.isOpen == 1 && (
                                                        <>

                                                            <button className="btn btn-danger waves-effect waves-light btn-block" disabled
                                                            >Closed</button>

                                                        </>
                                                    )}

                                               
                                                        <>

                                                            <button type="button" className="btn btn-primary waves-effect waves-light btn-block"
                                                                onClick={e => this.applyJob
                                                                    (
                                                                        e,
                                                                        item.product_id,
                                                                        item.product_name,
                                                                        item.unit_price,
                                                                        item.quantity,
                                                                        item.available_from,
                                                                        item.available_until,
                                                                    )}><i className="mdi mdi-check-all mr-2" />View</button>

                                                        </>
                                          


                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>
                            <div className="row">
                            </div>
                        </div>
                        <footer className="footer text-center text-sm-left">
                            © 2021
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}
export default CustomerHome;