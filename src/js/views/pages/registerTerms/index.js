import React, { lazy, useEffect, useState } from 'react';
import Template from '../../layout/template';
import { LOWER_TERMS, MAIN_TERMS } from './constants';
import "./RegisterTerms.scss";
import icArrow from "../../../../assets/img/icons/ic-arrow.png";
import LazyLoad from 'react-lazyload';

const REGISTER_TERMS = [
    {
        name: "Bantuan Pemerintah Promosi Taktikal Film Indonesia",
        color: "var(--main-light-green)",
        mainTerms: MAIN_TERMS.tactical,
        lowerTerms: LOWER_TERMS.tactical
    },
    {
        name: "Bantuan Pemerintah Produksi Film Indonesia",
        color: "var(--main-blue)",
        mainTerms: MAIN_TERMS.production,
        lowerTerms: LOWER_TERMS.production
    }
]

const RegisterTerms = () => {

    const RegisterTerms = ({item}) => {
        const [showChildren, setShow] = useState(true);
        return <div className="register-terms-wrapper">
            <div onClick={() => setShow(!showChildren)} className="register-terms-dropdown" style={{ backgroundColor: item.color }}>
                <p>{item.name}</p>
                <div>
                    <img src={icArrow} alt="" style={{transform: showChildren ? "rotate(180deg)" : ""}} />
                </div>
            </div>
            {showChildren && <div className="register-terms-content">
                <h2>PERSYARATAN UMUM RUMAH PRODUKSI</h2>
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
                <div className="register-terms-lower-section" style={{ backgroundColor: item.color }}>
                    <h2>PERSYARATAN FILM YANG DIAJUKAN</h2>
                    <ul>
                        {
                            item.lowerTerms.map((term, idx) => {
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
                </div>
            </div>}
        </div>
    }


    return <Template>
        <div className="register-terms-main-wrapper">
            <h2>Syarat Pendaftaran</h2>
            {
                REGISTER_TERMS.map((item, index) => <RegisterTerms item={item} key={index} />)
            }
        </div>
    </Template>
}

export default RegisterTerms;
