
import { lazy } from "react";
import { Redirect } from "react-router";
import { ROUTES } from "../constants";
const Home = lazy(()=>import('../views/pages/home'));
const AboutUs = lazy(()=>import('../views/pages/aboutUs'));
const ContactUs = lazy(()=>import('../views/pages/contactUs'));
const Program = lazy(()=>import('../views/pages/program'));
const OpenCall = lazy(()=>import('../views/pages/openCall'));
const DownloadForm = lazy(()=>import('../views/pages/downloadForm'));
const UploadForm = lazy(()=>import('../views/pages/uploadForm'));
const UploadTacticalForm = lazy(()=>import('../views/pages/uploadForm/UploadTacticalForm'));
const UploadProductionForm = lazy(()=>import('../views/pages/uploadForm/uploadProductionForm/index'));
const UploadProductionHouseForm = lazy(()=>import('../views/pages/uploadForm/uploadProductionForm/UploadProductionHouseForm'));
const UploadCommunityForm = lazy(()=>import('../views/pages/uploadForm/uploadProductionForm/UploadCommunityForm'));
const UploadPraProductionForm = lazy(()=>import('../views/pages/uploadForm/UploadPraProductionForm'));
const RegisterTacticalTerms = lazy(()=>import('../views/pages/registerTerms/RegsiterTacticalTerms'));
const RegisterProductionTerms = lazy(()=>import('../views/pages/registerTerms/RegisterProductionTerms'));
const RegisterPraProductionTerms = lazy(()=>import('../views/pages/registerTerms/RegisterPraProductionTerms'));
const DownloadTacticalForm = lazy(()=>import('../views/pages/downloadForm/DownloadForm'));
const DownloadProductionForm = lazy(()=>import('../views/pages/downloadForm/DownloadProductionForm'));
const DownloadPraProductionForm = lazy(()=>import('../views/pages/downloadForm/DownloadPraProductionForm'));
const Pengumuman = lazy(()=>import('../views/pages/pengumuman'));
const PengumumanProduksi = lazy(()=>import('../views/pages/pengumuman/PengumumanProduksi'));
const PengumumanPraProduksi = lazy(()=>import('../views/pages/pengumuman/PengumumanPraProduksi'));
const FAQ = lazy(()=>import('../views/pages/faq'));

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
    {
        path: ROUTES.downloadForm,
        component: DownloadForm,
        exact: true,
        default: true
    },
    {
        path: ROUTES.downloadTacticalForm,
        component: DownloadTacticalForm,
        exact: true,
        default: true
    },
    {
        path: ROUTES.downloadProductionForm,
        component: DownloadProductionForm,
        exact: true,
        default: true
    },
    {
        path: ROUTES.downloadPraProductionForm,
        component: DownloadPraProductionForm,
        exact: true,
        default: true
    },
    {
        path: ROUTES.uploadForm,
        component: UploadForm,
        exact: true,
        default: true
    },
    {
        path: ROUTES.uploadTacticalForm,
        component: UploadTacticalForm,
        exact: true,
        default: true
    },
    {
        path: ROUTES.uploadProductionForm,
        component: UploadProductionForm,
        exact: true,
        default: true
    },
    {
        path: ROUTES.uploadProductionHouseForm,
        component: UploadProductionHouseForm,
        exact: true,
        default: true
    },
    {
        path: ROUTES.uploadCommunityForm,
        component: UploadCommunityForm,
        exact: true,
        default: true
    },
    {
        path: ROUTES.uploadPraProductionForm,
        component: UploadPraProductionForm,
        exact: true,
        default: true
    },
    {
        path: ROUTES.registerTacticalTerms,
        component: RegisterTacticalTerms,
        exact: true,
        default: true
    },
    {
        path: ROUTES.registerProductionTerms,
        component: RegisterProductionTerms,
        exact: true,
        default: true
    },
    {
        path: ROUTES.registerPraProductionTerms,
        component: RegisterPraProductionTerms,
        exact: true,
        default: true
    },
    {
        path: ROUTES.pengumuman,
        component: (props)=><Redirect to={ROUTES.pengumumanPraProduksi} />,
        exact: true,
    },
    {
        path: ROUTES.pengumumanProduksi,
        component: PengumumanProduksi,
        exact: true,
        default: true
    },
    {
        path: ROUTES.pengumumanPromosi,
        component: Pengumuman,
        exact: true,
        default: true
    },
    {
        path: ROUTES.pengumumanPraProduksi,
        component: PengumumanPraProduksi,
        exact: true,
        default: true
    },
    {
        path: ROUTES.registerFAQ,
        component: FAQ,
        exact: true,
        default: true
    },
];

export default Routes;
