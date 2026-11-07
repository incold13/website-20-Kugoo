import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./Coop_sect1.scss"

export default function Coop_sect1() {
    const [phone, setPhone] = useState("")

    return (
        <section className="coop1">
            <div className="coop1_spacer_top"></div>
            <div className="coop1_all">
                <div className="coop1_banner">
                    <div className="coop1_left">
                        <div className="coop1_titles">
                            <h1 className="coop1_title">
                                ПОКУПАЙТЕ ТОВАРЫ KUGOO<br />
                                ПО ОПТОВЫМ ЦЕНАМ<br />
                                ОТ ОФИЦИАЛЬНОГО ДИЛЕРА
                            </h1>
                            <p className="coop1_subtitle">
                                Ваша прибыль — до 25% от закупочной стоимости 1 единицы товара
                            </p>
                        </div>

                        <div className="coop1_features">
                            <div className="coop1_feat_row">
                                <div className="coop1_feat_item">
                                    <div className="coop1_feat_icon_wrap">
                                        <img src={Photo.coop1_wallet} alt="" />
                                    </div>
                                    <p className="coop1_feat_text">
                                        Отсутствие демпинга —<br />
                                        контроль цен и МРЦ
                                    </p>
                                </div>

                                <div className="coop1_feat_item">
                                    <div className="coop1_feat_icon_wrap">
                                        <img src={Photo.coop1_box} alt="" />
                                    </div>
                                    <p className="coop1_feat_text">
                                        Бесплатная доставка<br />
                                        до любой ТК
                                    </p>
                                </div>
                            </div>

                            <div className="coop1_feat_row">
                                <div className="coop1_feat_item">
                                    <div className="coop1_feat_icon_wrap">
                                        <img src={Photo.coop1_return} alt="" />
                                    </div>
                                    <p className="coop1_feat_text">
                                        Беспроблемный<br />
                                        возврат и замена брака
                                    </p>
                                </div>

                                <div className="coop1_feat_item">
                                    <div className="coop1_feat_icon_wrap">
                                        <img src={Photo.coop1_media} alt="" />
                                    </div>
                                    <p className="coop1_feat_text">
                                        Готовый медиаконтент<br />
                                        для вашего сайта и соцсетей
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="coop1_right">
                        <div className="coop1_card">
                            <div className="coop1_card_titles">
                                <h2 className="coop1_card_title">
                                    ПОЛУЧИТЕ ПРАЙС-ЛИСТ<br />
                                    С ОПТОВЫМИ ЦЕНАМИ
                                </h2>
                                <p className="coop1_card_subtitle">
                                    а также рассчитаем вашу прибыль<br />
                                    от продажи товаров Kugoo
                                </p>
                            </div>

                            <form className="coop1_form" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    className="coop1_input"
                                    type="tel"
                                    placeholder="+7 (___) __ - __ - __"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />

                                <button className="coop1_btn" type="submit">
                                    Скачать прайс-лист
                                </button>
                            </form>

                            <div className="coop1_agree_row">
                                <div className="coop1_check_icon_box">
                                    <img src={Photo.coop1_check} alt="" />
                                </div>
                                <p className="coop1_agree_text">
                                    Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="#" className="coop1_agree_link">политикой конфиденциальности</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="coop1_spacer_bottom"></div>
        </section>
    )
}