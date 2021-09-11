
import { lazy } from "react";
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
