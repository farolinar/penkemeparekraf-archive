import React, { lazy } from 'react';
import LazyLoad from 'react-lazyload';
import Template from '../../layout/template';
import "./Program.scss";

const Program = () => {
    return <Template>
        <div className="our-program-main-wrapper">
            <div className="our-program-filter"></div>
            <div className="our-program-main-content">
                <h2>Program Kami</h2>
                <div className="our-programs">
                    <div className="our-program">
                        Bantuan Pemerintah<br />Promosi Taktikal Film Indonesia
                    </div>
                    <div className="our-program">
                        Bantuan Pemerintah<br />Produksi Film Indonesia
                    </div>
                </div>
            </div>
        </div>
    </Template>
}

export default Program;
