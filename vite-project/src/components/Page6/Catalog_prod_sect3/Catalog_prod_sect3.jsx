import { useState } from "react"
import { Photo } from "../../../photo.js"
import { Link } from "react-router-dom"
import "./Catalog_prod_sect3.scss"

const initialProducts = [
    {
        id: 1,
        type: "product",
        title: "Kugoo Kirin M4",
        badge: "ХИТ",
        badgeType: "hit",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        img: Photo.catalog_prod3_scot
    },
    {
        id: 2,
        type: "product",
        title: "Kugoo Kirin M4",
        badge: "Новинка",
        badgeType: "new",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        img: Photo.catalog_prod3_scot
    },
    {
        id: "quiz",
        type: "quiz"
    },
    {
        id: 4,
        type: "product",
        title: "Kugoo Kirin M4",
        badge: "Новинка",
        badgeType: "new",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        img: Photo.catalog_prod3_scot
    },
    {
        id: 5,
        type: "product",
        title: "Kugoo Kirin M4",
        badge: "Новинка",
        badgeType: "new",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        img: Photo.catalog_prod3_scot
    },
    {
        id: 6,
        type: "product",
        title: "Kugoo Kirin M4",
        badge: "ХИТ",
        badgeType: "hit",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        img: Photo.catalog_prod3_scot
    },
    {
        id: 7,
        type: "product",
        title: "Kugoo Kirin M4",
        badge: "ХИТ",
        badgeType: "hit",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        img: Photo.catalog_prod3_scot
    },
    {
        id: 8,
        type: "product",
        title: "Kugoo Kirin M4",
        badge: "Новинка",
        badgeType: "new",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        img: Photo.catalog_prod3_scot
    },
    {
        id: 9,
        type: "product",
        title: "Kugoo Kirin M4",
        badge: "Новинка",
        badgeType: "new",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        img: Photo.catalog_prod3_scot
    },
    {
        id: 10,
        type: "product",
        title: "Kugoo Kirin M4",
        badge: "ХИТ",
        badgeType: "hit",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        img: Photo.catalog_prod3_scot
    },
    {
        id: 11,
        type: "product",
        title: "Kugoo Kirin M4",
        badge: "Новинка",
        badgeType: "new",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        img: Photo.catalog_prod3_scot
    },
    {
        id: 12,
        type: "product",
        title: "Kugoo Kirin M4",
        badge: "Новинка",
        badgeType: "new",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        img: Photo.catalog_prod3_scot
    }
]

export default function Catalog_prod_sect3() {
    const [priceFrom, setPriceFrom] = useState("0")
    const [priceTo, setPriceTo] = useState("55 000")
    const [filters, setFilters] = useState({
        offroad: true,
        city: false,
        winter: false,
        adult: true,
        child: false,
        senior: false,
        light: true,
        medium: false,
        heavy: false
    })

    const toggleFilter = (key) => {
        setFilters(prev => ({ ...prev, [key]: !prev[key] }))
    }

    return (
        <section className="cat_prod3">
            <div className="cat_prod3_spacer_top"></div>
            <div className="cat_prod3_all">
                <div className="cat_prod3_top_bar">
                    <h2 className="cat_prod3_main_title">ФИЛЬТР</h2>

                    <div className="cat_prod3_sort_block">
                        <span className="cat_prod3_sort_label">Сортировать:</span>
                        <div className="cat_prod3_select_btn">
                            <span>По цене</span>
                            <span className="cat_prod3_select_arrow">⌵</span>
                        </div>
                        <div className="cat_prod3_select_btn">
                            <span>По дальности хода</span>
                            <span className="cat_prod3_select_arrow">⌵</span>
                        </div>
                    </div>
                </div>

                <div className="cat_prod3_content">
                    <aside className="cat_prod3_sidebar">
                        <div className="cat_prod3_filter_card">
                            <div className="cat_prod3_filter_inner">
                                <div className="cat_prod3_filter_group">
                                    <p className="cat_prod3_group_title">Цена</p>
                                    
                                    <div className="cat_prod3_slider_wrap">
                                        <div className="cat_prod3_slider_line">
                                            <div className="cat_prod3_slider_thumb cat_prod3_thumb_left"></div>
                                            <div className="cat_prod3_slider_thumb cat_prod3_thumb_right"></div>
                                        </div>
                                    </div>

                                    <div className="cat_prod3_inputs_row">
                                        <input
                                            className="cat_prod3_price_input"
                                            type="text"
                                            value={priceFrom}
                                            onChange={(e) => setPriceFrom(e.target.value)}
                                        />
                                        <span className="cat_prod3_price_dash">—</span>
                                        <input
                                            className="cat_prod3_price_input"
                                            type="text"
                                            value={priceTo}
                                            onChange={(e) => setPriceTo(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="cat_prod3_filter_group">
                                    <p className="cat_prod3_group_title">Тип</p>
                                    <div className="cat_prod3_checkbox_item" onClick={() => toggleFilter("offroad")}>
                                        <div className={`cat_prod3_custom_box ${filters.offroad ? "cat_prod3_checked" : ""}`}>
                                            {filters.offroad && <span>✓</span>}
                                        </div>
                                        <span className="cat_prod3_check_label">Внедорожный</span>
                                    </div>
                                    <div className="cat_prod3_checkbox_item" onClick={() => toggleFilter("city")}>
                                        <div className={`cat_prod3_custom_box ${filters.city ? "cat_prod3_checked" : ""}`}>
                                            {filters.city && <span>✓</span>}
                                        </div>
                                        <span className="cat_prod3_check_label">Городской</span>
                                    </div>
                                    <div className="cat_prod3_checkbox_item" onClick={() => toggleFilter("winter")}>
                                        <div className={`cat_prod3_custom_box ${filters.winter ? "cat_prod3_checked" : ""}`}>
                                            {filters.winter && <span>✓</span>}
                                        </div>
                                        <span className="cat_prod3_check_label">Зимний</span>
                                    </div>
                                </div>

                                <div className="cat_prod3_filter_group">
                                    <p className="cat_prod3_group_title">Для кого</p>
                                    <div className="cat_prod3_checkbox_item" onClick={() => toggleFilter("adult")}>
                                        <div className={`cat_prod3_custom_box ${filters.adult ? "cat_prod3_checked" : ""}`}>
                                            {filters.adult && <span>✓</span>}
                                        </div>
                                        <span className="cat_prod3_check_label">Для взрослого</span>
                                    </div>
                                    <div className="cat_prod3_checkbox_item" onClick={() => toggleFilter("child")}>
                                        <div className={`cat_prod3_custom_box ${filters.child ? "cat_prod3_checked" : ""}`}>
                                            {filters.child && <span>✓</span>}
                                        </div>
                                        <span className="cat_prod3_check_label">Для ребенка</span>
                                    </div>
                                    <div className="cat_prod3_checkbox_item" onClick={() => toggleFilter("senior")}>
                                        <div className={`cat_prod3_custom_box ${filters.senior ? "cat_prod3_checked" : ""}`}>
                                            {filters.senior && <span>✓</span>}
                                        </div>
                                        <span className="cat_prod3_check_label">Для пенсионера</span>
                                    </div>
                                </div>

                                <div className="cat_prod3_filter_group">
                                    <p className="cat_prod3_group_title">Вес</p>
                                    <div className="cat_prod3_checkbox_item" onClick={() => toggleFilter("light")}>
                                        <div className={`cat_prod3_custom_box ${filters.light ? "cat_prod3_checked" : ""}`}>
                                            {filters.light && <span>✓</span>}
                                        </div>
                                        <span className="cat_prod3_check_label">Легкие (до 15 кг)</span>
                                    </div>
                                    <div className="cat_prod3_checkbox_item" onClick={() => toggleFilter("medium")}>
                                        <div className={`cat_prod3_custom_box ${filters.medium ? "cat_prod3_checked" : ""}`}>
                                            {filters.medium && <span>✓</span>}
                                        </div>
                                        <span className="cat_prod3_check_label">Средние (15-30 кг)</span>
                                    </div>
                                    <div className="cat_prod3_checkbox_item" onClick={() => toggleFilter("heavy")}>
                                        <div className={`cat_prod3_custom_box ${filters.heavy ? "cat_prod3_checked" : ""}`}>
                                            {filters.heavy && <span>✓</span>}
                                        </div>
                                        <span className="cat_prod3_check_label">Тяжелые (свыше 30 кг)</span>
                                    </div>
                                </div>

                                <button className="cat_prod3_show_more_filter" type="button">
                                    <span>Показать весь фильтр</span>
                                    <span className="cat_prod3_show_arrow">⌵</span>
                                </button>
                            </div>
                        </div>

                        <div className="cat_prod3_promo_month">
                            <div className="cat_prod3_promo_header">
                                <span className="cat_prod3_fire_icon">🔥</span>
                                <span className="cat_prod3_fire_title">Товар месяца</span>
                            </div>
                            <div className="cat_prod3_promo_card_white">
                                <div className="cat_prod3_promo_scooter_box">
                                    <img src={Photo.cat_prod3_scooter_mini} alt="" />
                                </div>
                                <div className="cat_prod3_promo_info">
                                    <p className="cat_prod3_promo_model">Kugoo Kirin M4</p>
                                    <p className="cat_prod3_promo_price">29 900 ₽</p>
                                </div>
                            </div>
                        </div>

                        <div className="cat_prod3_manager_card">
                            <div className="cat_prod3_manager_img_box">
                                <img src={Photo.cat_prod3_manager} alt="" />
                            </div>
                            <p className="cat_prod3_manager_text">
                                Задать вопрос<br />менеджеру
                            </p>
                        </div>
                    </aside>

                    <main className="cat_prod3_grid">
                        {initialProducts.map((item) => {
                            if (item.type === "quiz") {
                                return (
                                    <div key={item.id} className="cat_prod3_quiz_card">
                                        <div className="cat_prod3_quiz_top">
                                            <div className="cat_prod3_quiz_top_spacer"></div>
                                            <h3 className="cat_prod3_quiz_title">
                                                Не можете выбрать подходящую модель?
                                            </h3>
                                            <p className="cat_prod3_quiz_desc">
                                                Пройдите тест и подберите самокат по своим параметрам
                                            </p>
                                            <a href="#" className="cat_prod3_quiz_link">
                                                <span>Подобрать самокат</span>
                                                <span>→</span>
                                            </a>
                                        </div>
                                        <div className="cat_prod3_quiz_img_box">
                                            <img src={Photo.cat_prod3_quiz} alt="" />
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <div key={item.id} className="cat_prod3_card">
                                    <div className="cat_prod3_card_top">
                                        <div className="cat_prod3_top_spacer"></div>
                                        <div className="cat_prod3_card_top_bar">
                                            <div className={`cat_prod3_badge cat_prod3_badge_${item.badgeType}`}>
                                                {item.badge}
                                            </div>
                                            <button className="cat_prod3_compare_btn" type="button">
                                                <img src={Photo.sect2_compare} alt="" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="cat_prod3_card_bottom">
                                        <div className="cat_prod3_card_content_spacer"></div>
                                        <h4 className="cat_prod3_card_title">{item.title}</h4>

                                        <div className="cat_prod3_specs">
                                            <div className="cat_prod3_spec_item">
                                                <div className="cat_prod3_spec_icon"><img src={Photo.sect2_battery} alt="" /></div>
                                                <span>{item.battery}</span>
                                            </div>
                                            <div className="cat_prod3_spec_item">
                                                <div className="cat_prod3_spec_icon"><img src={Photo.sect2_power} alt="" /></div>
                                                <span>{item.power}</span>
                                            </div>
                                            <div className="cat_prod3_spec_item">
                                                <div className="cat_prod3_spec_icon"><img src={Photo.sect2_speed} alt="" /></div>
                                                <span>{item.speed}</span>
                                            </div>
                                            <div className="cat_prod3_spec_item">
                                                <div className="cat_prod3_spec_icon"><img src={Photo.sect2_timer} alt="" /></div>
                                                <span>{item.time}</span>
                                            </div>
                                        </div>

                                        <div className="cat_prod3_price_row">
                                            <div className="cat_prod3_prices">
                                                <span className="cat_prod3_old_price">{item.oldPrice}</span>
                                                <span className="cat_prod3_current_price">{item.price}</span>
                                            </div>

                                            <div className="cat_prod3_actions">
                                                <button className="cat_prod3_icon_btn" type="button">
                                                    <img src={Photo.sect2_cart} alt="" />
                                                </button>
                                                <button className="cat_prod3_icon_btn" type="button">
                                                    <img src={Photo.sect2_heart} alt="" />
                                                </button>
                                            </div>
                                        </div>

                                        <Link to="/product" className="cat_prod3_buy_link">
                                            <button className="cat_prod3_buy_btn" type="button">
                                                Купить в 1 клик
                                            </button>
                                        </Link>
                                        <div className="cat_prod3_card_bottom_spacer"></div>
                                    </div>
                                </div>
                            )
                        })}
                    </main>
                </div>
            </div>
            <div className="cat_prod3_spacer_bottom"></div>
        </section>
    )
}