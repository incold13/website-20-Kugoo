import "./Hero_sect3.scss"
import { Photo } from "../../../photo.js"
export default function Hero_Sect3 () {
    return (
        <>
            <section className="sect3">
                <div className="sect3_all">
                    <div className="sect3_cards">
                        <div className="sect3_card sect3_card_gray">
                            <div className="sect3_card_text">
                                <p className="sect3_card_title">Подбор модели<br />электросамоката</p>
                                <p className="sect3_card_desc">Пройдите тест и выберите электросамокат по своим критериям</p>
                                <a className="sect3_card_link" href="#">
                                    <p>Подобрать модель</p>
                                    <img className="sect3_card_arrow" src={Photo.promo_arrow} alt="" />
                                </a>
                            </div>
                            <img className="sect3_card_img sect3_card_img1" src={Photo.promo1_scooter} alt="" />
                        </div>
                        <div className="sect3_card sect3_card_purple">
                            <div className="sect3_card_text">
                                <p className="sect3_card_title">Сервисное<br />обслуживание</p>
                                <p className="sect3_card_desc">Крупнейший сервисный центр в России для продуктов Kugoo</p>
                                <a className="sect3_card_link" href="#">
                                    <p>Подобрать модель</p>
                                    <img className="sect3_card_arrow" src={Photo.promo_arrow} alt="" />
                                </a>
                            </div>
                            <img className="sect3_card_img sect3_card_img2" src={Photo.promo2_woman} alt="" />
                        </div>
                    </div>
                    <div className="sect3_banner">
                        <img className="sect3_banner_img" src={Photo.promo_drone} alt="" />
                        <div className="sect3_banner_text">
                            <p className="sect3_banner_badge">Акция</p>
                            <p className="sect3_banner_title">Бесплатная доставка электросамокатов по России до 01.09</p>
                            <button className="sect3_banner_btn">Подробнее</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}