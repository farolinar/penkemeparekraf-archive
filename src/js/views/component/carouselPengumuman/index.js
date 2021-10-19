import React from "react";
import heroBg from "../../../../assets/img/pages/pengumuman/pengumuman-hero.png"
import { ANCHOR, ROUTES } from "../../../constants";
import "./CarouselPengumuman.scss";

const CarouselPengumuman = () => {
  return (
    <div className="carousel-pengumuman">
      <div className="carousel-pengumuman-content">
        <div className="carousel-pengumuman-hero">
            <div><img src={heroBg} alt="" /></div>
        </div>
        <div className="carousel-pengumuman-text">
            <div>
                <h2>PENGUMUMAN</h2>
                <h4>Penerima Bantuan Pemerintah<br />Promosi Film Indonesia</h4>
                <p>Klik tombol berikut untuk melihat hasil kurasi 
    Program Pemulihan Ekonomi Nasional Subsektor Film
    pada kategori : Bantuan Pemerintah Promosi Film Indonesia </p>
                <br />
                <a href={`${ROUTES.pengumuman}?s=${ANCHOR.pengumumanPromotion}`}>Lihat Hasil</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPengumuman;
