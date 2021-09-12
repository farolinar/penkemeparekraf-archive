
import { lazy } from "react";
import { ROUTES } from "../constants";
const Home = lazy(()=>import('../views/pages/home'));
const AboutUs = lazy(()=>import('../views/pages/aboutUs'));

const Routes = [
    {
        path: ROUTES.home,
        component: Home,
        exact: true,
        default: true
    },
    {
        path: ROUTES.aboutUs,
        component: AboutUs,
        exact: true,
        default: true
    },
];

export default Routes;
