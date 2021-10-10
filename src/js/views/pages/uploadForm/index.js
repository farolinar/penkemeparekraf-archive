import React from 'react';
import { ANCHOR, ROUTES } from '../../../constants';
import Template from '../../layout/template';
import "./UploadForm.scss";
import UploadTacticalForm from './UploadTacticalForm';

const UploadForm = () => {
    return <Template>
        <div className="upload-form-main-wrapper">
            <div className="our-program-filter"></div>
            <div className="our-program-main-content">
                <h2>Unggah Formulir</h2>
                <div className="our-programs">
                    // <a className="our-program" href={ROUTES.uploadTacticalForm}>Promosi</a>
                    <a className="our-program">Promosi</a>
                    <a className="our-program">Lisensi</a>
                    <a className="our-program" href={ROUTES.uploadProductionForm}>Produksi</a>
                    {/* <div className="our-program">
                        <a href={ROUTES.uploadProductionForm}>Bantuan Pemerintah<br />Produksi Film Indonesia</a>
                    </div> */}
                </div>
            </div>
        </div>
        {/* <div id={ANCHOR.programPromosiTaktikalFilm}>
            <UploadTacticalForm />
        </div> */}
    </Template>
}

export default UploadForm;
