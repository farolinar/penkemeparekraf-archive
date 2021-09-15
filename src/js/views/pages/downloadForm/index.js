import React from 'react';
import { ANCHOR } from '../../../constants';
import Template from '../../layout/template';
import "./DownloadForm.scss";

const TACTICAL_FORMS = [
    {
        name: "Unduh Lampiran 1 - Format Surat Pernyataan Rumah Produksi",
        url: "https://drive.google.com/uc?export=download&id=1yLnjwIvv9tQu4XkhApNdmEcBy5deLMxg"
    },
    {
        name: "Unduh Lampiran 2 - Format Surat Pernyataan Tanggung Jawab Mutlak",
        url: "https://drive.google.com/uc?export=download&id=1Xjc1yexliPU9Lp6LMidQr0xr5r6dkZNU"
    },
    {
        name: "Unduh Lampiran 3 - Format Surat Permohonan Bantuan Pemerintah Bagi Promosi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=13k1Oy_gX-ryd-sa0w1Sg926zHUhQSxuo"
    },
    {
        name: "Unduh Lampiran 4 - Format Surat Pernyataan Film yang Diajukan Wajib Tayang di Media Penayangan Multiplatform Legal",
        url: "https://drive.google.com/uc?export=download&id=1cVaWjLh_p2_rJgWqimVk8coujoEJBc29"
    },
    {
        name: "Unduh Lampiran 5 - Format Ringkasan Profil Pengusul Proposal Permohonan Bantuan Pemerintah bagi Promosi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=14GPEQHn8USKpti_--bhlm_iqPmACb-O1"
    },
    {
        name: "Unduh Lampiran 6 - Format Sistematika Proposal Bantuan Pemerintah bagi Promosi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=1HljsRrfrRb9sOIRoSdObjhAcYtIXT6Q2"
    },
    {
        name: "Unduh Lampiran 7 - Format Rincian Anggaran Biaya (RAB) Bantuan Pemerintah bagi Promosi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=1XMsyYpIeUMysSsTcbBaMttROkO9mB9jd"
    },
]

// const PRODUCTION_FORMS = [
//     {
//         name: "Unduh Lampiran 1 - Format Surat Pernyataan Rumah Produksi",
//         url: ""
//     },
//     {
//         name: "Unduh Lampiran 2 - Format Surat Pernyataan Tanggung Jawab Mutlak",
//         url: ""
//     },
//     {
//         name: "Unduh Lampiran 3 - Format Surat Permohonan Bantuan Pemerintah Bagi Produksi Film Indonesia",
//         url: ""
//     },
//     {
//         name: "Unduh Lampiran 4 - Format Ringkasan Profil Pengusul Proposal Permohonan Bantuan Pemerintah bagi Produksi Film Indonesia",
//         url: ""
//     },
//     {
//         name: "Unduh Lampiran 5 - Format Sistematika Proposal Bantuan Pemerintah bagi Produksi Film Indonesia",
//         url: ""
//     },
// ]

const DownloadForm = () => {

    // useEffect(() => {
    //     if(window.location.search) {
    //         let id = new URLSearchParams(window.location.search);
    //         id = id.get('s');
    //         window.location.href = `#${id}`
    //     }
    // })

    return <Template>
        <div className="download-form-main-wrapper">
            <div className="our-program-filter"></div>
            <div className="our-program-main-content">
                <h2>Unduh Formulir</h2>
                <div className="our-programs">
                    <div className="our-program">
                        <a href={`#${ANCHOR.downloadTacticalForm}`}>Bantuan Pemerintah<br />Promosi Film Indonesia</a>
                    </div>
                    {/* <div className="our-program">
                        <a href={`#${ANCHOR.downloadProductionForm}`}>Bantuan Pemerintah<br />Produksi Film Indonesia</a>
                    </div> */}
                </div>
            </div>
        </div>

        <div className="download-form-tactical-wrapper download-form-wrapper" id={ANCHOR.downloadTacticalForm}>
            <h2>Unduh Format Lampiran Bantuan Pemerintah Promosi Film Indonesia</h2>
            <h3>FORMULIR PENDAFTARAN</h3>
            <p>1. Seluruh dokumen asli legalitas dan identitas badan usaha rumah produksi serta seluruh dokumen persyaratan pendukung asli tandatangan wajib dibawa saat Pelaksanaan Pengikatan Komitmen dan Tandatangan Perjanjian Kerjasama jika rumah produksi terpilih sebagai Penerima Bantuan (rencana lokasi di Jakarta)
            <br />
            2. Penjelasan poin 1 merupakan bahan verifikasi dan persyaratan wajib agar dana bantuan dapat diberikan</p>
            <div className="download-forms">
                {
                    TACTICAL_FORMS.map((item, index) => {
                        return <a key={index} href={item.url} target="_blank" rel="noreferrer" className="download-form">
                            {item.name}
                        </a>
                    })
                }
            </div>
        </div>

        {/* <div className="download-form-production-wrapper download-form-wrapper" id={ANCHOR.downloadProductionForm}>
            <h2>Unduh Format Lampiran Bantuan Pemerintah Produksi Film Indonesia</h2>
            <p>Berikut ini adalah form lampiran yang harus dilampirkan saat melakukan submit proposal</p>
            <div className="download-forms">
                {
                    PRODUCTION_FORMS.map((item, index) => {
                        return <a key={index} href={item.url} target="_blank" rel="noreferrer" className="download-form">
                            {item.name}
                        </a>
                    })
                }
            </div>
        </div> */}


    </Template>
}

export default DownloadForm;
