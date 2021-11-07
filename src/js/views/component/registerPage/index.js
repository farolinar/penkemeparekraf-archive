import React, { Fragment } from "react";
import { ROUTES, ANCHOR } from "../../../constants";
import "./RegisterPage.scss";

const RegisterPage = () => {
    return(<Fragment>
        <div className="register-container">
            <div className="register-title">
                <h2>Pendaftaran</h2>
                <p>Undangan bagi Insan Perfilman Indonesia untuk berpartisipasi dan<br />mendaftar dalam program Pemulihan Ekonomi Nasional (PEN) Subsektor Film<br />melalui Skema Promosi - Pra-Produksi - Produksi</p>
            </div>
            <div className="register-block register-promosi">
                <div className="register-block-content">
                    <h2>Promosi</h2>
                    <p>Pendaftaran telah ditutup</p>
                    <p>Pendaftaran telah berlangsung tanggal 1-10 Oktober 2021</p>
                    <div className="button-wrapper">
                        <a href={`${ROUTES.pengumuman}?s=${ANCHOR.pengumumanPromotion}`} className="register-button">Pengumuman</a>
                    </div>
                </div>
            </div>

            <div className="register-block register-produksi">
                <div className="register-block-content">
                    <h2>Pra-Produksi</h2>
                    <p>Pendaftaran telah ditutup</p>
                    <p>Pendaftaran telah berlangsung tanggal 2-7 November 2021</p>
                    <div className="button-wrapper">
                        <a href={ROUTES.registerFAQ} className="register-button">FAQ Skema Pra-Produksi</a>
                    </div>
                </div>
            </div>

            <div className="register-block register-lisensi">
                <div className="register-block-content">
                    <h2>Produksi</h2>
                    <p>Pendaftaran telah ditutup</p>
                    <p>Pendaftaran telah berlangsung tanggal 8-17 Oktobe 2021</p>
                    <div className="button-wrapper">
                    </div>
                </div>
            </div>
        </div>
    </Fragment>)
}

export default RegisterPage;
