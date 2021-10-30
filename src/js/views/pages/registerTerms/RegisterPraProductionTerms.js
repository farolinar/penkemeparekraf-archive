import React, { useState } from 'react';
import Template from '../../layout/template';
import { DOCUMENT_TERMS, LOWER_TERMS, MAIN_TERMS } from './constants';
import "./RegisterTerms.scss";
import icArrowBlack from "../../../../assets/img/icons/ic-arrow-black.png";
import icArrowWhite from "../../../../assets/img/icons/ic-arrow-white.png";
import { Fragment } from 'react';
import { documentTerms, movieTerms, productionHouseTerms } from './praProductionConstants';

const RegisterTerms = () => {

    const RegisterTerms = () => {
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
                <h5>PERSYARATAN RUMAH PRODUKSI</h5>
                <div>
                    <img src={icArrowBlack} alt="" style={{transform: showOne ? "rotate(90deg)" : ""}} />
                </div>
            </div>
            {showOne && <Fragment><div className="register-terms-content">
                <ul>
                    {
                        productionHouseTerms.map((term, idx) => {
                            return <li key={`register-pra-production-terms-main-${idx}`}>
                                {term.text}
                                {
                                    term.children ?
                                    <div className="register-term-children">
                                        {
                                            term.children.map((child, idx) => {
                                                if(child.grandchildren) {
                                                    return <Fragment>
                                                        <p>{child.text}</p>
                                                        <p>{child.grandchildren}</p>
                                                    </Fragment>
                                                }
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
            </Fragment>}

            { !showTwo && <div 
                onClick={() => setShowTwo(true)}
                className="register-terms-dropdown-section"
            >
                <h5>PERSYARATAN ADMINISTRASI DOKUMEN</h5>
                <div>
                    <img src={icArrowBlack} alt="" />
                </div>
            </div>}

            {showTwo && <div className="register-terms-lower-section" style={{ backgroundColor: "var(--main-blue)" }}>
                <div 
                    onClick={() => setShowTwo(false)}
                    className="register-terms-dropdown-section"
                >
                    <h5>PERSYARATAN ADMINISTRASI DOKUMEN</h5>
                    <div>
                        <img src={icArrowWhite} alt="" style={{transform: "rotate(90deg)"}} />
                    </div>
                </div>
                <p className="register-terms-content-subtitle">Wajib melampirkan dokumen berikut :</p>
                <ul>
                    {
                        documentTerms.map((term, idx) => {
                            return <li key={`register-pra-production-terms-main-${idx}`}>
                                {term.text}
                                {
                                    term.children ?
                                    <div className="register-term-children">
                                        {
                                            term.children.map((child, idx) => {
                                                if(child.grandchildren) {
                                                    return <Fragment>
                                                        <p>{child.text}</p>
                                                        <p>{child.grandchildren}</p>
                                                    </Fragment>
                                                }
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
                <h5>PERSYARATAN FILM YANG DIAJUKAN</h5>
                <div>
                    <img src={icArrowBlack} alt="" style={{transform: showThree ? "rotate(90deg)" : ""}} />
                </div>
            </div>

            {showThree && <Fragment><div className="register-terms-content">
                <ul>
                    {
                        movieTerms.map((term, idx) => {
                            return <li key={`register-pra-production-terms-main-${idx}`}>
                                {term.text}
                                {
                                    term.children ?
                                    <div className="register-term-children">
                                        {
                                            term.children.map((child, idx) => {
                                                if(child.grandchildren) {
                                                    return <Fragment>
                                                        <p>{child.text}</p>
                                                        <p>{child.grandchildren}</p>
                                                    </Fragment>
                                                }
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
            </Fragment>}
        </div>
    }


    return <Template>
        <div className="register-terms-main-wrapper">
            <h2>Syarat Pendaftaran Bantuan Pemerintah<br />Pra-Produksi Film Indonesia</h2>
            {
                <RegisterTerms />
            }
        </div>
    </Template>
}

export default RegisterTerms;
