import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./Coop_sect7.scss"

export default function Coop_sect7() {
    const [phone, setPhone] = useState("")

    return (
        <section className="coop7">
            <div className="coop7_spacer_top"></div>
            <div className="coop7_all">
                <div className="coop7_banner">
                    <div className="coop7_spacer_left"></div>
                    <div className="coop7_content">
                        <div className="coop7_left">
                            <div className="coop7_badge">
                                Бесплатно
                            </div>

                            <div className="coop7_titles">
                                <h2 className="coop7_title">
                                    ПОЛУЧИТЕ ГОТОВЫЙ ПЛАН<br />
                                    РАЗВИТИЯ БИЗНЕСА<br />
                                    ПО ПРОДАЖЕ ТОВАРОВ KUGOO
                                </h2>
                                <p className="coop7_subtitle">
                                    Подготовим для вас бизнес-план, который включает:
                                </p>
                            </div>

                            <div className="coop7_list">
                                <div className="coop7_list_item">
                                    <div className="coop7_check_box">
                                        <img src={Photo.coop7_check} alt="" />
                                    </div>
                                    <p className="coop7_item_text">индивидуальный прайс-лист</p>
                                </div>

                                <div className="coop7_list_item">
                                    <div className="coop7_check_box">
                                        <img src={Photo.coop7_check} alt="" />
                                    </div>
                                    <p className="coop7_item_text">расчет прогнозируемой прибыли и сроков окупаемости</p>
                                </div>

                                <div className="coop7_list_item">
                                    <div className="coop7_check_box">
                                        <img src={Photo.coop7_check} alt="" />
                                    </div>
                                    <p className="coop7_item_text">бренд-зону Kugoo</p>
                                </div>

                                <div className="coop7_list_item">
                                    <div className="coop7_check_box">
                                        <img src={Photo.coop7_check} alt="" />
                                    </div>
                                    <p className="coop7_item_text">разработку сайта</p>
                                </div>

                                <div className="coop7_list_item">
                                    <div className="coop7_check_box">
                                        <img src={Photo.coop7_check} alt="" />
                                    </div>
                                    <p className="coop7_item_text">и еще +15 услуг под ключ</p>
                                </div>
                            </div>
                        </div>

                        <div className="coop7_right">
                            <div className="coop7_card_titles">
                                <h3 className="coop7_card_title">
                                    ПОЛУЧИТЕ ПРАЙС-ЛИСТ<br />
                                    С ОПТОВЫМИ ЦЕНАМИ
                                </h3>
                                <p className="coop7_card_subtitle">
                                    а также рассчитаем вашу прибыль<br />
                                    от продажи товаров Kugoo
                                </p>
                            </div>

                            <form className="coop7_form" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    className="coop7_input"
                                    type="tel"
                                    placeholder="+7 (___) __ - __ - __"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />

                                <button className="coop7_btn" type="submit">
                                    Скачать прайс-лист
                                </button>
                            </form>

                            <div className="coop7_agree_row">
                                <div className="coop7_agree_box">
                                    <input type="checkbox" />
                                </div>
                                <p className="coop7_agree_text">
                                    Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="#" className="coop7_agree_link">политикой конфиденциальности</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="coop7_spacer_right"></div>
                </div>
            </div>
            <div className="coop7_spacer_bottom"></div>
        </section>
    )
}