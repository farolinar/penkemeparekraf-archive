import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import penLogo from '../../../assets/img/layout/header/pen-logo.png';
import icDropdown from '../../../assets/img/icons/ic-arrow.png';
import "./layout.scss";

const MENU = [
    {
        name: "Beranda",
        url: "/",
        children: null
    },
    {
        name: "Tentang Kami",
        url: "/tentang-kami",
        children: null
    },
    {
        name: "Program",
        url: "",
        children: [
            {
                name: "Bantuan Pemerintah Produksi Film Indonesia",
                url: ""
            },
            {
                name: "Bantuan Pemerintah Promosi Taktikal Film Indonesia",
                url: ""
            },
        ]
    },
    {
        name: "Pendaftaran",
        url: "/daftar",
        children: null
    },
    {
        name: "Unduh Formulir",
        url: "/unduh-formulir",
        children: null
    },
    {
        name: "Unggah Formulir",
        url: "/unggah-formulir",
        children: null
    },
    {
        name: "Kontak Kami",
        url: "/kontak-kami",
        children: null
    },
]

const Header = () => {
    const MenuItem = ({item, idx}) => {
        let [openChildren, setOpenChildren] = useState(false);
        return(<div 
            className="header-menu-item"
            key={`header-menu-item-key-${idx}`}
            onClick={() => {
                if(item.children) setOpenChildren(!openChildren)
                else window.location.href = item.url
            }}
        >
            <p>{item.name}</p>

            { 
                item.children && <LazyLoad>
                    <img style={{
                        transform: openChildren ? "rotate(180deg)" : ""
                    }} src={icDropdown} alt="dropdown" />
                </LazyLoad>
            }

            {window.location.pathname === item.url && <div
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
                            return <a key={idx} onClick={() => window.location.href = child.url}>
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
                <img onClick={() => window.location.href = "/"} src={penLogo} alt="PEN" className="header-logo-pen" />
            </div>
            {
                MENU.map((item, index) => <MenuItem item={item} idx={index} key={index} />)
            }
        </div>
    </div>)
}

export default Header;
