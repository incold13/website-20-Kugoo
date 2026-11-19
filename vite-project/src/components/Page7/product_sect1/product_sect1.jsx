import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./product_sect1.scss"

const thumbnails = [
    Photo.prod1_thumb1,
    Photo.prod1_thumb2,
    Photo.prod1_thumb3,
    Photo.prod1_thumb4,
    Photo.prod1_thumb5,
    Photo.prod1_thumb6,
    Photo.prod1_thumb7,
    Photo.prod1_thumb8,
    Photo.prod1_thumb9,
    Photo.prod1_thumb10,
    Photo.prod1_thumb11,
]

export default function Product_sect1() {
    const [selectedThumb, setSelectedThumb] = useState(2)
    const [selectedPackage, setSelectedPackage] = useState("base")
    const [selectedWarranty, setSelectedWarranty] = useState("extended")
    const [selectedService, setSelectedService] = useState("setup")
    const [selectedGiftColor, setSelectedGiftColor] = useState("pink")
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <section className="prod1">
            <div className="prod1_breadcrumbs_wrap">
                <div className="prod1_breadcrumbs">
                    <div className="prod1_home_box">
                        <img src={Photo.catalog1_home} alt="" />
                    </div>
                    <a href="#" className="prod1_bc_link">Главная</a>
                    <span className="prod1_bc_slash">/</span>
                    <a href="#" className="prod1_bc_link">Каталог</a>
                    <span className="prod1_bc_slash">/</span>
                    <a href="#" className="prod1_bc_link">Электросамокаты</a>
                    <span className="prod1_bc_slash">/</span>
                    <span className="prod1_bc_current">Kugoo Kirin M4</span>
                </div>
            </div>

            <div className="prod1_all">
                <div className="prod1_gallery">
                    <div className="prod1_main_img_box">
                        <div className="prod1_main_img">
                            <img src={Photo.prod1_thumb1 || Photo.catalog_prod3_scot} alt="Kugoo Kirin M4" />
                        </div>
                    </div>

                    <div className="prod1_thumbs_wrap">
                        {thumbnails.map((thumb, index) => (
                            <div
                                key={index}
                                className={`prod1_thumb ${selectedThumb === index ? "prod1_thumb_active" : ""}`}
                                onClick={() => setSelectedThumb(index)}
                            >
                                <img src={thumb} alt="" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="prod1_info">
                    <div className="prod1_header_block">
                        <h1 className="prod1_title">KUGOO KIRIN M4</h1>

                        <div className="prod1_meta_row">
                            <span>Просмотров 350</span>
                            <span>Купили 196 раз</span>
                            <span>Артикул: 220000000026</span>
                        </div>

                        <div className="prod1_status_row">
                            <div className="prod1_stock">
                                <span className="prod1_stock_dot"></span>
                                <span>В наличии</span>
                            </div>
                            <div className="prod1_action_item">
                                <img src={Photo.product_sect1_ves} alt="" />
                                <span>Сравнить</span>
                            </div>
                            <div className="prod1_action_item">
                                <img src={Photo.product_sect1_podelit} alt="" />
                                <span>Поделиться</span>
                            </div>
                        </div>

                        <div className="prod1_price_row">
                            <div className="prod1_prices">
                                <span className="prod1_old_price">39 900 ₽</span>
                                <span className="prod1_current_price">29 900 ₽</span>
                            </div>

                            <div className="prod1_installment_card">
                                <div className="prod1_card_icon_box">
                                    <img src={Photo.product_sect1_card} alt="" />
                                </div>
                                <div className="prod1_installment_text">
                                    <span className="prod1_inst_label">Рассрочка:</span>
                                    <span className="prod1_inst_val"> 1 760 ₽ в месяц / 24 месяца</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prod1_section_block">
                        <div className="prod1_opt_label_row">
                            <span className="prod1_opt_title">Комплектация</span>
                            <div className="prod1_info_icon_box">
                                <img src={Photo.serv_info} alt="" />
                            </div>
                        </div>

                        <div className="prod1_btn_grid">
                            <button
                                type="button"
                                className={`prod1_btn_opt ${selectedPackage === "base" ? "prod1_btn_active" : ""}`}
                                onClick={() => setSelectedPackage("base")}
                            >
                                Базовая
                            </button>
                            <button
                                type="button"
                                className={`prod1_btn_opt ${selectedPackage === "max" ? "prod1_btn_active" : ""}`}
                                onClick={() => setSelectedPackage("max")}
                            >
                                Версия MAX
                            </button>
                            <button
                                type="button"
                                className={`prod1_btn_opt ${selectedPackage === "vip" ? "prod1_btn_active" : ""}`}
                                onClick={() => setSelectedPackage("vip")}
                            >
                                VIP-версия
                            </button>
                        </div>
                    </div>

                    <div className="prod1_divider"></div>

                    <div className="prod1_section_block">
                        <span className="prod1_tires_label">Покрышки</span>
                        <div className="prod1_tires_row">
                            <div className="prod1_tires_info">
                                <h3 className="prod1_tires_name">Внедорожная шипованная</h3>
                                <p className="prod1_tires_sub">+ установка (с доп.комплектом базовых покрышек)</p>
                                <p className="prod1_tires_price">7600 руб.</p>
                            </div>
                            <button type="button" className="prod1_change_btn">
                                Изменить
                            </button>
                        </div>
                    </div>

                    <div className="prod1_divider"></div>

                    <div className="prod1_section_block">
                        <span className="prod1_opt_title">Гарантия</span>
                        <div className="prod1_btn_grid">
                            <button
                                type="button"
                                className={`prod1_btn_card ${selectedWarranty === "standard" ? "prod1_btn_active" : ""}`}
                                onClick={() => setSelectedWarranty("standard")}
                            >
                                <span className="prod1_card_main_text">Стандартная 1 год</span>
                                <span className="prod1_card_sub_text">Бесплатно</span>
                            </button>
                            <button
                                type="button"
                                className={`prod1_btn_card ${selectedWarranty === "extended" ? "prod1_btn_active" : ""}`}
                                onClick={() => setSelectedWarranty("extended")}
                            >
                                <span className="prod1_card_main_text">Расширенная 2 года</span>
                                <span className="prod1_card_sub_text">2 990 руб.</span>
                            </button>
                        </div>
                    </div>

                    <div className="prod1_divider"></div>

                    <div className="prod1_section_block">
                        <span className="prod1_opt_title">Дополнительные услуги</span>
                        <div className="prod1_btn_grid">
                            <button
                                type="button"
                                className={`prod1_btn_card ${selectedService === "none" ? "prod1_btn_active" : ""}`}
                                onClick={() => setSelectedService("none")}
                            >
                                <span className="prod1_card_main_text">Нет</span>
                            </button>
                            <button
                                type="button"
                                className={`prod1_btn_card ${selectedService === "setup" ? "prod1_btn_active" : ""}`}
                                onClick={() => setSelectedService("setup")}
                            >
                                <span className="prod1_card_main_text">Настройка</span>
                                <span className="prod1_card_sub_text">1 520 руб.</span>
                            </button>
                            <button
                                type="button"
                                className={`prod1_btn_card ${selectedService === "hydro" ? "prod1_btn_active" : ""}`}
                                onClick={() => setSelectedService("hydro")}
                            >
                                <span className="prod1_card_main_text">Гидроизоляция</span>
                                <span className="prod1_card_sub_text">3 850 руб.</span>
                            </button>
                            <button
                                type="button"
                                className={`prod1_btn_card ${selectedService === "both" ? "prod1_btn_active" : ""}`}
                                onClick={() => setSelectedService("both")}
                            >
                                <span className="prod1_card_main_text">Гидроизоляция и настройка</span>
                                <span className="prod1_card_sub_text">3 409 руб. (-30%)</span>
                            </button>
                        </div>
                    </div>

                    <div className="prod1_divider"></div>

                    <div className="prod1_section_block prod1_gift_block">
                        <div className="prod1_gift_header">
                            <span className="prod1_opt_title">Подарочная упаковка</span>
                            <div className="prod1_timer_box">
                                <span className="prod1_timer_label">До конца акции</span>
                                <span className="prod1_timer_val">06:34:23:02</span>
                            </div>
                        </div>

                        <div className="prod1_gift_banner">
                            <div className="prod1_gift_banner_inner">
                                <h4 className="prod1_gift_count">2 подарка при покупке</h4>
                                <div className="prod1_gift_items_row">
                                    <div className="prod1_gift_item">
                                        <div className="prod1_gift_icon_box">
                                            <img src={Photo.product_sect1_podar1} alt="" />
                                        </div>
                                        <p className="prod1_gift_item_text">
                                            Книга «6 вопросов об электротранспорте, на которые вы должны знать ответ».
                                        </p>
                                    </div>
                                    <div className="prod1_gift_item">
                                        <div className="prod1_gift_icon_box">
                                            <img src={Photo.product_sect1_podar2} alt="" />
                                        </div>
                                        <p className="prod1_gift_item_text">
                                            Универсальный держатель для телефона
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="prod1_btn_grid">
                            <button
                                type="button"
                                className={`prod1_btn_card prod1_btn_gift ${selectedGiftColor === "none" ? "prod1_btn_active" : ""}`}
                                onClick={() => setSelectedGiftColor("none")}
                            >
                                <span className="prod1_card_main_text">Без упаковки</span>
                            </button>
                            <button
                                type="button"
                                className={`prod1_btn_card prod1_btn_gift ${selectedGiftColor === "pink" ? "prod1_btn_active" : ""}`}
                                onClick={() => setSelectedGiftColor("pink")}
                            >
                                <span className="prod1_color_circle prod1_color_pink"></span>
                                <span className="prod1_card_main_text">Розовый</span>
                            </button>
                            <button
                                type="button"
                                className={`prod1_btn_card prod1_btn_gift ${selectedGiftColor === "blue" ? "prod1_btn_active" : ""}`}
                                onClick={() => setSelectedGiftColor("blue")}
                            >
                                <span className="prod1_color_circle prod1_color_blue"></span>
                                <span className="prod1_card_main_text">Синий</span>
                            </button>
                            <button
                                type="button"
                                className={`prod1_btn_card prod1_btn_gift ${selectedGiftColor === "red" ? "prod1_btn_active" : ""}`}
                                onClick={() => setSelectedGiftColor("red")}
                            >
                                <span className="prod1_color_circle prod1_color_red"></span>
                                <span className="prod1_card_main_text">Красный</span>
                            </button>
                        </div>
                    </div>

                    <div className="prod1_checkout_box">
                        <div className="prod1_checkout_inner">
                            <div className="prod1_checkout_price_row">
                                <span className="prod1_checkout_price">45 900 руб.</span>
                                <button
                                    type="button"
                                    className={`prod1_heart_btn ${isFavorite ? "prod1_heart_active" : ""}`}
                                    onClick={() => setIsFavorite(!isFavorite)}
                                >
                                    <img src={Photo.sect2_heart} alt="" />
                                </button>
                            </div>

                            <div className="prod1_checkout_divider"></div>

                            <div className="prod1_delivery_row">
                                <div className="prod1_delivery_icon_box">
                                    <img src={Photo.product_sect1_delivery} alt="" />
                                </div>
                                <div className="prod1_delivery_text">
                                    <strong>Бесплатная доставка по РФ</strong>
                                    <span> от 1 дня при заказе до 01.09</span>
                                </div>
                            </div>

                            <div className="prod1_buy_actions">
                                <button type="button" className="prod1_buy_oneclick">
                                    Купить в 1 клик
                                </button>
                                <button type="button" className="prod1_add_cart">
                                    Добавить в корзину
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="prod1_later_row">
                        <a href="#" className="prod1_later_link">Хотите купить позже?</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
