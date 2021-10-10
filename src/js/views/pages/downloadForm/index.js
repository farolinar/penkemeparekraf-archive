import React from 'react';
import { ROUTES } from '../../../constants';
import Template from '../../layout/template';
import "./DownloadForm.scss";

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
                    // <a href={ROUTES.downloadTacticalForm} className="our-program">Promosi</a>
                    <a className="our-program">Promosi</a>
                    <a className="our-program">Lisensi</a>
                    <a href={ROUTES.downloadProductionForm} className="our-program">Produksi</a>
                    {/* <div className="our-program">
                        <a href={`#${ANCHOR.downloadTacticalForm}`}>Bantuan Pemerintah<br />Promosi Film Indonesia</a>
                    </div> */}
                    {/* <div className="our-program">
                        <a href={`#${ANCHOR.downloadProductionForm}`}>Bantuan Pemerintah<br />Produksi Film Indonesia</a>
                    </div> */}
                </div>
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
