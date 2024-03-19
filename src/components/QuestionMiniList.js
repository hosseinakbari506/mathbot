import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JSONDATA from '../api/QUESTIONS_DATA.json';
import axios from "axios";

function QuestionMiniList() {

    const [catfact, setcatfact] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
            setcatfact(res.data.title);
        })
    })

    return (
        <div>
            <div className="col-md-12 col-xs-12 responsive-box">
                    <div className="question-box">
                        <Link className="question-box-link" to="/questions/لورم-ایپسوم-متن-ساختگی">
                            <h4>{catfact}</h4>
                            <p>{catfact}</p>
                        </Link>
                    <div className="row question-box-bottom">
                        <div className="col-lg-3 col-md-4 col-xs-12 col-sm-4">
                            <p className="question-date">{val.question_date}</p>
                        </div>
                        <div className="col-lg-6 col-nd-8 col-xs-12 col-sm-8">
                            <p className="question-tag">{val.question_tag}</p>
                        </div>
                        <div className="col-md-2">
                            <p className="question-visit">{val.question_visit}</p>
                        </div>
                        <div className="col-md-1">
                            <p className="question-answer">{val.question_answer}</p>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
    
}

export default QuestionMiniList;