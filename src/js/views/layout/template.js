import React, { lazy } from "react";
import "./layout.scss";
const Header = lazy(()=>import('./header'));
const Footer = lazy(()=>import('./footer'));

const Template = (props) => {
    return(<div className="app">
        <Header />
            {props.children}
        {!props.withoutFooter && <Footer />}
    </div>)
}

export default Template;
