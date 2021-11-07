import React from "react";
import Template from "../../layout/template";
import { FAQs } from "./faqs";
import titleImage from "./title.png";
import "./FAQ.scss";

const FAQ = () => {
    return <Template>
        <div className="faq-page-wrapper">
            <div>
                <div className="faq-title">
                    <img src={titleImage} alt="FAQ" />
                </div>
                <div className="faq-content-wrapper">
                    <ol>
                        {
                            FAQs.map((item, idx) => {
                                return <div className="faq-content" key={idx}>
                                    <li>{item.title}</li>
                                    {item.content}
                                </div>
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    </Template>
}

export default FAQ;
