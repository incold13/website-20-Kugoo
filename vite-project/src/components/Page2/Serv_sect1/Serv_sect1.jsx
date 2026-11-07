import { Photo } from "../../../photo.js"
import "./Serv_sect1.scss"

export default function Serv_sect1() {
    return (
        <section className="serv1">
            <div className="serv1_spacer_top"></div>
            <div className="serv1_all">
                <div className="serv1_banner">
                    <img className="serv1_bg_img" src={Photo.serv1_banner} alt="" />
                    <div className="serv1_content">
                        <div className="serv1_left">
                            <div className="serv1_titles">
                                <h1 className="serv1_title">
                                    РЕМОНТ И ОБСЛУЖИВАНИЕ<br />
                                    ТОВАРОВ KUGOO KIRIN
                                </h1>
                                <p className="serv1_subtitle">
                                    в фирменных сервисных центрах
                                </p>
                            </div>
                            <div className="serv1_features">
                                <div className="serv1_feature_item">
                                    <div className="serv1_feat_icon_box">
                                        <img src={Photo.map_serv_sect1} />
                                    </div>
                                    <p className="serv1_feat_text">
                                        Сервисные центры в Москве,<br />
                                        Санкт-Петербурге и Краснодаре
                                    </p>
                                </div>
                                <div className="serv1_feature_item">
                                    <div className="serv1_feat_icon_box">
                                        <img src={Photo.security_serv_sect1} />
                                    </div>
                                    <p className="serv1_feat_text">
                                        Гарантия 14 дней<br />
                                        на ремонт
                                    </p>
                                </div>
                                <div className="serv1_feature_item">
                                    <div className="serv1_feat_icon_box">
                                        <img src={Photo.setting_serv_sect} />
                                    </div>
                                    <p className="serv1_feat_text">
                                        Всегда в наличии оригинальные<br />
                                        запчасти от производителя
                                    </p>
                                </div>
                            </div>
                            <button className="serv1_btn" type="button">
                                Записаться
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="serv1_spacer_bottom"></div>
        </section>
    )
}