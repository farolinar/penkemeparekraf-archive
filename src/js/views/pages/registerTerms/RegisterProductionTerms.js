import React, { useState } from 'react';
import Template from '../../layout/template';
import { DOCUMENT_TERMS, LOWER_TERMS, MAIN_TERMS } from './constants';
import "./RegisterTerms.scss";
import icArrowBlack from "../../../../assets/img/icons/ic-arrow-black.png";
import icArrowWhite from "../../../../assets/img/icons/ic-arrow-white.png";

const REGISTER_TERMS = [
    {
        name: "Bantuan Pemerintah Promosi Film Indonesia",
        color: "var(--main-light-green)",
        mainTerms: MAIN_TERMS.production,
        lowerTerms: LOWER_TERMS.production,
        thirdTerms: DOCUMENT_TERMS.production
    },
    // {
    //     name: "Bantuan Pemerintah Produksi Film Indonesia",
    //     color: "var(--main-blue)",
    //     mainTerms: MAIN_TERMS.production,
    //     lowerTerms: LOWER_TERMS.production
    // }
]

const RegisterTerms = () => {

    const RegisterTerms = ({item}) => {
        const [showOne, setShowOne] = useState(false);
        const [showTwo, setShowTwo] = useState(false);
        const [showThree, setShowThree] = useState(false);
        return <div className="register-terms-wrapper">
            {/* <div className="register-terms-dropdown" style={{ backgroundColor: item.color }}>
                <p>{item.name}</p>
            </div> */}
            <div 
                onClick={() => setShowOne(!showOne)}
                className="register-terms-dropdown-section"
            >
                <h5>PERSYARATAN KHUSUS UNTUK RUMAH PRODUKSI</h5>
                <div>
                    <img src={icArrowBlack} alt="" style={{transform: showOne ? "rotate(90deg)" : ""}} />
                </div>
            </div>
            {showOne && <div className="register-terms-content">
                <ul>
                    {
                        item.mainTerms.map((term, idx) => {
                            return <li key={`${item.name}-main-${idx}`}>
                                {term.text}
                                {
                                    term.children ?
                                    <div className="register-term-children">
                                        {
                                            term.children.map((child, idx) => {
                                                return <p>{child}</p>
                                            })
                                        }
                                    </div>
                                    : ""
                                }
                            </li>
                        })
                    }
                </ul>
            </div>}

            <div 
                onClick={() => setShowThree(!showThree)}
                className="register-terms-dropdown-section"
            >
                <h5>PERSYARATAN ADMINISTRASI DOKUMEN RUMAH PRODUKSI</h5>
                <div>
                    <img src={icArrowBlack} alt="" style={{transform: showThree ? "rotate(90deg)" : ""}} />
                </div>
            </div>

            {showThree && <div className="register-terms-content">
                <p className="register-terms-content-subtitle">Wajib melampirkan dokumen berikut :</p>
                <ul>
                    {
                        item.thirdTerms.map((term, idx) => {
                            return <li key={`${item.name}-main-${idx}`}>
                                {term.text}
                                {
                                    term.children ?
                                    <div className="register-term-children">
                                        {
                                            term.children.map((child, idx) => {
                                                return <p>{child}</p>
                                            })
                                        }
                                    </div>
                                    : ""
                                }
                                {term.detail}
                            </li>
                        })
                    }
                </ul>
            </div>}
        </div>
    }


    return <Template>
        <div className="register-terms-main-wrapper">
            <h2>Syarat Pendaftaran Bantuan Pemerintah<br />Produksi Film Indonesia</h2>
            {
                REGISTER_TERMS.map((item, index) => <RegisterTerms item={item} key={index} />)
            }
        </div>
    </Template>
}

export default RegisterTerms;
