import React from 'react';
import { ANCHOR } from '../../../constants';
import Template from '../../layout/template';
import "./DownloadForm.scss";

const TACTICAL_FORMS = [
    {
        name: "Unduh Lampiran 1 - Format Surat Pernyataan Rumah Produksi",
        url: "https://drive.google.com/uc?export=download&id=12Np9iNS_nuRPLw5TMhUYk-jHgjSYXXRm"
    },
    {
        name: "Unduh Lampiran 2 - Format Surat Pernyataan Tanggung Jawab Mutlak",
        url: "https://drive.google.com/uc?export=download&id=14reQzyqPe6l7BPdaag_Kh-dCvk2e_9XA"
    },
    {
        name: "Unduh Lampiran 3 - Format Surat Permohonan Bantuan Pemerintah Bagi Promosi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=1c32fO_WZhyy2zDDcLF6nEKB2xthZWOJD"
    },
    // {
    //     name: "Unduh Lampiran 4 - Format Surat Pernyataan Film yang Diajukan Wajib Tayang di Media Penayangan Multiplatform Legal",
    //     url: "https://drive.google.com/uc?export=download&id=1cVaWjLh_p2_rJgWqimVk8coujoEJBc29"
    // },
    {
        name: "Unduh Lampiran 4 - Format Ringkasan Profil Pengusul Proposal Permohonan Bantuan Pemerintah bagi Promosi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=1IqyX1VJpeGsWwvncsOZ1EEmvZ3GYfpdV"
    },
    {
        name: "Unduh Lampiran 5 - Format Sistematika Proposal Bantuan Pemerintah bagi Promosi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=19R7wV_A4W0Mxl-2_VtU5HzH0h4OMoekH"
    },
    {
        name: "Unduh Lampiran 6 - Format Rincian Anggaran Biaya (RAB) Bantuan Pemerintah bagi Promosi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=1iS9dF-bxnf1xsFvUBWwOKopnm2_uQ_O6"
    },
]

const DownloadForm = () => {
    return(<Template>
        <div className="download-form-tactical-wrapper download-form-wrapper" id={ANCHOR.downloadTacticalForm}>
            <h3>Unduh Format Lampiran Bantuan Pemerintah Promosi Film Indonesia</h3>
            <h5>FORMULIR PENDAFTARAN</h5>
            <p>1. Seluruh dokumen asli legalitas, identitas dan stempel badan usaha rumah produksi serta seluruh dokumen persyaratan pendukung asli tandatangan wajib dibawa saat Pelaksanaan Pengikatan Komitmen dan Tandatangan Perjanjian Kerjasama jika rumah produksi terpilih sebagai Penerima Bantuan (rencana lokasi di Jakarta)
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
    </Template>)
}

export default DownloadForm;
