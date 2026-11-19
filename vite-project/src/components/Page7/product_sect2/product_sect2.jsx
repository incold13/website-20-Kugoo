import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./product_sect2.scss"

const tabs = [
    { id: "about", label: "О товаре", hasDot: true },
    { id: "specs", label: "Характеристики", hasDot: false },
    { id: "delivery", label: "Доставка и оплата", hasDot: false },
    { id: "warranty", label: "Гарантии", hasDot: false },
    { id: "max", label: "Версия MAX", hasDot: false },
]

const features = ["Для города", "Быстрый", "Комфортный", "Легкий"]

export default function Product_sect2() {
    const [activeTab, setActiveTab] = useState("about")

    return (
        <section className="prod2">
            <div className="prod2_spacer_top"></div>

            <div className="prod2_tabs_wrap">
                <div className="prod2_tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            className={`prod2_tab_btn ${activeTab === tab.id ? "prod2_tab_active" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.hasDot && <span className="prod2_tab_dot"></span>}
                            <span className="prod2_tab_label">{tab.label}</span>
                            {activeTab === tab.id && <span className="prod2_tab_line"></span>}
                        </button>
                    ))}
                </div>
            </div>

            <div className="prod2_spacer_between"></div>

            <div className="prod2_content">
                <div className="prod2_left_col">
                    <h2 className="prod2_title">
                        ЭЛЕКТРОСАМОКАТ KUGOO KIRIN M4
                        <br />
                        С МОЩНЫМИ ХАРАКТЕРИСТИКАМИ
                        <br />
                        И СТИЛЬНЫМ ДИЗАЙНОМ
                    </h2>

                    <p className="prod2_desc">
                        Приобретая самокат Kugoo Kirin M4, вы получите множество положительных эмоций и сможете беспрепятственно передвигаться по городу.
                    </p>

                    <p className="prod2_desc">
                        Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.
                    </p>
                </div>

                <div className="prod2_right_col">
                    <div className="prod2_kit_block">
                        <h3 className="prod2_block_title">Что в комплекте</h3>

                        <div className="prod2_kit_grid">
                            <div className="prod2_kit_item">
                                <div className="prod2_kit_icon_box">
                                    <img src={Photo.product_sect2_1} alt="" />
                                </div>
                                <div className="prod2_kit_text_group">
                                    <span className="prod2_kit_name">Инструкция</span>
                                    <a href="#" className="prod2_kit_link">Посмотреть</a>
                                </div>
                            </div>

                            <div className="prod2_kit_item">
                                <div className="prod2_kit_icon_box">
                                    <img src={Photo.product_sect2_2} alt="" />
                                </div>
                                <div className="prod2_kit_text_group">
                                    <span className="prod2_kit_name">Зарядное устройство</span>
                                </div>
                            </div>

                            <div className="prod2_kit_item">
                                <div className="prod2_kit_icon_box">
                                    <img src={Photo.product_sect2_3} alt="" />
                                </div>
                                <div className="prod2_kit_text_group">
                                    <span className="prod2_kit_name">Чехол</span>
                                </div>
                            </div>

                            <div className="prod2_kit_item">
                                <div className="prod2_kit_icon_box">
                                    <img src={Photo.product_sect2_4} alt="" />
                                </div>
                                <div className="prod2_kit_text_group">
                                    <span className="prod2_kit_name">Гарантийный талон</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prod2_features_block">
                        <h3 className="prod2_block_title">Ключевые особенности Kugoo Kirin M4</h3>

                        <div className="prod2_features_row">
                            {features.map((feat, index) => (
                                <div key={index} className="prod2_feature_pill">
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
