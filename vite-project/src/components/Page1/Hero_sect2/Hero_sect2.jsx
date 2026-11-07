import './Hero_sect2.scss';
import { useState } from "react"
import {Photo} from "../../../photo.js"

const scooters = [
    { id: 1, title: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", price: "29 900 ₽", badge: "Хит", badgeType: "hit", hasArrows: true, categories: ["hits", "city"] },
    { id: 2, title: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", price: "29 900 ₽", badge: "Новинка", badgeType: "new", hasArrows: false, categories: ["hits", "adults"] },
    { id: 3, title: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", price: "29 900 ₽", badge: "Хит", badgeType: "hit", hasArrows: false, categories: ["hits", "city", "kids"] },
    { id: 4, title: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", price: "29 900 ₽", badge: "Новинка", badgeType: "new", hasArrows: false, categories: ["hits"] },
    { id: 5, title: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", price: "29 900 ₽", badge: "Хит", badgeType: "hit", hasArrows: false, categories: ["hits", "adults"] },
    { id: 6, title: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", price: "29 900 ₽", badge: "Новинка", badgeType: "new", hasArrows: false, categories: ["hits", "kids"] },
    { id: 7, title: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", price: "29 900 ₽", badge: "Хит", badgeType: "hit", hasArrows: false, categories: ["hits", "city"] },
    { id: 8, title: "Kugoo Kirin M4", battery: "2000 mAh", power: "1,2 л.с.", speed: "60 км/ч", time: "5 часов", oldPrice: "39 900 ₽", price: "29 900 ₽", badge: "Новинка", badgeType: "new", hasArrows: false, categories: ["hits", "adults", "kids"] },
]

const TABS = [
    { id: "hits", label: "Хиты продаж" },
    { id: "city", label: "Для города" },
    { id: "adults", label: "Для взрослых" },
    { id: "kids", label: "Для детей" },
]

export default function Hero_Sect2() {
    const [activeTab, setActiveTab] = useState("hits")
    const visibleItems = scooters.filter(item => item.categories.includes(activeTab))

    return (
        <>
            <section className="sect2">
                <div className="sect2_all">
                    <div className="sect2_header">
                        <div className="sect2_title">
                            <p>Электросамокаты</p>
                        </div>
                        <div className="sect2_tabs">
                            {TABS.map(tab => (
                                <div
                                    key={tab.id}
                                    className={activeTab === tab.id ? "sect2_tab_active" : "sect2_tab"}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <p>{tab.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sect2_cards_all">
                        {visibleItems.map((item, i) => (
                            <div className="sect2_card" style={{ animationDelay: `${i * 0.06}s` }} key={item.id}>
                                <div className="sect2_card_top">
                                    <div className="sect2_card_top_wh">
                                        <div className="sect2_card_top_bar">
                                            <div className={item.badgeType === "hit" ? "sect2_badge_hit" : "sect2_badge_new"}>
                                                <p>{item.badge}</p>
                                            </div>
                                            <div className="sect2_compare_btn">
                                                <img className="sect2_compare_icon" src={Photo.sect2_compare} alt="" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="sect2_card_bottom">
                                    <div className="sect2_card_bottom_wh">
                                        <div className="sect2_card_name">
                                            <p>{item.title}</p>
                                        </div>
                                        <div className="sect2_specs_grid">
                                            <div className="sect2_spec_item">
                                                <img className="sect2_spec_icon" src={Photo.sect2_battery} alt="" />
                                                <p>{item.battery}</p>
                                            </div>
                                            <div className="sect2_spec_item">
                                                <img className="sect2_spec_icon" src={Photo.sect2_power} alt="" />
                                                <p>{item.power}</p>
                                            </div>
                                            <div className="sect2_spec_item">
                                                <img className="sect2_spec_icon" src={Photo.sect2_speed} alt="" />
                                                <p>{item.speed}</p>
                                            </div>
                                            <div className="sect2_spec_item">
                                                <img className="sect2_spec_icon" src={Photo.sect2_timer} alt="" />
                                                <p>{item.time}</p>
                                            </div>
                                        </div>
                                        <div className="sect2_price_row">
                                            <div className="sect2_price_box">
                                                <p className="sect2_old_price">{item.oldPrice}</p>
                                                <p className="sect2_new_price">{item.price}</p>
                                            </div>
                                            <div className="sect2_card_actions">
                                                <div className="sect2_circle_btn">
                                                    <img className="sect2_action_icon" src={Photo.sect2_cart} alt="" />
                                                </div>
                                                <div className="sect2_circle_btn">
                                                    <img className="sect2_action_icon" src={Photo.sect2_heart} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sect2_buy_btn">
                                            <p>Купить в 1 клик</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="sect2_more_btn">
                        <p>Смотреть все</p>
                    </div>
                </div>
            </section>
        </>
    )
}