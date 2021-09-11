import React, { Fragment, useEffect, useState, lazy } from "react";
const Template = lazy(()=>import('../../layout/template'));

const Home = (props) => {
    return(<Template>
        Hello World!
    </Template>)
}

export default Home;
