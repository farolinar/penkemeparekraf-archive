import React from 'react';
import { ANCHOR } from '../../../constants';
import Template from '../../layout/template';
import "./DownloadForm.scss";

const MAIN_FORMS = [
    {
        name: "Unduh Lampiran 1 - Format Surat Pernyataan Rumah Produksi",
        url: "https://drive.google.com/uc?export=download&id=1Ftjogc-FhwoUUa1jc38ZFUBEmIbhrpu2"
    },
    {
        name: "Unduh Lampiran 2 - Format Surat Pernyataan Tanggung Jawab Mutlak",
        url: "https://drive.google.com/uc?export=download&id=1FWSLges3SAERYgX2v1uvKeIBfwjoel-6"
    },
    {
        name: "Unduh Lampiran 3 - Format Surat Pernyataan Tidak Menerima Bantuan Pemerintah PEN-Film Skema Lainnya dan/atau Bantuan K/L Lainnya",
        url: "https://drive.google.com/uc?export=download&id=13RYdqNuIvIvXimT2Ma52PxFQjvPhRnQS"
    },
    {
        name: "Unduh Lampiran 4 - Format Surat Permohonan Bantuan Pemerintah Pra-Produksi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=1fx-OeaospU01FS9vKtl-wQUR5fWRI9T4"
    },
    {
        name: "Unduh Lampiran 5 - Format Ringkasan Profil Pengusul Proposal Permohonan Bantuan Pemerintah Pra-Produksi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=1qX5adrBjFhkx_BkAKEAlwN76yOzJsQQy"
    },
    {
        name: "Unduh Lampiran 6 - Format Proposal Bantuan Pemerintah Pra-Produksi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=104rTEdj47SxRGSF1j4qxQO_vsBI3R1yL"
    },
    {
        name: "Unduh Lampiran 7 - Format Rincian Anggaran Biaya (RAB) Bantuan Pemerintah Pra-Produksi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=12IhVM1fF4MP1qM5QW_eC_7mhvA7bouei"
    },
]

const DownloadForm = () => {
    return(<Template>
        <div className="download-form-tactical-wrapper download-form-wrapper" id={ANCHOR.downloadPraProduksiForm}>
            <h3>Unduh Format Lampiran Bantuan Pemerintah Pra-Produksi Film Indonesia</h3>
            <h5>FORMULIR PENDAFTARAN</h5>
            <ul style={{listStyle: "auto"}}>
                <li>Seluruh dokumen asli legalitas, identitas dan stempel badan usaha Rumah Produksi serta seluruh dokumen persyaratan pendukung asli tandatangan wajib dibawa saat<br />Pelaksanaan Pengikatan Komitmen dan Tandatangan Perjanjian Kerjasama jika Rumah Produksi terpilih sebagai Penerima Bantuan (rencana lokasi di Jakarta)</li>
                <li>Penjelasan poin 1 merupakan bahan verifikasi dan persyaratan wajib agar dana bantuan dapat diberikan </li>
            </ul>
            
            <div className="download-forms">
                {
                    MAIN_FORMS.map((item, index) => {
                        return <a key={index} href={item.url} target="_blank" rel="noreferrer" className="download-form">
                            {item.name}
                        </a>
                    })
                }
            </div>
        </div>
    </Template>)
}

export default DownloadForm;
