import { Photo } from "../../../photo.js"
import "./Coop_sect6.scss"

export default function Coop_sect6() {
    return (
        <section className="coop6">
            <div className="coop6_spacer_top"></div>
            <div className="coop6_all">
                <div className="coop6_header">
                    <h2 className="coop6_title">
                        ПОКУПАЙТЕ ТОВАР ТОГДА, КОГДА ПОЛУЧИТЕ<br />
                        НА НЕГО ЗАКАЗ И ОПЛАТУ ОТ СВОЕГО КЛИЕНТА
                    </h2>
                    <p className="coop6_subtitle">
                        За 4 года разработали удобную схему дропшиппинга
                    </p>
                </div>

                <div className="coop6_scheme">
                    <div className="coop6_row">
                        <div className="coop6_step">
                            <div className="coop6_circle">
                                <img src={Photo.coop6_step1} alt="" />
                            </div>
                            <p className="coop6_label">Покупатель</p>
                        </div>

                        <img className="coop6_arrow_h" src={Photo.coop6_arrow_r} alt="" />

                        <div className="coop6_step">
                            <div className="coop6_circle">
                                <img src={Photo.coop6_step2} alt="" />
                            </div>
                            <p className="coop6_label">Делает заказ</p>
                        </div>

                        <img className="coop6_arrow_h" src={Photo.coop6_arrow_r} alt="" />

                        <div className="coop6_step">
                            <div className="coop6_circle">
                                <img src={Photo.coop6_step3} alt="" />
                            </div>
                            <p className="coop6_label">Оплачивает вам</p>
                        </div>

                        <img className="coop6_arrow_h" src={Photo.coop6_arrow_r} alt="" />

                        <div className="coop6_step">
                            <div className="coop6_circle">
                                <img src={Photo.coop6_step4} alt="" />
                            </div>
                            <p className="coop6_label">Продавец (Вы)</p>
                        </div>
                    </div>

                    <div className="coop6_vertical_arrows">
                        <img className="coop6_arrow_v" src={Photo.coop6_arrow_u} alt="" />
                        <img className="coop6_arrow_v" src={Photo.coop6_arrow_d} alt="" />
                    </div>

                    <div className="coop6_row">
                        <div className="coop6_step">
                            <div className="coop6_circle">
                                <img src={Photo.coop6_step5} alt="" />
                            </div>
                            <p className="coop6_label">Отправка покупателю</p>
                        </div>

                        <img className="coop6_arrow_h" src={Photo.coop6_arrow_l} alt="" />

                        <div className="coop6_step">
                            <div className="coop6_circle">
                                <img src={Photo.coop6_step6} alt="" />
                            </div>
                            <p className="coop6_label">Товар</p>
                        </div>

                        <img className="coop6_arrow_h" src={Photo.coop6_arrow_l} alt="" />

                        <div className="coop6_step">
                            <div className="coop6_circle">
                                <img src={Photo.coop6_step7} alt="" />
                            </div>
                            <p className="coop6_label">
                                Поставщик (Мы)<br />
                                обрабатывает заказ
                            </p>
                        </div>

                        <img className="coop6_arrow_h" src={Photo.coop6_arrow_l} alt="" />

                        <div className="coop6_step">
                            <div className="coop6_circle">
                                <img src={Photo.coop6_step8} alt="" />
                            </div>
                            <p className="coop6_label">
                                Заказывает товар<br />
                                на адрес покупателя
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="coop6_spacer_bottom"></div>
        </section>
    )
}