import React, { Fragment, useEffect, useState, lazy } from "react";
import "./layout.scss";
const Header = lazy(()=>import('./header'));
const Footer = lazy(()=>import('./footer'));

const HomeTemplate = () => {
    return(<div className="app">
        <Header />
            Hello World!
        <Footer />
    </div>)
}

export default HomeTemplate;
