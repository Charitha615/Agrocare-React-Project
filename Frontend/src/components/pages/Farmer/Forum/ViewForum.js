import React, { Component } from "react";
import axios from "axios";
import { APIURL } from "../../../API/environment";
import Navbar from '../../farmerNavibar';
import Daybar from '../../DayBar';
import jwt_decode from "jwt-decode";

const UserID = localStorage.getItem("LocalUserID");
const token = localStorage.getItem("Token");

class ViewForum extends Component {

    constructor(props) {
        super(props);
        this.applyJob = this.applyJob.bind(this);
        this.navigateWithID = this.navigateWithID.bind(this);

        this.state = {

            Questions: [
                // { question: "What sprays/pesticides/herbicides do you use?", ans: "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that" },
                // { question: "What sprays/pesticides/herbicides do you use?", ans: "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that" },
                // { question: "What sprays/pesticides/herbicides do you use?", ans: "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that" },
                // { question: "What sprays/pesticides/herbicides do you use?", ans: "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that" },
                // { question: "What sprays/pesticides/herbicides do you use?", ans: "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that" },
            ],
            AppliedQuestions: [],
            ApproveStatus: "Approved",
            SProfile_status: "Student"
        }
    }

    navigateWithID(e, eventId) {
        window.localStorage.removeItem("EventID");
        localStorage.setItem("EventID", eventId)
        window.location.href = "/AdminEditEvent";
    }

    applyJob(e,
        _id,
        closing_date,
        createdAt,
        employerID,
        employerName,
        job_category,
        job_description,
        job_title,
        job_type
    ) {
        e.preventDefault();
    }

    componentDidMount() {
        let config = {
            headers: {
              Authorization: `Bearer ${token}`
                }
        }
          const decoded = jwt_decode(token);
        //   ${decoded.result.id}
        axios.get(`${APIURL}/message/allQuestions`,config)
            .then(response => {
                this.setState({ Questions: response.data });
                console.log("response ", response.data);
                // console.log("response ", response.data.answers[0]);
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
                                                <h4 className="page-title">Forum</h4>
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Agrocare</a></li>
                                                    <li className="breadcrumb-item active">Forum</li>
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



                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {this.state.Questions.length > 0 && this.state.Questions.map((item, index) => (
                                <div className="row">
                                    <div className="col-lg-4" key={index} >
                                        <div className="card" style={{ height: "250px", width: "1200px" }}>
                                            <div className="card-body">
                                                <div className="media mb-3">

                                                    <div className="media-body align-self-center text-truncate ml-3">
                                                        <h4 className="m-0 font-weight-semibold text-dark font-16">{item.question}</h4>

                                                        {/* <button type="button" className="btn btn-warning"
                                                            style={{ marginLeft: "1000px", marginTop: "-30px" }}
                                                            onClick={e => this.navigateWithID(e, item._id)}>Edit</button> */}
                                                  
                                                    </div>
                                                </div>
                                                <hr className="hr-dashed" style={{ marginTop: "-5px" }} />

                                                <div className="row" >
                                                    <div className="col">
                                                        <div className="mt-3">

                                                            <p className="mb-0 font-weight-semibold">Answer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ marginTop: "-15px", height: "90px" }}>
                                                    <p className="text-muted mt-4 mb-1">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                                <br />
                                                <div className="button-items" style={{ width: "500px", marginLeft: "280px", marginTop: "-50px" }}>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

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
export default ViewForum;