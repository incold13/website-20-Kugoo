import "./Hero.scss"
import {Photo} from "../../../photo.js"
export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="hero_all">
                    <div className="hero_banner">
                        <p className="hero_kirin">Kirin</p>
                        <img className="hero_glow" src={Photo.hero_scooter} alt="" />
                        <img className="hero_photo" src={Photo.hero_scooter} alt="" />
                        <div className="hero_text">
                            <p className="hero_badge">Новинка</p>
                            <div className="hero_body">
                                <div className="hero_group">
                                    <div className="hero_head">
                                        <div className="hero_title">
                                            <p>Электросамокаты Kugoo Kirin</p>
                                            <p>от официального дилера</p>
                                        </div>
                                        <p className="hero_sub">с бесплатной доставкой по РФ от 1 дня</p>
                                    </div>
                                    <button className="hero_btn">Перейти в католог</button>
                                </div>
                                <div className="hero_pager">
                                    <img className="hero_arrow" src={Photo.hero_arrow_l} alt="" />
                                    <p className="hero_num">1</p>
                                    <div className="hero_line"></div>
                                    <p className="hero_num">5</p>
                                    <img className="hero_arrow" src={Photo.hero_arrow_r} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="hero_float">
                            <div className="hero_pill">
                                <img className="hero_bolt" src={Photo.hero_bolt} alt="" />
                                <p className="hero_pill_text">Тест-драйв и обучение</p>
                            </div>
                            <p className="hero_free">Бесплатно</p>
                            <div className="hero_dash"></div>
                            <div className="hero_dot hero_dot_b"></div>
                            <div className="hero_dot hero_dot_a"></div>
                        </div>
                    </div>
                    <div className="hero_stats">
                        <div className="hero_cols">
                            <div className="hero_stat">
                                <p className="hero_stat_name">Гарантия 1 год</p>
                                <p className="hero_stat_desc">на весь ассортимент</p>
                            </div>
                            <div className="hero_stat">
                                <p className="hero_stat_name">Рассрочка</p>
                                <p className="hero_stat_desc">от 6 месяцев</p>
                            </div>
                            <div className="hero_stat">
                                <p className="hero_stat_name">Подарки</p>
                                <p className="hero_stat_desc">и бонусам к покупкам</p>
                            </div>
                        </div>
                        <div className="hero_rating">
                            <div className="hero_rating_in">
                                <img className="hero_rating_icon" src={Photo.hero_yandex} alt="" />
                                <div className="hero_rating_info">
                                    <p className="hero_rating_label">Яндекс отзывы</p>
                                    <div className="hero_rating_row">
                                        <div className="hero_star"></div>
                                        <p className="hero_rating_num">4,9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero_end"></div>
                </div>
            </section>
        </>
    )
}