import { Photo } from "../../../photo.js"
import "./Serv_sect8.scss"

export default function Serv_sect8() {
    return (
        <section className="serv8">
            <div className="serv8_spacer_top"></div>
            <div className="serv8_all">
                <div className="serv8_banner">
                    <div className="serv8_content">
                        <div className="serv8_info">
                            <div className="serv8_titles">
                                <h2 className="serv8_title">
                                    ЗАБЕРЕМ ВАШ САМОКАТ ДЛЯ<br />
                                    РЕМОНТА И ВЕРНЕМ ОБРАТНО
                                </h2>
                                <p className="serv8_subtitle">
                                    Доставка электросамокатов в/из сервисного центра курьером в Москве.
                                </p>
                            </div>

                            <div className="serv8_prices_block">
                                <p className="serv8_prices_title">Что дает гидроизоляция:</p>
                                <div className="serv8_prices_list">
                                    <div className="serv8_price_item">
                                        <div className="serv8_check_wrap">
                                            <img src={Photo.serv5_check} alt="" />
                                        </div>
                                        <p className="serv8_price_text">600 руб. в одну сторону</p>
                                    </div>

                                    <div className="serv8_price_item">
                                        <div className="serv8_check_wrap">
                                            <img src={Photo.serv5_check} alt="" />
                                        </div>
                                        <p className="serv8_price_text">1000 руб. туда-обратно</p>
                                    </div>
                                </div>
                            </div>

                            <button className="serv8_btn" type="button">
                                Заказать доставку
                            </button>
                        </div>
                    </div>

                    <img className="serv8_drone_img" src={Photo.serv8_drone} alt="" />
                </div>
            </div>
            <div className="serv8_spacer_bottom"></div>
        </section>
    )
}