import React, { useState } from "react";
import penLogo from '../../../assets/img/layout/header/pen-logo.png';
import icDropdown from '../../../assets/img/icons/ic-arrow.png';
import "./layout.scss";
import { ANCHOR, ROUTES } from "../../constants";

const MENU = [
    {
        name: "Beranda",
        url: ROUTES.home,
        children: null
    },
    {
        name: "Tentang Kami",
        url: ROUTES.aboutUs,
        children: null
    },
    {
        name: "Program",
        url: ROUTES.program,
        children: [
            // {
            //     name: "Bantuan Pemerintah Produksi Film Indonesia",
            //     url: `${ROUTES.program}?s=${ANCHOR.programProduksiFilm}`
            // },
            {
                name: "Promosi",
                class: "",
                url: `${ROUTES.program}?s=${ANCHOR.programPromosiTaktikalFilm}`
            },
            {
                name: "Lisensi",
                class: "not-clickable",
                url: null
            },
            {
                name: "Produksi",
                class: "",
                url: `${ROUTES.program}?s=${ANCHOR.programProduksiFilm}`
            },
        ]
    },
    {
        name: "Pendaftaran",
        url: ROUTES.register,
        children: null
    },
    {
        name: "Unduh Formulir",
        url: ROUTES.downloadForm,
        children: null
    },
    {
        name: "Unggah Formulir",
        url: ROUTES.uploadForm,
        children: null
    },
    {
        name: "Kontak Kami",
        url: ROUTES.contactUs,
        children: null
    },
]

const Header = () => {
    const MenuItem = ({item, idx}) => {
        let [openChildren, setOpenChildren] = useState(false);
        return(<div 
            className="header-menu-item"
            key={`header-menu-item-key-${idx}`}
            // onClick={() => {
            //     if(item.children) setOpenChildren(!openChildren)
            //     else window.location.href = item.url
            // }}
        >
            <p
                onClick={() => window.location.href = item.url}
            >
                {item.name}
            </p>

            { 
                item.children && <div>
                    <img 
                        style={{
                            transform: openChildren ? "rotate(180deg)" : "",
                            cursor: "pointer"
                        }} 
                        src={icDropdown} 
                        alt="dropdown"
                        onClick={() =>setOpenChildren(!openChildren)}
                    />
                </div>
            }

            {item.url == ROUTES.home && window.location.pathname === "/" && <div
                style={{
                    height: 8,
                    width: "120%",
                    backgroundColor: "#fff",
                    borderRadius: 8,
                    position: "absolute",
                    bottom: 0,
                    left: "-10%"
                }}
            ></div>}

            {item.url && item.url != ROUTES.home && window.location.pathname.includes(item.url) && <div
                style={{
                    height: 8,
                    width: "120%",
                    backgroundColor: "#fff",
                    borderRadius: 8,
                    position: "absolute",
                    bottom: 0,
                    left: "-10%"
                }}
            ></div>}

            {
                item.children && openChildren && <div className="header-menu-item-children">
                    {
                        item.children.map((child, idx) => {
                            return <a key={idx} href={child.url} className={child.class}>
                                {child.name}
                            </a>
                        })
                    }
                </div>
            }
        </div>)
    }

    return(<div className="header-wrapper">
        <div className="header-content">
            <div>
                <img onClick={() => window.location.href = ROUTES.home} src={penLogo} alt="PEN" className="header-logo-pen" />
            </div>
            {
                MENU.map((item, index) => <MenuItem item={item} idx={index} key={index} />)
            }
        </div>
    </div>)
}

export default Header;
