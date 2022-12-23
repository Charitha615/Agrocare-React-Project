import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { APIURL } from "../../../../API/environment";
import { toast } from "react-toastify";
import Navbar from '../../../farmerNavibar';
import Daybar from '../../../DayBar';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const UserID = localStorage.getItem("LocalUserID");
// const UserID = "60f9393bf9010e001577b6ea";
const token = localStorage.getItem("Token");

class CreateProductList extends Component {

  constructor(props) {
    super(props);
    this.navigateWithID = this.navigateWithID.bind(this);
    this.RollBack = this.RollBack.bind(this);

    this.state = {
      Products : [
        // { title: "asda", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" },
        // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" },
        // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" },
        // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" },
        // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" }
      ]

    }
  }



  RollBack(e, jobID) {
    console.log(jobID)

    axios.delete(`${APIURL}/Applicant/deleteappliedJob/${jobID}`)

      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);

          toast.success("Applied Job is Deleted!");


          window.setTimeout(function () {
            window.location.reload();
          }, 1500);
        } else {
          toast.error(res.data.message);

        }
      });
  }

  navigateWithID(e, jobsId) {
    window.localStorage.removeItem("JobID");
    localStorage.setItem("JobID", jobsId)

    window.location.href = "/UpdateProduct";
  }

  assignId(e,id){
    e.preventDefault();
    console.log(id)
    window.localStorage.removeItem("productId")
    localStorage.setItem("productId",id)
    window.location="/UpdateProduct"
}


  componentDidMount() {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
          }
  }
    axios.get(`${APIURL}/product/allProducts?type=farmer`,config)

      .then(response => {

        console.log(" data getAppliedJob", response.data);
        this.setState({ Products: response.data});
      })
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="page-wrapper">

          <div className="page-content">
            <div className="container-fluid">

              <div className="row" style={{ width: "1200px" }}>
                <div className="col-sm-12">
                  <div className="page-title-box">
                    <div className="row">
                

                      <Daybar />

                    </div>
                  </div>


                </div>

              </div>
              <div className="row">
                <li className="list-inline-item">
                  <a href="/AddProduct"><button type="button" className="btn btn-success btn-sm" style={{ marginLeft: "1050px" }}
                  >Add Product</button></a>
                </li>
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <div id="viewtable">
                          <h3 style={{ 'textAlign': 'center' }}>
                            Created Product List
                          </h3>
                          <table className="table  table-bordered" >
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>quantity</th>
                                <th>Starting date</th>
                                <th>Ending date</th>
                                <th className="text-center">Status</th>

                              </tr>
                            </thead>
                            <tbody>
                              {this.state.Products.length > 0 && this.state.Products.map((item, index) => (



                                <tr>
                                  <td>{item.product_name}</td>
                                  <td>{item.unit_price}</td>
                                  <td>{item.quantity}</td>
                                  <td>{item.available_from}</td>
                                  <td>{item.available_until}</td>
                                  <td className="text-center">
                                    <div className="button-items">

                                    
                                        <>

                                          <button type="button" className="btn btn-warning waves-effect waves-light"
                                            onClick={e=>this.assignId(e,item.product_id)}>Edit</button>
                                          <button type="button" className="btn btn-danger waves-effect waves-light"
                                            onClick={e => this.RollBack(e, item._id)}>Delete</button>
                           

                                        </>
                              

                                
                                        <>

                                          <span className=" badge badge-soft-success ml-5">Online</span>

                                        </>
                              
                                    </div>
                                  </td>
                                </tr>
                              ))}

                            </tbody>
                          </table>
                        </div>
                      </div>
                      <span className="float-right">

                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <footer className="footer text-center text-sm-left">
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateProductList;