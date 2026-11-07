import { Photo } from "../../../photo.js"
import "./Serv_sect12.scss"

export default function Serv_sect12() {
    return (
        <section className="serv12">
            <div className="serv12_spacer_top"></div>
            <div className="serv12_all">
                <div className="serv12_header">
                    <h2 className="serv12_title">АДРЕСА СЕРВИСНЫХ ЦЕНТРОВ</h2>
                </div>

                <div className="serv12_card">
                    <div className="serv12_content">
                        <div className="serv12_col">
                            <h3 className="serv12_city_title">МОСКВА</h3>

                            <div className="serv12_row_item">
                                <div className="serv12_icon_wrap">
                                    <img src={Photo.serv_geo} alt="" />
                                </div>
                                <div className="serv12_item_info">
                                    <p className="serv12_address">Ткацкая улица, 5с16</p>
                                    <p className="serv12_schedule">Пн - Вс 10:00 - 19:00</p>
                                    <a href="#" className="serv12_map_link">Смотреть на карте</a>
                                </div>
                            </div>

                            <div className="serv12_row_item">
                                <div className="serv12_icon_wrap">
                                    <img src={Photo.serv_phone} alt="" />
                                </div>
                                <p className="serv12_phone">+7 (499) 350-76-92</p>
                            </div>

                            <div className="serv12_row_item">
                                <div className="serv12_icon_wrap">
                                    <img src={Photo.serv_info} alt="" />
                                </div>
                                <p className="serv12_note">
                                    При себе иметь паспорт для<br />
                                    прохождения через пропускной пункт
                                </p>
                            </div>
                        </div>

                        <div className="serv12_col">
                            <h3 className="serv12_city_title">САНКТ-ПЕТЕРБУРГ</h3>

                            <div className="serv12_row_item">
                                <div className="serv12_icon_wrap">
                                    <img src={Photo.serv_geo} alt="" />
                                </div>
                                <div className="serv12_item_info">
                                    <p className="serv12_address">Фрунзе улица, 2</p>
                                    <p className="serv12_schedule">Пн - Вс 10:00 - 20:00</p>
                                    <a href="#" className="serv12_map_link">Смотреть на карте</a>
                                </div>
                            </div>

                            <div className="serv12_row_item">
                                <div className="serv12_icon_wrap">
                                    <img src={Photo.serv_phone} alt="" />
                                </div>
                                <p className="serv12_phone">+7 (499) 350-76-92</p>
                            </div>
                        </div>

                        <div className="serv12_col">
                            <h3 className="serv12_city_title">КРАСНОДАР</h3>

                            <div className="serv12_row_item">
                                <div className="serv12_icon_wrap">
                                    <img src={Photo.serv_geo} alt="" />
                                </div>
                                <div className="serv12_item_info">
                                    <p className="serv12_address">Восточно-Кругликовская улица, 86</p>
                                    <p className="serv12_schedule">Вт - Сб 10:00 - 20:00</p>
                                    <a href="#" className="serv12_map_link">Смотреть на карте</a>
                                </div>
                            </div>

                            <div className="serv12_row_item">
                                <div className="serv12_icon_wrap">
                                    <img src={Photo.serv_phone} alt="" />
                                </div>
                                <p className="serv12_phone">+7 (499) 350-76-92</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="serv12_spacer_bottom"></div>
        </section>
    )
}