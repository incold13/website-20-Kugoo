import { useState } from "react"
import { Link } from "react-router-dom"
import { Photo } from "../../../photo.js"
import "./about_sect3.scss"

export default function About_sect3() {
    const [activeTab, setActiveTab] = useState("shop")

    return (
        <section className="about3">
            <div className="about3_all">
                <div className="about3_header">
                    <h2 className="about3_title">
                        ПРЕДЛАГАЕМ САМЫЕ ВЫГОДНЫЕ ЦЕНЫ
                        <br />
                        НА ПРОДУКТЫ KUGOO ЗА СЧЕТ ПРЯМЫХ ПОСТАВОК
                    </h2>
                    <p className="about3_subtitle">и заботимся об удобстве покупателей</p>
                    <div className="about3_tabs">
                        <button
                            type="button"
                            className={`about3_tab ${activeTab === "shop" ? "about3_tab_active" : ""}`}
                            onClick={() => setActiveTab("shop")}
                        >
                            Интернет-магазин
                        </button>
                        <button
                            type="button"
                            className={`about3_tab ${activeTab === "service" ? "about3_tab_active" : ""}`}
                            onClick={() => setActiveTab("service")}
                        >
                            Сервисный центр
                        </button>
                    </div>
                </div>

                <div className="about3_grid">
                    <div className="about3_card">
                        <div className="about3_card_inner">
                            <div className="about3_card_icon_box">
                                <img src={Photo.sect6_basket} alt="" />
                            </div>
                            <div className="about3_card_content">
                                <h3 className="about3_card_title">Х товаров в каталоге</h3>
                                <p className="about3_card_desc">
                                    Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about3_card">
                        <div className="about3_card_inner">
                            <div className="about3_card_icon_box">
                                <img src={Photo.sect6_wallet} alt="" />
                            </div>
                            <div className="about3_card_content">
                                <h3 className="about3_card_title">5 способов оплаты</h3>
                                <p className="about3_card_desc">
                                    Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about3_card">
                        <div className="about3_card_inner">
                            <div className="about3_card_icon_box">
                                <img src={Photo.sect6_shield} alt="" />
                            </div>
                            <div className="about3_card_content">
                                <h3 className="about3_card_title">Полная документация и гарантия 1 год</h3>
                                <p className="about3_card_desc">
                                    При покупке вам выдается кассовый чек, товарный чек и гарантийный талон — эти документы дают право на гарантийное обслуживание.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about3_card">
                        <div className="about3_card_inner">
                            <div className="about3_card_icon_box">
                                <img src={Photo.sect6_delivery} alt="" />
                            </div>
                            <div className="about3_card_content">
                                <h3 className="about3_card_title">Отправка заказа день в день</h3>
                                <p className="about3_card_desc">
                                    Отправляем заказы по всей России день в день или забирайте товар самостоятельно в магазинах в Москве, Санкт-Петербурге и Краснодаре
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about3_card">
                        <div className="about3_card_inner">
                            <div className="about3_card_icon_box">
                                <img src={Photo.sect6_percent} alt="" />
                            </div>
                            <div className="about3_card_content">
                                <h3 className="about3_card_title">Рассрочка без переплат</h3>
                                <p className="about3_card_desc">
                                    В нашем магазине можно приобрести любой товар в рассрочку.
                                </p>
                                <a href="#" className="about3_card_link">
                                    Подробнее про условия рассрочки
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="about3_card about3_card_promo">
                        <div className="about3_promo_inner">
                            <div className="about3_promo_content">
                                <h3 className="about3_promo_title">Больше в каталоге</h3>
                                <Link to="/catalog" className="about3_promo_link">
                                    <span>Перейти</span>
                                    <img src={Photo.promo_arrow} alt="" />
                                </Link>
                            </div>
                            <div className="about3_promo_img_box">
                                <img src={Photo.sect6_card6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
