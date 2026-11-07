import { useState } from "react"
import "./Serv_sect7.scss"

const tabs = [
    { id: 1, title: "Гидроизоляция" },
    { id: 2, title: "Настройка" },
    { id: 3, title: "Гидроизоляция + настройка" }
]

const leftColumnPrices = [
    { id: 1, name: "Kogoo S3", price: "2 790 ₽" },
    { id: 2, name: "Kogoo S3 Pro", price: "2 790 ₽" },
    { id: 3, name: "Kogoo S1", price: "2 790 ₽" },
    { id: 4, name: "Kogoo M2 Pro", price: "2 790 ₽" },
    { id: 5, name: "Kogoo HX", price: "2 790 ₽" },
    { id: 6, name: "Kogoo HX Pro", price: "2 790 ₽" },
    { id: 7, name: "Kogoo ES3", price: "3 490 ₽" },
    { id: 8, name: "Kogoo G-Max", price: "3 490 ₽" },
    { id: 9, name: "Kogoo C1", price: "3 490 ₽" }
]

const rightColumnPrices = [
    { id: 10, name: "Kogoo M2", price: "2 790 ₽" },
    { id: 11, name: "Kogoo Max Speed", price: "2 790 ₽" },
    { id: 12, name: "Kogoo M4", price: "2 790 ₽" },
    { id: 13, name: "Kogoo M4 Pro 13/17/18 Ah", price: "2 790 ₽" },
    { id: 14, name: "Kogoo M5", price: "2 790 ₽" },
    { id: 15, name: "Kogoo G1", price: "2 790 ₽" },
    { id: 16, name: "Kogoo G2 Pro", price: "3 490 ₽" },
    { id: 17, name: "Kogoo G-Booster", price: "3 490 ₽" },
    { id: 18, name: "Kogoo GX", price: "3 490 ₽" }
]

export default function Serv_sect7() {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <section className="serv7">
            <div className="serv7_spacer_top"></div>
            <div className="serv7_all">
                <div className="serv7_header">
                    <h2 className="serv7_title">
                        СТОИМОСТЬ ГИДРОИЗОЛЯЦИИ И НАСТРОЙКИ
                    </h2>
                    <p className="serv7_subtitle">
                        Для версии MAX и VIP гидроизоляция и настройка — бесплатно
                    </p>
                </div>

                <div className="serv7_tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`serv7_tab_btn ${activeTab === tab.id ? "serv7_tab_active" : ""}`}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                <div className="serv7_table">
                    <div className="serv7_col">
                        {leftColumnPrices.map((item) => (
                            <div className="serv7_row" key={item.id}>
                                <span className="serv7_model">{item.name}</span>
                                <span className="serv7_price">{item.price}</span>
                            </div>
                        ))}
                    </div>

                    <div className="serv7_col">
                        {rightColumnPrices.map((item) => (
                            <div className="serv7_row" key={item.id}>
                                <span className="serv7_model">{item.name}</span>
                                <span className="serv7_price">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="serv7_btn" type="button">
                    Заказать гидроизоляцию
                </button>
            </div>
            <div className="serv7_spacer_bottom"></div>
        </section>
    )
}