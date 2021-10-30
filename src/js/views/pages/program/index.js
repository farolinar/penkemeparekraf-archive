import React, { useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import Template from '../../layout/template';
import programTacticalText from "../../../../assets/img/pages/program/program-tactical-text.jpg";
import programTacticalHero from "../../../../assets/img/pages/program/program-tactical-hero.png";
import programProductionText from "../../../../assets/img/pages/program/program-production-text.png";
import programProductionHero from "../../../../assets/img/pages/program/program-production-hero.png";
import "./Program.scss";
import { ANCHOR } from '../../../constants';

const Program = () => {

    useEffect(() => {
        if(window.location.search) {
            let id = new URLSearchParams(window.location.search);
            id = id.get('s');
            window.location.href = `#${id}`
        }
    }, [])

    return <Template>
        <div className="our-program-main-wrapper">
            <div className="our-program-filter"></div>
            <div className="our-program-main-content">
                <h2>Program Kami</h2>
                <div className="our-programs">
                    <div className="our-program">
                        <a href={`#${ANCHOR.programPromosiTaktikalFilm}`}>Promosi</a>
                    </div>
                    <div className="our-program">
                        <a href={null}>Pra-Produksi</a>
                    </div>
                    <div className="our-program">
                        <a href={`#${ANCHOR.programProduksiFilm}`}>Produksi</a>
                    </div>
                    {/* <div className="our-program">
                        <a href={`#${ANCHOR.programProduksiFilm}`}>Bantuan Pemerintah<br />Produksi Film Indonesia</a>
                    </div> */}
                </div>
            </div>
        </div>
        
        <div className="grid-wrapper">
            <div></div>
            <div className="our-program-tactical-wrapper" id={ANCHOR.programPromosiTaktikalFilm}>
                <h2>Bantuan Pemerintah<br />Promosi Film Indonesia</h2>
                <div className="our-program-tactical-content">
                    <div className="our-program-tactical-text">
                        {/* <img src={programTacticalText} alt="program-tactical" /> */}
                        <p>Sebagai bagian dari Program Bantuan Pemerintah sub<br />Sektor film yang terdiri dari Skema Promosi - Pra-Produksi - Produksi.</p>
                        <p>Bertujuan meningkatkan minat masyarakat menonton Film<br />Indonesia Siap Tayang Terpilih dan mendukung kemajuan industri<br />perfilman melalui kegiatan promosi film.</p>
                        <p>Pelaksanaan Promosi dilakukan pada jangka waktu<br />
                        Oktober – 10 Desember 2021 (dimulai sejak tanggal penetapan<br />penerima bantuan terpilih)</p>
                        <p>Target penerima bantuan sebanyak 40 Rumah Produksi dengan<br />nilai bantuan sebesar Rp. 1.500.000.000,- per rumah produksi.</p>
                        <p>Pendaftar maupun penerima bantuan terpilih tidak akan dipungut biaya<br />dalam keseluruhan rangkaian proses Program Pemulihan Ekonomi<br />Nasional Subsektor Film</p>
                        </div>
                    <div className="lazyload-wrapper">
                        <img src={programTacticalHero} alt="program-tactical" />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        
        <div className="grid-wrapper our-program-production-wrapper">
            <div></div>
            <div className="our-program-production-wrapper" id={ANCHOR.programProduksiFilm}>
                {/* <div className="grid-title-right">
                    <div></div>
                    <h2>Bantuan Pemerintah<br />Produksi Film Indonesia</h2>
                </div> */}
                <div className="our-program-production-content">
                    <div></div>
                    <div className="lazyload-wrapper">
                        <img src={programProductionHero} alt="program-tactical" />
                    </div>
                    <div><h2>Bantuan Pemerintah<br />Produksi Film Indonesia</h2></div>
                    <div className="our-program-production-hero">
                        <p>Sebagai bagian dari Program Pemulihan Ekonomi Nasional sub<br />Sektor Film yang terdiri dari Skema Promosi - Pra-Produksi -<br />Produksi.</p>
                        <p>Bertujuan mendorong produksi karya kreatif Film Pendek<br />dan Film Dokumenter Pendek, untuk penyerapan tenaga<br />kerja dan menggerakan ekosistem perfilman Indonesia.</p>
                        <p>Pelaksanaan produksi Film Terpilih wajib selesai hingga<br />tahap final pada akhir periode program sampai dengan<br />tanggal 10 Desember 2021.</p>
                        <p>Target Penerima Bantuan sebanyak 60 Rumah Produksi atau<br />Komunitas Perfilman yang masing-masing menghasilkan 1 film<br />Indonesia, dengan kategori film untuk 30 Film Pendek dan 30<br />Film Dokumenter Pendek. Nilai bantuan yang diberikan sebesar<br />Rp. 250.000.000,- per rumah produksi/komunitas perfilman.</p>
                        <p>Pendaftar maupun penerima bantuan terpilih tidak akan dipungut<br />biaya dalam keseluruhan rangkaian proses Program Pemulihan<br />Ekonomi Nasional Subsektor Film</p>
                        <p>Anggaran Bantuan Pemerintah Bagi Produksi Film Indonesia saat ini<br />masih dalam tahap pengajuan ke Kementerian Keuangan, Rumah Produksi<br />atau Komunitas Perfilman yang melakukan pendaftaran pada skema produksi<br />dengan ini memahami dan bersedia untuk menerima dan tidak akan<br />menuntut Kementerian Pariwisata dan Ekonomi Kreatif/Badan Pariwisata<br />dan Ekonomi Kreatif apabila pengajuan anggaran dana bantuan pemerintah<br />ini tidak disetujui atau tidak tersedia.</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </Template>
}

export default Program;
