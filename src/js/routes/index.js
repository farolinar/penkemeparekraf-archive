
import { lazy } from "react";
import { ROUTES } from "../constants";
const Home = lazy(()=>import('../views/pages/home'));
const AboutUs = lazy(()=>import('../views/pages/aboutUs'));
const ContactUs = lazy(()=>import('../views/pages/contactUs'));
const Program = lazy(()=>import('../views/pages/program'));
const OpenCall = lazy(()=>import('../views/pages/openCall'));

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
    {
        path: ROUTES.contactUs,
        component: ContactUs,
        exact: true,
        default: true
    },
    {
        path: ROUTES.program,
        component: Program,
        exact: true,
        default: true
    },
    {
        path: ROUTES.register,
        component: OpenCall,
        exact: true,
        default: true
    },
];

export default Routes;
