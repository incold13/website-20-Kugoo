import { Photo } from "../../photo.js"
import "./Footer.scss"

export default function Footer() {
    return (
        <footer className="footer">
                <div className="footer_newsletter">
                    <div className="footer_news_spacer_l"></div>
                    <div className="footer_news_content">
                        <div className="footer_news_text_box">
                            <p className="footer_news_title">
                                ОСТАВЬТЕ СВОЮ ПОЧТУ И СТАНЬТЕ ПЕРВЫМ,<br />
                                КТО ПОЛУЧИТ СКИДКУ НА НОВЫЕ САМОКАТЫ
                            </p>
                        </div>
                        <form className="footer_news_form" onSubmit={(e) => e.preventDefault()}>
                            <div className="footer_news_input_box">
                                <div className="footer_news_input_spacer_l"></div>
                                <input
                                    className="footer_news_input"
                                    type="email"
                                    placeholder="Введите Ваш email"
                                />
                                <div className="footer_news_input_spacer_r"></div>
                            </div>
                            <button className="footer_news_btn" type="submit">
                                Подписаться
                            </button>
                        </form>
                    </div>
                    <div className="footer_news_spacer_r"></div>
                </div>
            <div className="footer_spacer_top"></div>
            <div className="footer_all">

                <div className="footer_top_columns">
                    <div className="footer_col_catalog">
                        <p className="footer_col_title">Каталог товаров</p>
                        <div className="footer_col_links">
                            <a href="#scooters" className="footer_link">Электросамокаты</a>
                            <a href="#scooters2" className="footer_link">Электроскутеры</a>
                            <a href="#bikes" className="footer_link">Электровелосипеды</a>
                            <a href="#bikes2" className="footer_link">Электровелосипеды</a>
                        </div>
                    </div>

                    <div className="footer_col_buyers">
                        <p className="footer_col_title">Покупателям</p>
                        <div className="footer_buyers_subcols">
                            <div className="footer_buyers_col">
                                <a href="#service" className="footer_link">Сервисный центр</a>
                                <a href="#delivery" className="footer_link">Доставка и оплата</a>
                                <a href="#credit" className="footer_link">Рассрочка</a>
                                <a href="#testdrive" className="footer_link">Тест-драйв</a>
                            </div>
                            <div className="footer_buyers_col">
                                <a href="#blog" className="footer_link">Блог</a>
                                <a href="#coop" className="footer_link">Сотрудничество</a>
                                <a href="#contacts" className="footer_link">Контакты</a>
                                <a href="#promos" className="footer_link">Акции</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer_col_contacts">
                        <div className="footer_contacts_header">
                            <p className="footer_col_title">Контакты</p>
                            <a href="#callback" className="footer_callback_link">
                                Заказать звонок
                            </a>
                        </div>

                        <div className="footer_phones_row">
                            <div className="footer_phone_item">
                                <p className="footer_phone_label">Call-центр</p>
                                <p className="footer_phone_number">+7 (800) 505-54-61</p>
                                <p className="footer_phone_schedule">Пн-Вс 10:00 - 20:00</p>
                            </div>

                            <div className="footer_phone_item">
                                <p className="footer_phone_label">Сервисный центр</p>
                                <p className="footer_phone_number">+7 (499) 350-76-92</p>
                                <p className="footer_phone_schedule">Пн-Вс 10:00 - 20:00</p>
                            </div>
                        </div>

                        <div className="footer_shops_row">
                            <div className="footer_shop_item">
                                <p className="footer_shop_city">Магазин в Москве</p>
                                <p className="footer_shop_address">ул. Ткацкая, 5 стр. 16</p>
                                <p className="footer_shop_phone">+7 (499) 406 15 87</p>
                            </div>

                            <div className="footer_shop_item">
                                <p className="footer_shop_city">Магазин в Санкт-Петербурге</p>
                                <p className="footer_shop_address">ул. Фрунзе, 2</p>
                                <p className="footer_shop_phone">+7 (499) 406 15 87</p>
                            </div>

                            <div className="footer_shop_item">
                                <p className="footer_shop_city">Магазин в Краснодаре</p>
                                <p className="footer_shop_address">ул. Восточно-Кругликовская, 86</p>
                                <p className="footer_shop_phone">+ 7 (800) 505 54 61</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_divider"></div>

                <div className="footer_mid_row">
                    <div className="footer_mid_left">
                        <img src={Photo.h_logo} alt="Kugoo" className="footer_logo" />
                        <div className="footer_store_badges">
                            <div>
                                <img src={Photo.googleplay} />
                            </div>
                            <div>
                                <img src={Photo.appstore} />
                            </div>
                        </div>
                    </div>

                    <div className="footer_mid_right">
                        <div className="footer_soc_pill">
                            <div className="footer_soc_pill_inner">
                                <img src={Photo.vk_footer} />
                                <div className="footer_soc_pill_div_text">
                                    <span className="footer_soc_pill_name">Вконтакте</span>
                                    <span className="footer_soc_pill_count">3 300</span>
                                </div>
                            </div>
                        </div>

                        <div className="footer_soc_pill">
                            <div className="footer_soc_pill_inner">
                                <img src={Photo.insta_footer} />
                                <div className="footer_soc_pill_div_text">
                                    <span className="footer_soc_pill_name">Instagram</span>
                                    <span className="footer_soc_pill_count">10 602</span>
                                </div>
                            </div>
                        </div>

                        <div className="footer_soc_pill">
                            <div className="footer_soc_pill_inner">
                                <img src={Photo.youtube_footer} />
                                <div className="footer_soc_pill_div_text">
                                    <span className="footer_soc_pill_name">YouTube</span>
                                    <span className="footer_soc_pill_count">3 603</span>
                                </div>
                            </div>
                        </div>

                        <div className="footer_soc_pill">
                            <div className="footer_soc_pill_inner">
                                <img src={Photo.telegram_footer} />
                                <div className="footer_soc_pill_div_text">
                                    <span className="footer_soc_pill_name">Telegram</span>
                                    <span className="footer_soc_pill_count">432</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_divider"></div>

                <div className="footer_bottom_row">
                    <div className="footer_bottom_docs">
                        <a href="#reqs" className="footer_doc_link">Реквизиты</a>
                        <a href="#privacy" className="footer_doc_link">Политика конфиденциальности</a>
                    </div>

                    <div className="footer_bottom_payments">
                        <div className="footer_pay_badge">
                            <img src={Photo.gpay} />
                        </div>
                        <div className="footer_pay_badge">
                            <img src={Photo.applepay} />
                        </div>
                        <div className="footer_pay_badge">
                            <img src={Photo.visa} />
                        </div>
                        <div className="footer_pay_badge">
                            <img src={Photo.mastcard} />
                        </div>
                        <div className="footer_pay_badge">
                            <img src={Photo.mastercard2} />
                        </div>
                        <div className="footer_pay_badge">
                            <img src={Photo.webmoney} />
                        </div>
                        <div className="footer_pay_badge">
                            <img src={Photo.qiwi} />
                        </div>
                    </div>

                    <div className="footer_bottom_chat">
                        <span className="footer_chat_label">Online чат:</span>
                        <div className="footer_chat_icons">
                            <a href="#viber" className="footer_chat_btn">
                                <img src={Photo.h_viber} alt="Viber" />
                            </a>
                            <a href="#wa" className="footer_chat_btn">
                                <img src={Photo.h_whatsapp} alt="WhatsApp" />
                            </a>
                            <a href="#tg" className="footer_chat_btn">
                                <img src={Photo.h_telegram} alt="Telegram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_spacer_bottom"></div>
        </footer>
    )
}
