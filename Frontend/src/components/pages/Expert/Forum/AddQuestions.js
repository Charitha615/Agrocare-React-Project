import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../../API/environment";
import Navbar from "../../expertNavibar";

const initialState = {
  product_name: "",
  unit_price: "",
  available_until: "",
  available_from: "",
  quantity: "",
};

const Token = localStorage.getItem("Token");
const questionId = localStorage.getItem("questionId");
const question = localStorage.getItem("question");

class FarmerQuestions extends Component {
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
    event.preventDefault();

    let QuestionsDetails = {
      answer: this.state.answer,
    };
    console.log(QuestionsDetails);

    console.log("Product Details: ", QuestionsDetails);

    let config = {
      headers: {
        Authorization: "Bearer " + Token,
      },
    };

    axios
      .post(
        `${APIURL}/message/question/${questionId}`,
        QuestionsDetails,
        config
      )
      .then((res) => {
        console.log("res", res);
        if (res.status === 201) {
          toast.success("Answer added!");
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
            <div className="topbar"></div>
            <div className="page-content" style={{ width: "1250px" }}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-17">
                    <div className="page-title-box">
                      <div className="row">
                        <div className="col"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row" style={{ marginTop: "60px" }}>
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Questions</h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group row">
                              <label
                                htmlFor="example-text-input"
                                className="col-sm-2 col-form-label text-right"
                              >
                                Question
                              </label>
                              <div className="col-sm-10">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder={question}
                                  id="example-text-input"
                                  readOnly
                                  name="product_name"
                                  // value={this.state.product_name}
                                  // onChange={this.onChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="example-text-input"
                                className="col-sm-2 col-form-label text-right"
                              >
                                Answer
                              </label>
                              <div className="col-sm-10">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Type your question..."
                                  id="example-text-input"
                                  name="answer"
                                  value={this.state.answer}
                                  onChange={this.onChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group row"></div>
                          </div>
                        </div>
                        <div className="button-items">
                          <button
                            className="btn btn-outline-success waves-effect waves-light float-right"
                            onClick={this.onSubmit}
                          >
                            Submit
                          </button>
                          <a
                            href="emp-job-list.html"
                            type="button"
                            className="btn btn-outline-warning waves-effect float-left"
                          >
                            Cancel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="footer text-center text-sm-left">
                  ?? 2022 Agrocare
                </footer>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default FarmerQuestions;
