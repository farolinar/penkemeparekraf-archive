import React from 'react';
import { ROUTES } from '../../../../constants';
import Template from '../../../layout/template';
import "./UploadProductionForm.scss";

const UploadForm = () => {
    return <Template>
        <div className="upload-form-main-wrapper">
            <div className="our-program-filter"></div>
            <div className="our-program-main-content">
                <h2>Pilih Kategori Pendaftar</h2>
                <div className="our-programs">
                    <a className="our-program" href={ROUTES.uploadProductionHouseForm}>Rumah Produksi</a>
                    <a className="our-program" href={ROUTES.uploadCommunityForm}>Komunitas Perfilman</a>
                </div>
            </div>
        </div>
    </Template>
}

export default UploadForm;
