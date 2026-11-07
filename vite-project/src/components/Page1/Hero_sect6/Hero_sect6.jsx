import "./Hero_sect6.scss"
import { Photo } from "../../../photo.js"

export default function Hero_sect6() {
    return (
        <>
            <section className="sect6">
                <div className="sect6_all">
                    <div className="sect6_header">
                        <p className="sect6_title">
                            ПРЕДЛАГАЕМ САМЫЕ ВЫГОДНЫЕ ЦЕНЫ<br />
                            НА ПРОДУКТЫ KUGOO ЗА СЧЕТ ПРЯМЫХ ПОСТАВОК
                        </p>
                        <p className="sect6_subtitle">и заботимся об удобстве покупателей</p>
                        <div className="sect6_tabs">
                            <button className="sect6_tab_active">Интернет-магазин</button>
                            <button className="sect6_tab">Сервисный центр</button>
                        </div>
                    </div>
                    <div className="sect6_grid">
                        <div className="sect6_card">
                            <img className="sect6_card_icon" src={Photo.sect6_basket} alt="" />
                            <div className="sect6_card_content">
                                <p className="sect6_card_title">Х товаров в каталоге</p>
                                <p className="sect6_card_desc">Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении.</p>
                            </div>
                        </div>
                        <div className="sect6_card">
                            <img className="sect6_card_icon" src={Photo.sect6_wallet} alt="" />
                            <div className="sect6_card_content">
                                <p className="sect6_card_title">5 способов оплаты</p>
                                <p className="sect6_card_desc">Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».</p>
                            </div>
                        </div>
                        <div className="sect6_card">
                            <img className="sect6_card_icon" src={Photo.sect6_shield} alt="" />
                            <div className="sect6_card_content">
                                <p className="sect6_card_title">Полная документация и гарантия 1 год</p>
                                <p className="sect6_card_desc">При покупке вам выдается кассовый чек, товарный чек и гарантийный талон — эти документы дают право на гарантийное обслуживание.</p>
                            </div>
                        </div>
                        <div className="sect6_card">
                            <img className="sect6_card_icon" src={Photo.sect6_delivery} alt="" />
                            <div className="sect6_card_content">
                                <p className="sect6_card_title">Отправка заказа день в день</p>
                                <p className="sect6_card_desc">Отправляем заказы по всей России день в день или забирайте товар самостоятельно в магазинах в Москве, Санкт-Петербурге и Краснодаре</p>
                            </div>
                        </div>
                        <div className="sect6_card">
                            <img className="sect6_card_icon" src={Photo.sect6_percent} alt="" />
                            <div className="sect6_card_content">
                                <p className="sect6_card_title">Рассрочка без переплат</p>
                                <p className="sect6_card_desc">В нашем магазине можно приобрести любой товар в рассрочку.</p>
                                <a className="sect6_card_link" href="#">Подробнее про условия рассрочки</a>
                            </div>
                        </div>
                        <div className="sect6_card sect6_card_promo">
                            <div className="sect6_promo_left">
                                <p className="sect6_promo_title">Больше в каталоге</p>
                                <a className="sect6_promo_link" href="#">
                                    <span>Перейти</span>
                                    <img src={Photo.promo_arrow} alt="" />
                                </a>
                            </div>
                            <img className="sect6_promo_img" src={Photo.sect6_card6} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
