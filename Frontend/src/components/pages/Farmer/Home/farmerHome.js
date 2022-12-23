import React, { Component } from "react";
import axios from "axios";
import { APIURL } from "../../../API/environment";
import Navbar from "../../farmerNavibar";
import Daybar from "../../DayBar";

const UserID = localStorage.getItem("LocalUserID");
const token = localStorage.getItem("Token");

class FarmerHome extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      Products: [
        // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" },
        // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" },
        // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" },
        // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" },
        // { title: "Rice", price: "1000",quantity:"10",starting_date:"2020-10-10",ending_date:"2030-10-10" }
      ],
    };
  }

  componentDidMount() {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(`${APIURL}/product/allProducts?type=Owner`, config)

      .then((response) => {
        this.setState({ Products: response.data });
        console.log("All Products response ", response.data);
      });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log("Products", this.state.searchname);
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
                          <li className="breadcrumb-item">
                            <a href="javascript:void(0);">Agrocare</a>
                          </li>
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
                      <li className="list-inline-item"></li>
                    </ul>
                  </div>
                </div>
              </div>

              <h1 className="page-title">All Products</h1>

              <div className="row" style={{ marginTop: "40px" }}>
                {this.state.Products.length > 0 &&
                  this.state.Products.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <div
                        className="card"
                        style={{ height: "300px", width: "350px" }}
                      >
                        <div className="card-body">
                          <div className="media mb-3">
                            <img
                              src="assets/images/widgets/project2.jpg"
                              alt=""
                              className="thumb-md rounded-circle"
                            />
                            <div className="media-body align-self-center text-truncate ml-3">
                              <h4 className="m-0 font-weight-semibold text-dark font-16">
                                {item.product_name}
                              </h4>
                              <p className="text-muted  mb-0 font-13">
                                <span className="text-dark">Price:</span>
                                {item.unit_price}
                              </p>
                            </div>
                          </div>
                          <hr className="hr-dashed" />

                          <div className="row">
                            <div className="col">
                              <div className="mt-3">
                                <p className="mb-0 font-weight-semibold">
                                  Product Quantity
                                </p>
                              </div>
                            </div>
                          </div>

                          <div style={{ marginTop: "-10px", height: "" }}>
                            <p className="text-muted mt-3">{item.quantity}</p>
                          </div>
                          <div
                            className="d-flex justify-content-between"
                            style={{ marginTop: "" }}
                          >
                            <h6 className="font-weight-semibold">
                              Starting Date :{" "}
                              <span className="text-muted font-weight-normal">
                                {" "}
                                {item.available_from}
                              </span>
                            </h6>
                          </div>
                          <div
                            className="d-flex justify-content-between"
                            style={{ marginTop: "" }}
                          >
                            <h6 className="font-weight-semibold">
                              Ending Date :{" "}
                              <span className="text-muted font-weight-normal">
                                {" "}
                                {item.available_until}
                              </span>
                            </h6>
                          </div>

                          <br />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FarmerHome;
