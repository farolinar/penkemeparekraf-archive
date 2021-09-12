import React from 'react';
import { ROUTES } from '../../../constants';
import Template from '../../layout/template';
import "./OpenCall.scss";

const OpenCall = () => {
    return <Template>
        <div className="open-call-wrapper">
            <div className="open-call-filter"></div>
            <div className="open-call-content">
                <h2>Pendaftaran</h2>
                <p>Undangan bagi Rumah Produksi Film Indonesia untuk berpartisipasi dan mendaftar dalam program Pemulihan Ekonomi Nasional (PEN) Subsektor Film melalui Skema Bantuan Pemerintah Promosi Taktikal Film Indonesia dan Skema Bantuan Pemerintah Produksi Film Indonesia</p>
                <br />
                <br />
                <br />
                <p>Pendaftaran akan berlangsung mulai</p>
                <p>15 - 25 September 2021</p>
                <div className="home-register-button">
                    <button>
                        <a href={ROUTES.registerTerms}>Syarat Pendaftaran</a>
                    </button>
                    <button>
                        <a href={ROUTES.downloadForm}>Unduh Formulir</a>
                    </button>
                    <button>
                        <a href={ROUTES.uploadForm}>Unggah Formulir</a>
                    </button>
                </div>
            </div>
        </div>
    </Template>
}

export default OpenCall;
