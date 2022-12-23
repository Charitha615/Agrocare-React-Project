import React, { Component } from "react";
import "./login.css";
import LogoImg from "../../Images/Logo2.png";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
import jwt_decode from "jwt-decode";

const initialState = {
  email: "",
  password: "",
  stu: 1,
  emp: 1,
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    localStorage.clear();
    event.preventDefault();
    let login = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log("email", login);

    axios.post(`${APIURL}/user/login`, login).then((res) => {
      console.log("res", res);

      if (res.status === 201) {
        console.log("data are 201", res.data.data.token);

        localStorage.setItem("Token", res.data.data.token);

        const token = res.data.data.token;
        const decoded = jwt_decode(token);
        console.log(decoded.result);

        const userRoleStatus = decoded.result.user_type;

        if (userRoleStatus === "Farmer") {
          console.log("userRoleStatus", userRoleStatus);
          toast.success("You login as a Farmer");
          window.location.href = "/FarmerHomePage";
        }
        if (userRoleStatus === "Shop owner") {
          console.log("userRoleStatus", userRoleStatus);
          toast.success("You login as a Farmer");
          window.location.href = "/ShopOwnerHome";
        }

        if (userRoleStatus === "Expert") {
          console.log("userRoleStatus", userRoleStatus);
          localStorage.setItem("LocalEmployerID", decoded.result.id);
          toast.success("You login as a Farmer");
          window.location.href = "/ExpertViewForum";
        }

        if (userRoleStatus === "Customer") {
          console.log("userRoleStatus", userRoleStatus);
          toast.success("You login as a Farmer");
          window.location.href = "/CustomerHomePage";
        }
      }
    });
  }

  render() {
    return (
      <>
        <div className="logmain">
          <div class="topnav">
            <a class="active" href="/">
              Home
            </a>
            <a href="/faq">FAQ</a>
            <a href="/utype">User Type</a>
          </div>
          <div className="logForm">
            <form method="POST" onSubmit={this.onSubmit}>
              <div className="imglogForm">
                <img
                  src={LogoImg}
                  alt="Avatar"
                  className="avatar"
                  width={130}
                  height={100}
                />
              </div>
              <div className="con">
                <label className="lable-data" htmlFor="name">
                  Gmail
                </label>
                <input
                  className="add-data"
                  type="text"
                  id="name"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="con">
                <label className="lable-data" htmlFor="password">
                  Password
                </label>
                <input
                  className="add-data"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  id="password"
                />
              </div>
              <div>
                <div className="con-checkbox" style={{ marginTop: "20px" }}>
                  <input type="checkbox" style={{ marginLeft: "-100px" }} />
                  <span
                    style={{
                      marginTop: "0px",
                      color: "black",
                      marginLeft: "-100px",
                    }}
                  >
                    Remember
                  </span>
                </div>
                <div className="con" style={{ marginTop: "20px" }}>
                  <input
                    className="add-data-submit"
                    type="submit"
                    defaultValue="Login"
                  />
                  <br />
                </div>
                <div className="linkp">
                  <a href="*">Forgot password</a>
                </div>
                <br />

                <div className="linkp">
                  <span style={{ color: "black" }}>
                    Do not have an account?
                  </span>
                  <a href="/"> Register Now </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
