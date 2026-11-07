import { Photo } from "../../../photo.js"
import "./Coop_sect3.scss"

export default function Coop_sect3() {
    return (
        <section className="coop3">
            <div className="coop3_spacer_top"></div>
            <div className="coop3_all">
                <div className="coop3_left">
                    <div className="coop3_titles">
                        <h2 className="coop3_title">
                            ВЫБИРАЙТЕ ПОПУЛЯРНЫЕ ТОВАРЫ<br />
                            БЕЗ НАЦЕНОК ПОСРЕДНИКОВ
                        </h2>
                        <p className="coop3_subtitle">
                            являясь официальным дилером Kugoo в России
                        </p>
                    </div>

                    <div className="coop3_benefits_block">
                        <p className="coop3_benefits_title">
                            Сотрудничая с нами, вы получите:
                        </p>
                        <div className="coop3_benefits_list">
                            <div className="coop3_benefit_item">
                                <div className="coop3_check_wrap">
                                    <img src={Photo.serv5_check} alt="" />
                                </div>
                                <p className="coop3_benefit_text">
                                    Гарантию на товары 1 месяц и возможность приобрести годовую гарантию
                                </p>
                            </div>

                            <div className="coop3_benefit_item">
                                <div className="coop3_check_wrap">
                                    <img src={Photo.serv5_check} alt="" />
                                </div>
                                <p className="coop3_benefit_text">
                                    Медиаконтент, который можно разместить на своем сайте и соцсетях
                                </p>
                            </div>

                            <div className="coop3_benefit_item">
                                <div className="coop3_check_wrap">
                                    <img src={Photo.serv5_check} alt="" />
                                </div>
                                <p className="coop3_benefit_text">
                                    Удобные способы оплаты — наличный и безналичный расчет
                                </p>
                            </div>

                            <div className="coop3_benefit_item">
                                <div className="coop3_check_wrap">
                                    <img src={Photo.serv5_check} alt="" />
                                </div>
                                <p className="coop3_benefit_text">
                                    Отсутствие демпинга на рынке за счет контролируемой МРЦ
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="coop3_stats_row">
                        <div className="coop3_stat_card">
                            <p className="coop3_stat_val"><span>До</span> 25%</p>
                            <p className="coop3_stat_desc">
                                ваша прибыль с продажи единицы товара Kugoo
                            </p>
                        </div>

                        <div className="coop3_stat_card">
                            <p className="coop3_stat_val"><span>от</span> 3 ШТ.</p>
                            <p className="coop3_stat_desc">
                                минимальная оптовая партия
                            </p>
                        </div>
                    </div>
                </div>

                <div className="coop3_right">
                    <div className="coop3_top_badge">
                        <p className="coop3_badge_val">93%</p>
                        <p className="coop3_badge_text">
                            партнеров становятся постоянными, благодаря нашему подходу
                        </p>
                    </div>

                    <div className="coop3_slider_frame">
                        <img className="coop3_cert_img" src={Photo.coop3_cert} alt="Сертификат" />
                        <button className="coop3_arrow_btn coop3_arrow_left" type="button">
                            <img src={Photo.coop3_arrow_l} alt="" />
                        </button>
                        <button className="coop3_arrow_btn coop3_arrow_right" type="button">
                            <img src={Photo.coop3_arrow_r} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="coop3_spacer_bottom"></div>
        </section>
    )
}