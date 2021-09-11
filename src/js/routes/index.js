
import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
// const Home = lazy(()=>import('../views/pages/home'));
const HomeTemplate = lazy(()=>import('../views/layout/homeTemplate'));

const Routes = [
    {
        path: "/",
        component: HomeTemplate,
        exact: true,
        default: true
    },
];

export default Routes;
