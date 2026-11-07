import { Photo } from "../../../photo.js"
import "./Test_sect1.scss"

export default function Test_sect1() {
    return (
        <section className="test1">
            <div className="test1_spacer_top"></div>
            
            <div className="test1_breadcrumbs_wrap">
                <div className="test1_breadcrumbs_spacer"></div>
                <div className="test1_breadcrumbs">
                    <div className="test1_home_box">
                        <img src={Photo.test1_home} alt="" />
                    </div>
                    <a href="#" className="test1_bc_link">Главная</a>
                    <span className="test1_bc_slash">/</span>
                    <span className="test1_bc_current">Тест-драйв</span>
                </div>
            </div>

            <div className="test1_spacer_middle"></div>

            <div className="test1_all">
                <div className="test1_banner">
                    <div className="test1_spacer_left"></div>
                    <div className="test1_content">
                        <div className="test1_address_row">
                            <div className="test1_pin_box">
                                <img src={Photo.test1_pin} alt="" />
                            </div>
                            <span className="test1_address_street">Восточно-Кругликовская улица, 86</span>
                            <span className="test1_address_time">Вт - Сб 10:00 - 20:00</span>
                        </div>

                        <div className="test1_titles">
                            <h1 className="test1_title">
                                ЗАПИШИТЕСЬ НА БЕСПЛАТНЫЙ<br />
                                ТЕСТ-ДРАЙВ ЭЛЕКТРОСАМОКАТОВ
                            </h1>
                            <p className="test1_subtitle">
                                в Москве без ограничения по времени
                            </p>
                        </div>

                        <div className="test1_features">
                            <div className="test1_feat_item">
                                <div className="test1_feat_icon_box">
                                    <img src={Photo.test1_scooter} alt="" />
                                </div>
                                <p className="test1_feat_text">
                                    Поймете, какая<br />
                                    модель вам подходит
                                </p>
                            </div>

                            <div className="test1_feat_item">
                                <div className="test1_feat_icon_box">
                                    <img src={Photo.test1_lightning} alt="" />
                                </div>
                                <p className="test1_feat_text">
                                    Проверите лучшие<br />
                                    самокаты в деле
                                </p>
                            </div>
                        </div>

                        <button className="test1_btn" type="button">
                            Записаться
                        </button>
                    </div>
                </div>
            </div>

            <div className="test1_spacer_bottom"></div>
        </section>
    )
}