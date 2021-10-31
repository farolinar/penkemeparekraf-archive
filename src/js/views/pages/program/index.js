import React, { useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import Template from '../../layout/template';
import programTacticalText from "../../../../assets/img/pages/program/program-tactical-text.jpg";
import programTacticalHero from "../../../../assets/img/pages/program/program-tactical-hero.png";
import programProductionText from "../../../../assets/img/pages/program/program-production-text.png";
import programProductionHero from "../../../../assets/img/pages/program/program-production-hero.png";
import programPraProductionHero from "../../../../assets/img/pages/program/program-pra-production-hero.png";
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
            {/* <div className="our-program-filter"></div> */}
            <div className="our-program-main-content">
                <h2>Program Kami</h2>
                <div className="our-programs">
                    <div className="our-program">
                        <a href={`#${ANCHOR.programPromosiTaktikalFilm}`}>Promosi</a>
                    </div>
                    <div className="our-program">
                        <a href={`#${ANCHOR.programPraProduksiFilm}`}>Pra-Produksi</a>
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
        
        <div className="grid-wrapper our-program-tactical-grid-wrapper">
            <div></div>
            <div className="our-program-tactical-wrapper" id={ANCHOR.programPromosiTaktikalFilm}>
                <h2>Bantuan Pemerintah<br />Promosi Film Indonesia</h2>
                <div className="filler"></div>
                <div className="our-program-tactical-content">
                    <div className="our-program-tactical-text">
                        {/* <img src={programTacticalText} alt="program-tactical" /> */}
                        <p>Bertujuan meningkatkan minat masyarakat menonton Film<br />Indonesia Siap Tayang Terpilih dan mendukung kemajuan industri<br />perfilman melalui kegiatan promosi film.</p>
                        <p>Pelaksanaan Promosi dilakukan pada jangka waktu<br />
                        Oktober – 10 Desember 2021.</p>
                        <p>Sebanyak 22 Rumah Produksi telah ditetapkan sebagai<br />Penerima Bantuan Terpilih pada Bantuan Pemerintah Promosi<br />Film Indonesia.</p>
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
                        <p>Bertujuan mendorong produksi karya kreatif Film Pendek<br />dan Film Dokumenter Pendek, untuk penyerapan tenaga<br />kerja dan menggerakkan ekosistem perfilman Indonesia.</p>
                        <p>Pelaksanaan produksi Film Terpilih wajib selesai hingga<br />tahap final pada akhir periode program sampai dengan<br />tanggal 10 Desember 2021.</p>
                        <p>Target Penerima Bantuan sebanyak 60 Rumah Produksi atau<br />Komunitas Perfilman yang masing-masing menghasilkan 1 film<br />Indonesia, dengan kategori film untuk 30 Film Pendek dan 30<br />Film Dokumenter Pendek. Nilai bantuan yang diberikan sebesar<br />Rp. 250.000.000,- per rumah produksi/komunitas perfilman.</p>
                        <p>Pendaftar maupun penerima bantuan terpilih tidak akan dipungut<br />biaya dalam keseluruhan rangkaian proses Program Pemulihan<br />Ekonomi Nasional Subsektor Film</p>
                        <p>Anggaran Bantuan Pemerintah Bagi Produksi Film Indonesia saat ini<br />masih dalam tahap pengajuan ke Kementerian Keuangan, Rumah Produksi<br />yang melakukan pendaftaran pada skema<br />Produksi dengan ini memahami dan bersedia untuk menerima<br />dan tidak akan menuntut Kementerian Pariwisata dan Ekonomi Kreatif/Badan Pariwisata<br />dan Ekonomi Kreatif apabila pengajuan anggaran dana bantuan pemerintah<br />ini tidak disetujui atau tidak tersedia.</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>

        <div className="grid-wrapper our-program-tactical-grid-wrapper">
            <div></div>
            <div className="our-program-tactical-wrapper" id={ANCHOR.programPraProduksiFilm}>
                <h2>Bantuan Pemerintah<br />Pra-Produksi Film Indonesia</h2>
                <div className="our-program-tactical-content">
                    <div className="our-program-tactical-text">
                        {/* <img src={programTacticalText} alt="program-tactical" /> */}
                        <p>Bertujuan menggerakkan Ekosistem Perfilman Indonesia dan<br />mendukung penyerapan tenaga kerja di industri untuk Film<br />Panjang dan/atau Film Dokumenter Panjang Indonesia yang<br />akan melaksanakan Pra-Produksi di tahun 2021</p>
                        <p>Pelaksanaan Pra-Produksi Film Terpilih diantaranya meliputi<br />tahap persiapan dan bagian dari proses produksi suatu film<br />yang mencakup sejumlah kegiatan di antaranya Script<br />Development, Storyboard Development, Survey Lokasi,<br />dan Workshop Pra-Produksi. Penggunaan dana bantuan<br />pemerintah wajib diselesaikan hingga akhir periode program<br />sampai dengan 15 Desember 2021.</p>
                        <p>Target Penerima Bantuan sebanyak 50 Rumah Produksi yang memiliki<br />rencana kegiatan Pra-Produksi Film. Rumah Produksi dapat mengajukan<br>maksimal 2 (dua) proposal kegiatan pra-produksi film panjang dan/atau<br />film dokumenter panjang pada tahun 2021.<br />Nilai bantuan yang diberikan sebesar Rp. 860.000.000,- untuk setiap film yang telah lolos kurasi.</p>
                        <p>Pendaftar maupun penerima bantuan terpilih tidak akan<br />dipungut biaya dalam keseluruhan rangkaian proses Program<br />Pemulihan Ekonomi Nasional Subsektor Film.</p>
                        <p>Anggaran Bantuan Pemerintah Pra-Produksi Film Indonesia<br />saat ini masih dalam tahap pengajuan ke Kementerian<br />Keuangan, Rumah Produksi yang melakukan pendaftaran pada<br />skema Pra-Produksi dengan ini memahami dan bersedia untuk<br />menerima dan tidak akan menuntut Kementerian Pariwisata<br />dan Ekonomi Kreatif/Badan Pariwisata dan Ekonomi Kreatif<br />apabila pengajuan anggaran dana bantuan pemerintah ini tidak<br />disetujui atau tidak tersedia.</p>
                        </div>
                    <div className="lazyload-wrapper">
                        <img src={programPraProductionHero} alt="program-tactical" />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </Template>
}

export default Program;
