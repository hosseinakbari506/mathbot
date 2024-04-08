import React, { Component } from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

function Footer() {
    function validToken() {
        let token = localStorage.getItem('token');

        if (token == null || token == "LOGGEDOUT") {
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
    return (
        <div class="footer ">
            <div class="container ">
                <div class="row ">
                    <div className="footerBox">
                        <p>به یاد <a target="_blank" rel="noreferrer" href="https://fa.wikipedia.org/wiki/%D9%85%D8%B1%DB%8C%D9%85_%D9%85%DB%8C%D8%B1%D8%B2%D8%A7%D8%AE%D8%A7%D9%86%DB%8C">مریم میرزاخانی</a> / <Link to="/contact">تماس با ما</Link></p>
                    </div>
                    <div className="mobile-header">
                        
                        {validToken() ? (
                            <Link to="/account">
                                <span className="mobile-header-button">
                                        <i class="fa-solid fa-user header-buttons-ico"></i>
                                </span>
                            </Link>     
                        ) : (
                            <Link to="/login">
                                <span className="mobile-header-button">
                                        <i class="fa-solid fa-right-to-bracket header-buttons-ico"></i>
                                </span>
                            </Link>
                        )}

                        <Link to="/help">
                            <span className="mobile-header-button">
                                <i class="fas fa-question header-buttons-ico"></i>
                            </span>
                        </Link>
                        <Link to="/questions/ask">
                            <span className="mobile-header-button">
                                <i class="fas fa-plus header-buttons-ico"></i>
                            </span>
                        </Link>
                        <Link to="/search">
                            <span className="mobile-header-button">
                                <i class="fas fa-search header-buttons-ico"></i>
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;