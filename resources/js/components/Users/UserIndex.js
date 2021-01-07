import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import UserContent from './UserContent';
import UserDiscountReport from './UserDiscountReport';
import UserEditProfile from './UserEditProfile';
import UserBusinessReport from './UserBusinessReport';

import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";



function Businessindex() {
    return(
        <BrowserRouter>
            <div>
                <Switch>
                    //user

                    <Route exact path="/user/home" component={UserContent}>

                    </Route>

                    <Route exact path="/user/businessreport" component={UserBusinessReport}>

                    </Route>

                    <Route exact path="/user/discountsreport" component={UserDiscountReport}>

                    </Route>

                    <Route exact path="/user/editprofile" component={UserEditProfile}>

                    </Route>

                </Switch>


                <UserHeader/>


                <UserFooter/>


            </div>
        </BrowserRouter>
    );
}
export default Businessindex;

if(document.getElementById('businessindex')){
    ReactDOM.render(<Businessindex/>,document.getElementById('businessindex'));
}
