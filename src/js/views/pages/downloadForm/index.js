import React from 'react';
import Template from '../../layout/template';
import "./DownloadForm.scss";

const TACTICAL_FORMS = [
    {
        name: "Unduh Lampiran 1 - Format Surat Pernyataan Rumah Produksi",
        url: ""
    },
    {
        name: "Unduh Lampiran 2 - Format Surat Pernyataan Tanggung Jawab Mutlak",
        url: ""
    },
    {
        name: "Unduh Lampiran 3 - Format Surat Permohonan Bantuan Pemerintah Bagi Promosi Taktikal Film Indonesia",
        url: ""
    },
    {
        name: "Unduh Lampiran 4 - Format Surat Pernyataan Film yang Diajukan Telah Memiliki Jadwal Tayang Rilis dan Media Penayangan",
        url: ""
    },
    {
        name: "Unduh Lampiran 5 - Format Ringkasan Profil Pengusul Proposal Permohonan Bantuan Pemerintah bagi Promosi Taktikal Film Indonesia",
        url: ""
    },
    {
        name: "Unduh Lampiran 6 - Format Sistematika Proposal Bantuan Pemerintah bagi Promosi Taktikal Film Indonesia",
        url: ""
    },
]

const PRODUCTION_FORMS = [
    {
        name: "Unduh Lampiran 1 - Format Surat Pernyataan Rumah Produksi",
        url: ""
    },
    {
        name: "Unduh Lampiran 2 - Format Surat Pernyataan Tanggung Jawab Mutlak",
        url: ""
    },
    {
        name: "Unduh Lampiran 3 - Format Surat Permohonan Bantuan Pemerintah Bagi Produksi Film Indonesia",
        url: ""
    },
    {
        name: "Unduh Lampiran 4 - Format Ringkasan Profil Pengusul Proposal Permohonan Bantuan Pemerintah bagi Produksi Film Indonesia",
        url: ""
    },
    {
        name: "Unduh Lampiran 5 - Format Sistematika Proposal Bantuan Pemerintah bagi Produksi Film Indonesia",
        url: ""
    },
]

const DownloadForm = () => {
    return <Template>
        <div className="download-form-main-wrapper">
            <div className="our-program-filter"></div>
            <div className="our-program-main-content">
                <h2>Unduh Formulir</h2>
                <div className="our-programs">
                    <div className="our-program">
                        <a href="#download-form-tactical-wrapper">Bantuan Pemerintah<br />Promosi Taktikal Film Indonesia</a>
                    </div>
                    <div className="our-program">
                        <a href="#download-form-production-wrapper">Bantuan Pemerintah<br />Produksi Film Indonesia</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="download-form-tactical-wrapper download-form-wrapper" id="download-form-tactical-wrapper">
            <h2>Unduh Format Lampiran Bantuan Pemerintah Promosi Taktikal Film Indonesia</h2>
            <p>Berikut ini adalah form lampiran yang harus dilampirkan saat melakukan submit proposal</p>
            <div className="download-forms">
                {
                    TACTICAL_FORMS.map((item, index) => {
                        return <a key={index} href={item.url} target="_blank" className="download-form">
                            {item.name}
                        </a>
                    })
                }
            </div>
        </div>

        <div className="download-form-production-wrapper download-form-wrapper" id="download-form-production-wrapper">
            <h2>Unduh Format Lampiran Bantuan Pemerintah Produksi Film Indonesia</h2>
            <p>Berikut ini adalah form lampiran yang harus dilampirkan saat melakukan submit proposal</p>
            <div className="download-forms">
                {
                    PRODUCTION_FORMS.map((item, index) => {
                        return <a key={index} href={item.url} target="_blank" className="download-form">
                            {item.name}
                        </a>
                    })
                }
            </div>
        </div>


    </Template>
}

export default DownloadForm;
