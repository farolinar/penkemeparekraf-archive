import React, { lazy } from 'react';
import LazyLoad from 'react-lazyload';
import Template from '../../layout/template';
import programTacticalText from "../../../../assets/img/pages/program/program-tactical-text.png";
import programTacticalHero from "../../../../assets/img/pages/program/program-tactical-hero.png";
import programProductionText from "../../../../assets/img/pages/program/program-production-text.png";
import programProductionHero from "../../../../assets/img/pages/program/program-production-hero.png";
import "./Program.scss";
import { ROUTES } from '../../../constants';

const Program = () => {
    return <Template>
        <div className="our-program-main-wrapper">
            <div className="our-program-filter"></div>
            <div className="our-program-main-content">
                <h2>Program Kami</h2>
                <div className="our-programs">
                    <div className="our-program" onClick={() => window.location.href = ROUTES.registerTacticalTerms}>
                        Bantuan Pemerintah<br />Promosi Taktikal Film Indonesia
                    </div>
                    <div className="our-program" onClick={() => window.location.href = ROUTES.registerProductionTerms}>
                        Bantuan Pemerintah<br />Produksi Film Indonesia
                    </div>
                </div>
            </div>
        </div>

        <div className="our-program-tactical-wrapper">
            <h2>Bantuan Pemerintah Promosi Taktikal Film Indonesia</h2>
            <div className="our-program-tactical-content">
                <div className="our-program-tactical-text">
                    <img src={programTacticalText} alt="program-tactical" />
                </div>
                <LazyLoad>
                    <img src={programTacticalHero} alt="program-tactical" />
                </LazyLoad>
            </div>
        </div>

        <div className="our-program-production-wrapper">
            <h2>Bantuan Pemerintah Produksi Film Indonesia</h2>
            <div className="our-program-production-content">
                <LazyLoad>
                    <img src={programProductionHero} alt="program-tactical" />
                </LazyLoad>
                <div className="our-program-production-hero">
                    <img src={programProductionText} alt="program-tactical" />
                </div>
            </div>
        </div>
    </Template>
}

export default Program;
