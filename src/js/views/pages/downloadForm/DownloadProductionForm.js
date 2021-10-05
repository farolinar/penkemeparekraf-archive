import React from 'react';
import { ANCHOR } from '../../../constants';
import Template from '../../layout/template';
import "./DownloadForm.scss";

const MAIN_FORMS = [
    {
        name: "Unduh Lampiran 1 - Format Surat Pernyataan Tanggung Jawab Mutlak",
        url: "https://drive.google.com/uc?export=download&id=1cqpo_dWV_vuRl9jciSqJMo9o5FKjcsxk"
    },
    {
        name: "Unduh Lampiran 2 - Format Surat Pernyataan Tidak Menerima Bantuan Pemerintah Promosi Film Indonesia dan/atau\
        Bantuan dari K/L lainnya",
        url: "https://drive.google.com/uc?export=download&id=1S9pxFKemz_6kHY2BomldU-AvD-C8vwKy"
    },
    {
        name: "Unduh Lampiran 3 - Format Surat Pernyataan Film Masih Dalam Tahap Perencanaan / Produksi",
        url: "https://drive.google.com/uc?export=download&id=1oNmtqqZ0Q15kEmlnQNmcSbbQvmLuw77m"
    },
    {
        name: "Unduh Lampiran 4 - Format Surat Permohonan Bantuan Pemerintah Bagi Produksi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=1XhjMpvLgDek68IwCxYPomviaMKY8NB2V"
    },
    {
        name: "Unduh Lampiran 5 - Format Ringkasan Profil Pengusul Proposal Permohonan Bantuan Pemerintah bagi Produksi\
        Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=1l_NtcGD9MYuHJ5hifaFXDIJnpo7ssK7f"
    },
    {
        name: "Unduh Lampiran 6 - Format Sistematika Dokumen Pendukung Proposal Bantuan Pemerintah bagi Produksi Film Indonesia",
        url: "https://drive.google.com/uc?export=download&id=1OORvmSTVYLD0nkwGXFUO1MlOwRQYEuz4"
    },
    {
        name: "Unduh Lampiran 7 - Format Rincian Anggaran Biaya",
        url: "https://drive.google.com/uc?export=download&id=1xh7fFIPr-zJBRXZdRxgnnii_Rc-kiYnH"
    },
]

const RUMAH_PRODUKSI_FORMS = [
    {
        name: "Unduh Lampiran A.1  - Format Surat Pernyataan Rumah Produksi",
        url: "https://drive.google.com/uc?export=download&id=10ScewotKlx8sMvMwGbflNEHxCRbNdAHe"
    },
]

const KOMUNITAS_PERFILMAN_FORMS = [
    {
        name: "Unduh Lampiran B.1 - Format Surat Pernyataan Komunitas Perfilman",
        url: "https://drive.google.com/uc?export=download&id=1L2iw-DyubETTZWc3yacu2j-Spx3Y5SOV"
    },
    {
        name: "Unduh Lampiran B.2 - Format Surat Rekomendasi Stakeholder Resmi BPI untuk Komunitas Perfilman",
        url: "https://drive.google.com/uc?export=download&id=1JvKUxTEE-JxBIn33FfwWuk3TtmevzBYl"
    },
    {
        name: "Unduh Lampiran B.3 - Format Surat Pernyataan Penggunaan Rekening atas Nama Pribadi untuk Mewakili Komunitas Perfilman",
        url: "https://drive.google.com/uc?export=download&id=1gNKCSRl7GtyRTWIg_8nBlM35HPUWkYBb"
    },
]

const DownloadForm = () => {
    return(<Template>
        <div className="download-form-production-wrapper download-form-wrapper" id={ANCHOR.downloadTacticalForm}>
            <h3>Unduh Format Lampiran Bantuan Pemerintah Promosi Film Indonesia</h3>
            <h5>FORMULIR PENDAFTARAN</h5>
            <p>1. Seluruh dokumen asli legalitas, identitas dan stempel badan usaha Rumah Produksi atau Komunitas Perfilman serta seluruh dokumen persyaratan pendukung asli tandatangan wajib dibawa saat Pelaksanaan Pengikatan Komitmen dan Tandatangan Perjanjian Kerjasama jika Rumah Produksi atau Komunitas Perfilman terpilih sebagai Penerima Bantuan (rencana lokasi di Jakarta)
            <br />
            2. Penjelasan poin 1 merupakan bahan verifikasi dan persyaratan wajib agar dana bantuan dapat diberikan</p>
            
            <h6>DOKUMEN UNTUK RUMAH PRODUKSI DAN KOMUNITAS PERFILMAN</h6>
            <div className="download-forms">
                {
                    MAIN_FORMS.map((item, index) => {
                        return <a key={index} href={item.url} target="_blank" rel="noreferrer" className="download-form">
                            {item.name}
                        </a>
                    })
                }
            </div>

            <h6>DOKUMEN KHUSUS UNTUK RUMAH PRODUKSI</h6>
            <div className="download-forms">
                {
                   RUMAH_PRODUKSI_FORMS.map((item, index) => {
                        return <a key={index} href={item.url} target="_blank" rel="noreferrer" className="download-form">
                            {item.name}
                        </a>
                    })
                }
            </div>

            <h6>DOKUMEN KHUSUS UNTUK UNTUK KOMUNITAS PERFILMAN</h6>
            <div className="download-forms">
                {
                   KOMUNITAS_PERFILMAN_FORMS.map((item, index) => {
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
