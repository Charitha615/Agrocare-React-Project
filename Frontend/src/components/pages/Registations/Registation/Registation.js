import React, { Component } from "react";
import "./Registation.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Select from "react-select";
import { APIURL } from "../../../API/environment";

const initialState = {
  first_name: "",
  last_name: "",
  user_type: "",
  nic: "",
  nearest_city: "",
  district: "",
  email: "",
  password: "",
  mobile_no: "",
  province: "",
};

const InterestedFieldsoptions = [
  { value: "farmer", label: "Farmer" },
  { value: "customer", label: "Customer" },
  { value: "expert", label: "Expert" },
  { value: "shop_owner", label: "Shop owner" },
];

class RegistationStudent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onGenderOptionSelected = this.onGenderOptionSelected.bind(this);
  }

  onGenderOptionSelected(e) {
    this.state.user_type = e.label;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    let UserDetails = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      user_type: this.state.user_type,
      nic: this.state.nic,
      email: this.state.email,
      password: this.state.password,
      mobile_no: this.state.mobile_no,
      nearest_city: this.state.nearest_city,
      district: this.state.district,
      province: this.state.province,
    };

    console.log(" Details : ", UserDetails);

    axios.post(`${APIURL}/user/register`, UserDetails).then((res) => {
      if (res.status === 201) {
        toast.success("Your Account Is Created!");
        window.setTimeout(function () {
          window.location.href = "/login";
        }, 170);
      } else {
        toast.error("Plz check your details!");
      }
    });
  }

  render() {
    return (
      <div className="SRbody">
        <div class="topnav">
          <a class="active" href="/">
            Home
          </a>
          <a href="/faq">FAQ</a>
          <a href="/utype">User Type</a>
          <a href="/login">Login</a>
        </div>
        <div className="container">
          <div className="row ">
            <div className="lottiefiles col-sm-12 col-md-4">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_q5pk6p1k.json"
                background="transparent"
                speed={1}
                loop
                autoPlay
              />
            </div>
            <div
              className="col-sm-12 col-md-8"
              style={{ marginBottom: "-60px", marginTop: "-80px" }}
            >
              <div className="container1">
                <h1 style={{ marginBottom: "-10px", marginTop: "-10px" }}>
                  Registration
                </h1>
                <form method="POST" onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="First Name"
                          name="first_name"
                          value={this.state.first_name}
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="NIC"
                          name="nic"
                          minlength="10"
                          value={this.state.nic}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Province "
                          name="province"
                          value={this.state.province}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <Select
                          placeholder="Create account as"
                          options={InterestedFieldsoptions}
                          onChange={this.onGenderOptionSelected}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Last Name"
                          name="last_name"
                          value={this.state.last_name}
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Nearest city"
                          name="nearest_city"
                          value={this.state.nearest_city}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="District"
                          name="district"
                          value={this.state.district}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="E-mail address"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Mobile number"
                      name="mobile_no"
                      value={this.state.mobile_no}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Password"
                      name="password"
                      minlength="6"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="otherInfo"
                      placeholder="Confirm Password"
                      defaultValue={""}
                      minlength="6"
                      name="additionaInfromation"
                    />
                  </div>
                  <div className="col-md-6 btnSubmit">
                    <button
                      type="submit"
                      className=" button1 btn btn-block mb-4"
                      style={{ marginBottom: "-80px", marginTop: "-20px" }}
                    >
                      SIGN UP
                    </button>
                  </div>
                  <div className="aha" style={{ marginTop: "-20px" }}>
                    Already have an account <Link to="/login"> Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistationStudent;
