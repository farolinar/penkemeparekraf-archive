
import { lazy } from "react";
import { ROUTES } from "../constants";
const Home = lazy(()=>import('../views/pages/home'));

const Routes = [
    {
        path: ROUTES.home,
        component: Home,
        exact: true,
        default: true
    },
];

export default Routes;
