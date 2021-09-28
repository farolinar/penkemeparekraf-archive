import React, { useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import Template from '../../layout/template';
import programTacticalText from "../../../../assets/img/pages/program/program-tactical-text.jpg";
import programTacticalHero from "../../../../assets/img/pages/program/program-tactical-hero.png";
// import programProductionText from "../../../../assets/img/pages/program/program-production-text.png";
// import programProductionHero from "../../../../assets/img/pages/program/program-production-hero.png";
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
                        <a href={null}>Lisensi</a>
                    </div>
                    <div className="our-program">
                        <a href={null}>Produksi</a>
                    </div>
                    {/* <div className="our-program">
                        <a href={`#${ANCHOR.programProduksiFilm}`}>Bantuan Pemerintah<br />Produksi Film Indonesia</a>
                    </div> */}
                </div>
            </div>
        </div>

        <div className="our-program-tactical-wrapper" id={ANCHOR.programPromosiTaktikalFilm}>
            <h2>Bantuan Pemerintah Promosi Film Indonesia</h2>
            <div className="our-program-tactical-content">
                <div className="our-program-tactical-text">
                    {/* <img src={programTacticalText} alt="program-tactical" /> */}
                    <p>Sebagai bagian dari Program Bantuan Pemerintah sub Sektor film yang terdiri dari Skema Promosi - Lisensi - Produksi.</p>
                    <p>Bertujuan meningkatkan minat masyarakat menonton Film Indonesia Siap Tayang Terpilih yang akan ditayangkan di media penayangan multiplatform legal dan mendukung kemajuan industri perfilman melalui kegiatan promosi film.</p>
                    <p>Pelaksanaan Promosi dilakukan pada jangka waktu 
                    Oktober – 10 Desember 2021 (dimulai sejak tanggal penetapan penerima bantuan terpilih)</p>
                    <p>Target penerima bantuan sebanyak 40 Rumah Produksi dengan nilai bantuan sebesar Rp. 1.500.000.000,- per rumah produksi.</p>
                </div>
                <div className="lazyload-wrapper">
                    <img src={programTacticalHero} alt="program-tactical" />
                </div>
            </div>
        </div>

        {/* <div className="our-program-production-wrapper" id={ANCHOR.programProduksiFilm}>
            <h2>Bantuan Pemerintah Produksi Film Indonesia</h2>
            <div className="our-program-production-content">
                <div className="lazyload-wrapper">
                    <img src={programProductionHero} alt="program-tactical" />
                </div>
                <div className="our-program-production-hero">
                    <img src={programProductionText} alt="program-tactical" />
                </div>
            </div>
        </div> */}
    </Template>
}

export default Program;
