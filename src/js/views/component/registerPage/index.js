import React, { Fragment } from "react";
import { ROUTES } from "../../../constants";
import "./RegisterPage.scss";

const RegisterPage = () => {
    return(<Fragment>
        <div className="register-container">
            <div className="register-title">
                <h2>Pendaftaran</h2>
                <p>Undangan bagi Rumah Produksi Film Indonesia untuk berpartisipasi dan<br />mendaftar dalam program Pemulihan Ekonomi Nasional (PEN) Subsektor Film<br />melalui Skema Promosi - Lisensi - Produksi</p>
            </div>
            <div className="register-block register-promosi">
                <div className="register-block-content">
                    <h2>Promosi</h2>
                    <p>Pendaftaran akan berlangsung mulai dari<br />1 - 10 Oktober 2021</p>
                    <div className="button-wrapper">
                        <a href={ROUTES.registerTerms} className="register-button">Syarat Pendaftaran</a>
                        <a href={ROUTES.downloadTacticalForm} className="register-button">Unduh Formulir</a>
                        <a href={ROUTES.uploadTacticalForm} className="register-button">Unggah Formulir</a>
                    </div>
                </div>
            </div>

            <div className="register-block register-produksi">
                <div className="register-block-content">
                    <h2>Lisensi</h2>
                    <p>Segera Hadir</p>
                </div>
            </div>

            <div className="register-block register-lisensi">
                <div className="register-block-content">
                    <h2>Produksi</h2>
                    <p>Segera Hadir</p>
                </div>
            </div>
        </div>
    </Fragment>)
}

export default RegisterPage;
