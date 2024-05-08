import React from 'react';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import IsAuthenticated from "../utils/IsAuthenticated";

function Notifications() {    
        
    return (
        <div>

            <Header />

            <Helmet>
                <title>Notifications</title>
            </Helmet>

            <div className="section">
                {IsAuthenticated() ? (<p>به زودی</p>) : (<p>بایستی وارد حساب کاربری خود شوید</p>)}
            </div>
            
        </div>
    );
    
}

export default Notifications;