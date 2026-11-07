import { useState } from "react"
import "./Serv_sect3.scss"

const tabs = [
    { id: 1, name: "Электросамокаты" },
    { id: 2, name: "Электровелосипеды" },
    { id: 3, name: "Робот-пылесосы" },
    { id: 4, name: "Электровелосипеды" }
]

const models = [
    { id: 1, name: "Kugoo Kirin M4" },
    { id: 2, name: "Kugoo Kirin S2" },
    { id: 3, name: "Kugoo Kirin M5" },
    { id: 4, name: "Kugoo Kirin M7" },
    { id: 5, name: "Kugoo Kirin M8" }
]

const services = [
    { id: 1, title: "Замена/установка контроллера", price: "от 1500 руб." },
    { id: 2, title: "Замена/установка контроллера", price: "от 1500 руб." },
    { id: 3, title: "Замена/установка контроллера", price: "от 1500 руб." },
    { id: 4, title: "Замена/установка контроллера", price: "от 1500 руб." },
    { id: 5, title: "Замена/установка контроллера", price: "от 1500 руб." },
    { id: 6, title: "Замена/установка контроллера", price: "от 1500 руб." }
]

export default function Serv_sect3() {
    const [activeTab, setActiveTab] = useState(1)
    const [activeModel, setActiveModel] = useState(1)

    return (
        <section className="serv3">
            <div className="serv3_spacer_top"></div>
            <div className="serv3_all">
                <div className="serv3_header">
                    <h2 className="serv3_title">СТОИМОСТЬ РЕМОНТА</h2>
                    <p className="serv3_subtitle">
                        Точную стоимость работ вам озвучит специалист сервисного центра после диагностики.<br />
                        Примерные цены на ремонт без учета запчастей смотрите ниже.
                    </p>
                </div>

                <div className="serv3_tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`serv3_tab_btn ${activeTab === tab.id ? "serv3_tab_active" : ""}`}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                <div className="serv3_content">
                    <div className="serv3_sidebar">
                        {models.map((model) => (
                            <div
                                key={model.id}
                                className={`serv3_model_item ${activeModel === model.id ? "serv3_model_active" : ""}`}
                                onClick={() => setActiveModel(model.id)}
                            >
                                <span className="serv3_model_name">{model.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="serv3_table">
                        {services.map((item) => (
                            <div className="serv3_row" key={item.id}>
                                <span className="serv3_service_name">{item.title}</span>
                                <span className="serv3_service_price">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="serv3_spacer_bottom"></div>
        </section>
    )
}