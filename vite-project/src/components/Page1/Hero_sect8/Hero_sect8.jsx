import "./Hero_sect8.scss"
import { Photo } from "../../../photo.js"

export default function Hero_sect8() {
    return (
        <>
            <section className="sect8">
                <div className="sect8_all">
                    <div className="sect8_header">
                        <p className="sect8_title">ОТЗЫВЫ И ФОТО РЕАЛЬНЫХ ПОКУПАТЕЛЕЙ</p>
                        <a className="sect8_link" href="#">
                            <span>Читать отзывы на Яндекс</span>
                            <img src={Photo.promo_arrow} alt="" />
                        </a>
                    </div>

                    <div className="sect8_rows">
                        <div className="sect8_row">
                            <div className="sect8_track sect8_track_right">
                                {[1, 2].map((loop) => (
                                    <div className="sect8_group" key={loop}>
                                        <div className="sect8_card">
                                            <img className="sect8_card_img" src={Photo.sect8_photo1} alt="" />
                                        </div>
                                        <div className="sect8_card">
                                            <img className="sect8_card_img" src={Photo.sect8_photo2} alt="" />
                                        </div>
                                        <div className="sect8_card sect8_card_review">
                                            <img className="sect8_review_bg" src={Photo.sect8_review_bg} alt="" />
                                            <div className="sect8_review_overlay"></div>
                                            <div className="sect8_review_inner">
                                                <div className="sect8_review_user">
                                                    <img className="sect8_review_avatar" src={Photo.sect8_avatar} alt="" />
                                                    <div className="sect8_review_user_info">
                                                        <p className="sect8_review_name">Илья М.</p>
                                                        <p className="sect8_review_status">Знаток города 2 уровня</p>
                                                    </div>
                                                </div>
                                                <div className="sect8_review_rating">
                                                    <div className="sect8_review_stars">
                                                        <img src={Photo.sect8_star} alt="" />
                                                        <img src={Photo.sect8_star} alt="" />
                                                        <img src={Photo.sect8_star} alt="" />
                                                        <img src={Photo.sect8_star} alt="" />
                                                        <img src={Photo.sect8_star} alt="" />
                                                    </div>
                                                    <p className="sect8_review_date">23 сентября 2020</p>
                                                </div>
                                                <p className="sect8_review_text">
                                                    Магазин очень понравился, быстро обслужили, персонал хорошо знает свой товар, вежливо и грамотно консультирует, ассортимент внушительный, а если чего нет сейчас в наличии, то можно без проблем заказать на сайте, так что всем рекомендую!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sect8_card">
                                            <img className="sect8_card_img" src={Photo.sect8_photo3} alt="" />
                                        </div>
                                        <div className="sect8_card">
                                            <img className="sect8_card_img" src={Photo.sect8_photo4} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="sect8_row">
                            <div className="sect8_track sect8_track_left">
                                {[1, 2].map((loop) => (
                                    <div className="sect8_group" key={loop}>
                                        <div className="sect8_card">
                                            <img className="sect8_card_img" src={Photo.sect8_photo4} alt="" />
                                        </div>
                                        <div className="sect8_card">
                                            <img className="sect8_card_img" src={Photo.sect8_photo5} alt="" />
                                        </div>
                                        <div className="sect8_card">
                                            <img className="sect8_card_img" src={Photo.sect8_photo6} alt="" />
                                        </div>
                                        <div className="sect8_card">
                                            <img className="sect8_card_img" src={Photo.sect8_photo7} alt="" />
                                        </div>
                                        <div className="sect8_card">
                                            <img className="sect8_card_img" src={Photo.sect8_photo8} alt="" />
                                        </div>
                                        <div className="sect8_card">
                                            <img className="sect8_card_img" src={Photo.sect8_photo3} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
