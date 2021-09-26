import React from 'react';
import { ANCHOR } from '../../../constants';
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
                    <div className="our-program">
                        <a href={`#${ANCHOR.programPromosiTaktikalFilm}`}>Promosi</a>
                    </div>
                    <div className="our-program">
                        <a>Lisensi</a>
                    </div>
                    <div className="our-program">
                        <a>Produksi</a>
                    </div>
                    {/* <div className="our-program">
                        <a href={ROUTES.uploadProductionForm}>Bantuan Pemerintah<br />Produksi Film Indonesia</a>
                    </div> */}
                </div>
            </div>
        </div>
        <div id={ANCHOR.programPromosiTaktikalFilm}>
            <UploadTacticalForm />
        </div>
    </Template>
}

export default UploadForm;
