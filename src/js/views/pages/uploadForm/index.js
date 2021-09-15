import React from 'react';
import { ROUTES } from '../../../constants';
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
                        <a href={ROUTES.uploadTacticalForm}>Bantuan Pemerintah<br />Promosi Taktikal Film Indonesia</a>
                    </div>
                    {/* <div className="our-program">
                        <a href={ROUTES.uploadProductionForm}>Bantuan Pemerintah<br />Produksi Film Indonesia</a>
                    </div> */}
                </div>
            </div>
        </div>
        <UploadTacticalForm />
    </Template>
}

export default UploadForm;
