import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import heroBg from "../../../../assets/img/pages/pengumuman/pengumuman-hero.png";
import heroProduksiBg from "./pengumuman-produksi-hero.png";
import { ANCHOR, ROUTES } from "../../../constants";
import "./CarouselPengumuman.scss";

export const PENGUMUMAN_TYPES = {
  promosi: "placeholder-pengumuman-promosi",
  produksi: "placeholder-pengumuman-produksi",
};

const CarouselPengumuman = ({ type }) => {
  switch (type) {
    case PENGUMUMAN_TYPES.promosi:
      return (
        <div className="carousel-pengumuman">
          <div className="carousel-pengumuman-content">
            <div className="carousel-pengumuman-hero">
              <div>
                <img src={heroBg} alt="" />
              </div>
            </div>
            <div className="carousel-pengumuman-text">
              <div>
                <h2>PENGUMUMAN</h2>
                <h4>
                  Penerima Bantuan Pemerintah
                  <br />
                  Promosi Film Indonesia
                </h4>
                <p>
                  Klik tombol berikut untuk melihat hasil kurasi Program
                  Pemulihan Ekonomi Nasional Subsektor Film pada kategori :
                  Bantuan Pemerintah Promosi Film Indonesia{" "}
                </p>
                <br />
                <a
                  href={ROUTES.pengumumanPromosi}
                >
                  Lihat Hasil
                </a>
              </div>
            </div>
          </div>
        </div>
      );

    case PENGUMUMAN_TYPES.produksi:
      return (
        <div className="carousel-pengumuman carousel-pengumuman-produksi">
          <div className="carousel-pengumuman-content">
            <div className="carousel-pengumuman-hero">
              <div>
                <img src={heroProduksiBg} alt="" />
              </div>
            </div>
            <div className="carousel-pengumuman-text">
              <div>
                <h2>PENGUMUMAN</h2>
                <h4>
                  Penerima Bantuan Pemerintah
                  <br />
                  Produksi Film Indonesia
                </h4>
                <p>
                  Klik tombol berikut untuk melihat hasil kurasi Program
                  Pemulihan Ekonomi Nasional Subsektor Film pada kategori :
                  Bantuan Pemerintah Produksi Film Indonesia{" "}
                </p>
                <br />
                <a
                  href={ROUTES.pengumumanProduksi}
                >
                  Lihat Hasil
                </a>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return <Fragment></Fragment>;
  }
};

export default CarouselPengumuman;
