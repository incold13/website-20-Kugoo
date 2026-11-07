import { Photo } from "../../../photo.js"
import "./Serv_sect6.scss"

export default function Serv_sect6() {
    return (
        <section className="serv6">
            <div className="serv6_spacer_top"></div>
            <div className="serv6_all">
                <div className="serv6_content">
                    <div className="serv6_info">
                        <div className="serv6_titles">
                            <h2 className="serv6_title">
                                ПРОДЛИМ СРОК СЛУЖБЫ<br />
                                ВАШЕГО САМОКАТА В 2 РАЗА
                            </h2>
                            <p className="serv6_subtitle">
                                благодаря настройкам от специалистов с опытом 7+ лет
                            </p>
                        </div>

                        <p className="serv6_desc">
                            Перед продажей каждый покупатель может заказать у нас дополнительную услугу — настройка самоката. Для разных моделей Kugoo настройка может отличаться.
                        </p>

                        <div className="serv6_tuning_block">
                            <p className="serv6_tuning_title">Что входит в настройку:</p>
                            <div className="serv6_tuning_list">
                                <div className="serv6_tuning_item">
                                    <div className="serv6_check_wrap">
                                        <img src={Photo.serv5_check} alt="" />
                                    </div>
                                    <p className="serv6_tuning_text">
                                        Регулировка натяжения тормозного троса
                                    </p>
                                </div>

                                <div className="serv6_tuning_item">
                                    <div className="serv6_check_wrap">
                                        <img src={Photo.serv5_check} alt="" />
                                    </div>
                                    <p className="serv6_tuning_text">
                                        Регулировка положения тормозной ручки
                                    </p>
                                </div>

                                <div className="serv6_tuning_item">
                                    <div className="serv6_check_wrap">
                                        <img src={Photo.serv5_check} alt="" />
                                    </div>
                                    <p className="serv6_tuning_text">
                                        Регулировка тормозных механизмов
                                    </p>
                                </div>

                                <div className="serv6_tuning_item">
                                    <div className="serv6_check_wrap">
                                        <img src={Photo.serv5_check} alt="" />
                                    </div>
                                    <p className="serv6_tuning_text">
                                        Протяжка всех соединений
                                    </p>
                                </div>

                                <div className="serv6_tuning_item">
                                    <div className="serv6_check_wrap">
                                        <img src={Photo.serv5_check} alt="" />
                                    </div>
                                    <p className="serv6_tuning_text">
                                        И еще более 35 работ.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="serv6_link_text">
                            Подробнее про настройку прочитайте в <a href="#" className="serv6_article_link">нашей статье</a>
                        </p>
                    </div>

                    <div className="serv6_image_box">
                        <img className="serv6_scooter_img" src={Photo.serv6_scooter} alt="" />
                    </div>
                </div>
            </div>
            <div className="serv6_spacer_bottom"></div>
        </section>
    )
}