import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./delivery_sect2.scss"

const regions = [
    { id: "moscow", label: "Москва и МО" },
    { id: "spb", label: "Санкт-Петербург и Ленобласть" },
    { id: "krasnodar", label: "Краснодар" },
    { id: "regions", label: "Регионы России" },
    { id: "cis", label: "Казахстан, РБ, Армения, Киргизия" },
]

export default function Delivery_sect2() {
    const [activeRegion, setActiveRegion] = useState("moscow")

    return (
        <section className="deliv2">
            <div className="deliv2_all">
                <h2 className="deliv2_main_title">ОТПРАВЛЯЕМ ПО РОССИИ В ДЕНЬ ЗАКАЗА</h2>

                <div className="deliv2_region_block">
                    <p className="deliv2_region_label">Выберите свой регион</p>
                    <div className="deliv2_tabs">
                        {regions.map((reg) => (
                            <button
                                key={reg.id}
                                type="button"
                                className={`deliv2_tab ${activeRegion === reg.id ? "deliv2_tab_active" : ""}`}
                                onClick={() => setActiveRegion(reg.id)}
                            >
                                {reg.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="deliv2_table">
                    <div className="deliv2_table_header">
                        <span className="deliv2_col_method">Способ доставки</span>
                        <span className="deliv2_col_time">Время доставки</span>
                        <span className="deliv2_col_price">Стоимость</span>
                    </div>

                    <div className="deliv2_row">
                        <div className="deliv2_col_method">
                            <p className="deliv2_method_name">Курьером</p>
                        </div>
                        <div className="deliv2_col_time">
                            <p className="deliv2_text">В течение дня при заказе до 11:00</p>
                        </div>
                        <div className="deliv2_col_price deliv2_price_with_badge">
                            <span className="deliv2_price_val">Бесплатная доставка</span>
                            <span className="deliv2_fire_badge">🔥 Акция до 15.09</span>
                        </div>
                    </div>

                    <div className="deliv2_divider"></div>

                    <div className="deliv2_row">
                        <div className="deliv2_col_method">
                            <p className="deliv2_method_name">Срочная доставка</p>
                        </div>
                        <div className="deliv2_col_time deliv2_time_col">
                            <p className="deliv2_text">
                                За 2-4 часа в день заказа. Заказы на срочную доставку принимаются до 17:00, в пятницу — до 13:00.
                            </p>
                            <p className="deliv2_text">
                                При заказе дополнительных услуг (гидроизоляция, настройка) время может быть увеличено.
                            </p>
                        </div>
                        <div className="deliv2_col_price">
                            <p className="deliv2_text">Стоимость срочной доставки</p>
                            <a href="#" className="deliv2_link" onClick={(e) => e.preventDefault()}>
                                уточняйте у менеджера
                            </a>
                        </div>
                    </div>

                    <div className="deliv2_divider"></div>

                    <div className="deliv2_pickup_block">
                        <p className="deliv2_pickup_line">
                            Самовывоз из магазина <strong>ул. Ткацкая, 5 стр. 16. (Пн - Вс 10:00 - 20:00)</strong>
                        </p>
                        <p className="deliv2_pickup_line">
                            Перед посещением магазина уточняйте наличие рассматриваемой вами модели по телефону{" "}
                            <a href="tel:+74994061579" className="deliv2_phone_link">
                                +7 (499) 406-15-79
                            </a>
                        </p>
                    </div>

                    <div className="deliv2_divider"></div>
                </div>

                <div className="deliv2_payment_block">
                    <h3 className="deliv2_pay_title">Выбирайте подходящий способ оплаты</h3>

                    <div className="deliv2_pay_grid">
                        <div className="deliv2_pay_card">
                            <p className="deliv2_pay_text">Наличными в магазине или курьеру</p>
                        </div>

                        <div className="deliv2_pay_card">
                            <p className="deliv2_pay_text">Картой в магазине</p>
                            <div className="deliv2_pay_logos">
                                <img src={Photo.gpay} alt="Google Pay" />
                                <img src={Photo.applepay} alt="Apple Pay" />
                                <img src={Photo.visa} alt="Visa" />
                                <img src={Photo.mastcard} alt="Mastercard" />
                                <img src={Photo.mastercard2} alt="Maestro" />
                                <img src={Photo.webmoney} alt="Webmoney" />
                                <img src={Photo.qiwi} alt="Qiwi" />
                            </div>
                        </div>

                        <div className="deliv2_pay_card">
                            <p className="deliv2_pay_text">Онлайн на сайте через корзину</p>
                        </div>

                        <div className="deliv2_pay_card">
                            <p className="deliv2_pay_text">
                                Через интернет-банкинг по счету, который вам выставит менеджер
                            </p>
                        </div>

                        <div className="deliv2_pay_card">
                            <p className="deliv2_pay_text">
                                В рассрочку от Сбербанка, Тинькофф банка или по карте "Халва" от Совкомбанка
                            </p>
                        </div>

                        <div className="deliv2_pay_card">
                            <p className="deliv2_pay_text">
                                В рассрочку — только для электрсоамокатов версии MAX
                            </p>
                            <a href="#" className="deliv2_link" onClick={(e) => e.preventDefault()}>
                                Узнать подробнее
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
