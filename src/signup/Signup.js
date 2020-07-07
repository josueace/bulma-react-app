import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";
import 'bulma/css/bulma.css';

function Signup(props){
    const element=(
        <div>
    <Navbar/>
    <form>
    <FormField labelName="Name" type="text" holder="e.g Alex Smith" />
    <FormField labelName="Email" type="email" holder="e.g. alexsmith@gmail.com" />
    <FormField labelName="Password" type="password" holder="**********" />
        <CoolButton btntype="submit" className="button is-small is-success" val="submit" />
    </form>
        </div>
    );

    return element;
}


export default Signup;