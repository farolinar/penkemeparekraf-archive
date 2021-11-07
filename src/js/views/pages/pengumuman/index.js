import React, { useEffect } from 'react';
import { ANCHOR, ROUTES } from '../../../constants';
import Template from '../../layout/template';
import heroBg from "../../../../assets/img/pages/pengumuman/pengumuman-hero.png"
import curveUp from "../../../../assets/img/pages/pengumuman/curve-up.png"
import curveDown from "../../../../assets/img/pages/pengumuman/curve-down.png"
import pengumumanPromotion from "../../../../assets/img/pages/pengumuman/daftar-pemenang-promosi-film.png"
import pengumumanProduksiDokumenter from "./daftar-pemenang-produksi-dokumenter.png"
import pengumumanProduksiFilm from "./daftar-pemenang-produksi-film.png"
import "./Pengumuman.scss";

const OpenCall = () => {

    useEffect(() => {
        if(window.location.search) {
            let id = new URLSearchParams(window.location.search);
            id = id.get('s');
            setTimeout(() => {
                window.location.href = `#${id}`
            }, 500);
        }
    }, [])
    
    return <Template>
        <div className="pengumuman-wrapper">
            <div className="curve-up">
                <img src={curveUp} alt="" />
            </div>
            <div className="curve-down">
                <img src={curveDown} alt="" />
            </div>
            <div className="pengumuman-content">
                <div className="pengumuman-content-text">
                    <h2>PENGUMUMAN</h2>
                    <p>Klik tombol berikut untuk melihat hasil kurasi Program Pemulihan Ekonomi Nasional Subsektor Film</p>
                    <div className="home-register-button">
                        <a href={`#${ANCHOR.pengumumanPromotion}`}>Promosi</a>
                        <a>Pra-Produksi</a>
                        <a href={`#${ANCHOR.pengumumanProduksi}`}>Produksi</a>
                    </div>
                </div>
                <div className="pengumuman-content-hero">
                    <img src={heroBg} />
                </div>
            </div>
        </div>
        <div className="pengumuman-page-wrapper" id={ANCHOR.pengumumanPromotion}>
            <div></div>
            <div>
                <h2>Pengumuman Bantuan Pemerintah<br/>Promosi Film Indonesia</h2>
                <h4>Selamat Kepada Penerima Bantuan Terpilih</h4>
                <img src={pengumumanPromotion} alt="Pengumuman Promosi" />
                <br />
                <p style={{color: "var(--main-red)"}}>* Urutan tidak menggambarkan peringkat</p>

                <ul>
                    <li>Seluruh hasil keputusan tidak dapat diganggu gugat</li>
                    <li>Penerima Bantuan Terpilih akan dihubungi oleh Panitia PEN Film Kemenparekraf/Baparekraf melalui email dan nomor HP yang disampaikan pada dokumen pendaftaran</li>
                </ul>

                <p>Terima kasih kepada seluruh pendaftar yang telah berpartisipasi dalam pendaftaran Penerima Bantuan Pemerintah Promosi Film Indonesia.</p>

                <br />
                <div className="pengumuman-page-note">
                    <p>Catatan:</p>
                    <ul>
                        <li>
                        Seluruh dokumen asli legalitas, identitas dan stempel badan usaha Rumah Produksi serta seluruh 
     dokumen persyaratan pendukung asli tandatangan wajib dibawa saat Pelaksanaan Pengikatan 
     Komitmen dan Tandatangan Perjanjian Kerjasama
                        </li>
                        <li>
                        Penjelasan poin 1 merupakan bahan verifikasi dan persyaratan wajib agar dana bantuan dapat 
     diberikan
                        </li>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
        <div className="pengumuman-page-wrapper pengumuman-produksi-wrapper" id={ANCHOR.pengumumanProduksi}>
            <div></div>
            <div>
                <h2>Pengumuman Bantuan Pemerintah<br/>Produksi Film Indonesia</h2>
                <h4>Selamat Kepada Penerima Bantuan Terpilih</h4>

                <h4 className="label-table">Kategori Film Dokumenter Pendek</h4>
                <img src={pengumumanProduksiDokumenter} alt="Pengumuman Produksi Dokumenter Pendek" />
                <div style={{height: 30}}></div>
                <h4 className="label-table">Kategori Film Pendek</h4>
                <img src={pengumumanProduksiFilm} alt="Pengumuman Produksi Film Pendek" />

                <br />
                <p style={{color: "var(--main-red)"}}>* Urutan tidak menggambarkan peringkat</p>

                <ul>
                    <li>Seluruh hasil keputusan tidak dapat diganggu gugat</li>
                    <li>Penerima Bantuan Terpilih akan dihubungi oleh Panitia PEN Film Kemenparekraf/Baparekraf melalui email dan nomor HP yang disampaikan pada dokumen pendaftaran</li>
                </ul>

                <p>Terima kasih kepada seluruh pendaftar yang telah berpartisipasi dalam pendaftaran Penerima Bantuan Pemerintah Produksi Film Indonesia.</p>

                <br />
                <div className="pengumuman-page-note">
                    <p>Catatan:</p>
                    <ul>
                        <li>
                            Seluruh dokumen asli legalitas, identitas dan stempel badan usaha Rumah Produksi serta seluruh 
                            dokumen persyaratan pendukung asli tandatangan wajib dibawa saat Pelaksanaan Pengikatan 
                            Komitmen dan Tandatangan Perjanjian Kerjasama
                        </li>
                        <li>
                            Penjelasan poin 1 merupakan bahan verifikasi dan persyaratan wajib agar dana bantuan dapat 
                            diberikan
                        </li>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    </Template>
}

export default OpenCall;
