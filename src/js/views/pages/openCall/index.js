import React from 'react';
import RegisterPage from '../../component/registerPage';
import Template from '../../layout/template';
import "./OpenCall.scss";

const OpenCall = () => {
    return <Template>
        <RegisterPage />
        {/* <div className="open-call-wrapper">
            <div className="open-call-filter"></div>
            <div className="open-call-content">
                <h2>Pendaftaran</h2>
                <p>Undangan bagi Rumah Produksi Film Indonesia untuk berpartisipasi dan mendaftar dalam program Pemulihan Ekonomi Nasional (PEN) Subsektor Film melalui Skema Bantuan Pemerintah Promosi Film Indonesia</p>
                <br />
                <br />
                <br />
                <p>Pendaftaran akan berlangsung mulai dari</p>
                <p>1 - 10 Oktober 2021</p>
                <div className="home-register-button">
                    <button>
                        <a href={ROUTES.registerTacticalTerms}>Syarat Pendaftaran</a>
                    </button>
                    <button>
                        <a href={ROUTES.downloadForm}>Unduh Formulir</a>
                    </button>
                    <button>
                        <a href={ROUTES.uploadForm}>Unggah Formulir</a>
                    </button>
                </div>
            </div>
        </div> */}
    </Template>
}

export default OpenCall;
