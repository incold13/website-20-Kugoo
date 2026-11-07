import { Photo } from "../../../photo.js"
import "./Serv_sect2.scss"

export default function Serv_sect2() {
    return (
        <section className="serv2">
            <div className="serv2_spacer_top"></div>
            <div className="serv2_all">
                <div className="serv2_header">
                    <h2 className="serv2_title">
                        ПРОВЕДЕМ ДИАГНОСТИКУ<br />
                        И ОТРЕМОНТИРУЕМ ЛЮБУЮ НЕИСПРАВНОСТЬ
                    </h2>
                </div>
                <div className="serv2_main">
                    <div className="serv2_col_left">
                        <div className="serv2_item_left">
                            <h3 className="serv2_item_title">РЕМОНТ ОТ 1 ДНЯ</h3>
                            <p className="serv2_item_desc">
                                Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.
                            </p>
                        </div>
                        <div className="serv2_item_left">
                            <h3 className="serv2_item_title">
                                РЕМОНТИРУЕМ ТОЛЬКО<br />
                                ТО, ЧТО СЛОМАЛОСЬ
                            </h3>
                            <p className="serv2_item_desc">
                                Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.
                            </p>
                        </div>
                        <div className="serv2_item_left">
                            <h3 className="serv2_item_title">ОРИГИНАЛЬНЫЕ ЗАПЧАСТИ</h3>
                            <p className="serv2_item_desc">
                                Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.
                            </p>
                        </div>
                    </div>
                    <div className="serv2_center">
                        <div className="serv2_circle_wrap">
                            <img className="serv2_circle_img" src={Photo.serv2_circle} alt="" />
                            <div className="serv2_play_btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <polygon points="8,5 19,12 8,19" fill="#6F73EE" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="serv2_col_right">
                        <div className="serv2_item_right">
                            <h3 className="serv2_item_title">ГАРАНТИЯ</h3>
                            <p className="serv2_item_desc">
                                14 дней на ремонт
                            </p>
                        </div>
                        <div className="serv2_item_right">
                            <h3 className="serv2_item_title">БЕСПЛАТНЫЙ РЕМОНТ</h3>
                            <p className="serv2_item_desc">
                                в течение 1 года после покупки
                            </p>
                        </div>
                        <div className="serv2_item_right">
                            <h3 className="serv2_item_title">РАСШИРЕННАЯ ГАРАНТИЯ</h3>
                            <p className="serv2_item_desc">
                                до 36 месяцев
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="serv2_spacer_bottom"></div>
        </section>
    )
}