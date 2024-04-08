import React, { useEffect, useState } from 'react';
import profile from '../assets/images/profile.png';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

function Account() {

    const [expand, setexpand] = useState(false)
    const [data, setdata] = useState([])

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token != null) {
            var decodedToken = jwtDecode(token);
            axios.get("https://server.mathbot.ir/api/accounts/" + decodedToken.username).then((res) => {
                setdata(res.data)
            })
        }
    }, [])

    function validToken() {
        let token = localStorage.getItem('token');

        if (token == null) {
            return false
        } else {
            var decodedToken = jwtDecode(token);
            var currentDate = new Date();
        }
  
        // JWT exp is in seconds
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
          return false
        } else {   
          return true
        }
    }

    if (!validToken()) {
        window.location.replace("/login");
    } else {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>Account</title>
                </Helmet>

                <div className="section">
                    <div className="container">
                        <div className="row account">
                            <div className="col-md-3">
                                <div className="account-sidebar">
                                    <div className="account-user-img-box-large">
                                        <img src={profile} className="account-user-img" alt="Hossein Akbari" />
                                    </div>
                                    <p style={{textAlign: "center", padding: "15px 0px 0px 0px"}}>{data.name}</p>
                                    
                                </div>

                                <div onClick={() => { setexpand(false) }} className="account-sidebar-links"><span style={expand ? { } : {background: "#29a58d", color: "#fff", transition: "all 0.2s ease"}}>پروفایل من</span></div>
                                <div onClick={() => { setexpand(true) }} className="account-sidebar-links"><span style={expand ? {background: "#29a58d", color: "#fff", transition: "all 0.2s ease"} : { }}>ادیت پروفایل و تنظمیات</span></div>
                                <div className="account-sidebar-links"><span>خروج از حساب کاربری</span></div>

                            </div>
                            <div className="col-md-9">
                                <div className="account-section">
                                    <div style={expand ? {display: 'none'} : { }}>
                                        <h4 style={{fontWeight: "900"}}>{data.name}</h4>
                                        <p>{data.bio}</p>
                                        <div className="activity">
                                            <h5 className="h5-mini-profile">پاسخ های داده شده</h5>
                                                <p><Link to="/questions/لورم-ایپسوم-متن-ساختگی" className="post-mini-profile">جبر چیست؟</Link></p>
                                                <p><Link to="/questions/لورم-ایپسوم-متن-ساختگی" className="post-mini-profile">چطور این فرمول را حساب کنم</Link></p>
                                            <h5 className="h5-mini-profile">سوالات ثبت شده</h5>
                                                <p><Link to="/questions/لورم-ایپسوم-متن-ساختگی" className="post-mini-profile">بهترین روش برای حل مسئله های توان دار</Link></p>
                                                <p><Link to="/questions/لورم-ایپسوم-متن-ساختگی" className="post-mini-profile">در این مسئله مثلثات مشکل دارم و فرمول هم نیاز دارم</Link></p>
                                        </div>
                                    </div>
                                    <div style={expand ? { } : {display: 'none'}}>
                                        <div className="edit-profile-box">
                                            <span>نام و نام خانوادگی : </span><input className="edit-profile-box-input" type="text" value={data.name} />
                                        </div>
                                        <div className="edit-profile-box">
                                            <span>بایو (زمینه فعالیت) : </span><input className="edit-profile-box-input" type="text" value={data.bio} />
                                        </div>
                                        <div className="edit-profile-box">
                                            <span>نام کاربری : </span><input className="edit-profile-box-input" type="text" value="hosseinakbari" />
                                        </div>
                                        <div className="edit-profile-box">
                                            <span>ایمیل : </span><input className="edit-profile-box-input" type="text" value="hosseinakbari506@gmail.com" />
                                        </div>
                                        <button className="save-profile-box">ذخیره تغییرات</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default Account;