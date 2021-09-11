
import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
// const Home = lazy(()=>import('../views/pages/home'));
const Home = lazy(()=>import('../views/pages/home'));

const Routes = [
    {
        path: "/",
        component: Home,
        exact: true,
        default: true
    },
];

export default Routes;
