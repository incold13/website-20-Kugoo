import "./about_sect8.scss"
import { Photo } from "../../../photo.js"

export default function About_sect8() {
    return (
        <section className="about8">
            <div className="about8_all">
                <div className="about8_header">
                    <p className="about8_title">ОТЗЫВЫ И ФОТО РЕАЛЬНЫХ ПОКУПАТЕЛЕЙ</p>
                    <a className="about8_link" href="#">
                        <span>Читать отзывы на Яндекс</span>
                        <img src={Photo.promo_arrow} alt="" />
                    </a>
                </div>

                <div className="about8_rows">
                    <div className="about8_row">
                        <div className="about8_track about8_track_right">
                            {[1, 2].map((loop) => (
                                <div className="about8_group" key={loop}>
                                    <div className="about8_card">
                                        <img className="about8_card_img" src={Photo.sect8_photo1} alt="" />
                                    </div>
                                    <div className="about8_card">
                                        <img className="about8_card_img" src={Photo.sect8_photo2} alt="" />
                                    </div>
                                    <div className="about8_card about8_card_review">
                                        <img className="about8_review_bg" src={Photo.sect8_review_bg} alt="" />
                                        <div className="about8_review_overlay"></div>
                                        <div className="about8_review_inner">
                                            <div className="about8_review_user">
                                                <img className="about8_review_avatar" src={Photo.sect8_avatar} alt="" />
                                                <div className="about8_review_user_info">
                                                    <p className="about8_review_name">Илья М.</p>
                                                    <p className="about8_review_status">Знаток города 2 уровня</p>
                                                </div>
                                            </div>
                                            <div className="about8_review_rating">
                                                <div className="about8_review_stars">
                                                    <img src={Photo.sect8_star} alt="" />
                                                    <img src={Photo.sect8_star} alt="" />
                                                    <img src={Photo.sect8_star} alt="" />
                                                    <img src={Photo.sect8_star} alt="" />
                                                    <img src={Photo.sect8_star} alt="" />
                                                </div>
                                                <p className="about8_review_date">23 сентября 2020</p>
                                            </div>
                                            <p className="about8_review_text">
                                                Магазин очень понравился, быстро обслужили, персонал хорошо знает свой товар, вежливо и грамотно консультирует, ассортимент внушительный, а если чего нет сейчас в наличии, то можно без проблем заказать на сайте, так что всем рекомендую!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about8_card">
                                        <img className="about8_card_img" src={Photo.sect8_photo3} alt="" />
                                    </div>
                                    <div className="about8_card">
                                        <img className="about8_card_img" src={Photo.sect8_photo4} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about8_row">
                        <div className="about8_track about8_track_left">
                            {[1, 2].map((loop) => (
                                <div className="about8_group" key={loop}>
                                    <div className="about8_card">
                                        <img className="about8_card_img" src={Photo.sect8_photo4} alt="" />
                                    </div>
                                    <div className="about8_card">
                                        <img className="about8_card_img" src={Photo.sect8_photo5} alt="" />
                                    </div>
                                    <div className="about8_card">
                                        <img className="about8_card_img" src={Photo.sect8_photo6} alt="" />
                                    </div>
                                    <div className="about8_card">
                                        <img className="about8_card_img" src={Photo.sect8_photo7} alt="" />
                                    </div>
                                    <div className="about8_card">
                                        <img className="about8_card_img" src={Photo.sect8_photo8} alt="" />
                                    </div>
                                    <div className="about8_card">
                                        <img className="about8_card_img" src={Photo.sect8_photo3} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
