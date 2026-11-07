import "./Catalog_sect3.scss"
import { Photo } from "../../../photo.js"
export default function Catalog_sect3() {
    return (
        <>
            <section className="sect5">
                <div className="sect5_all">
                    <div className="sect5_gap_l"></div>
                    <div className="sect5_photo">
                        <img className="sect5_photo_img" src={Photo.sect5_photo} alt="" />
                        <div className="sect5_card">
                            <div className="sect5_card_top_spacer">
                                <div className="sect5_card_top_row">
                                    <div className="sect5_card_left_spacer"></div>
                                    <div className="sect5_card_texts">
                                        <p className="sect5_card_title">Тест-драйв в Москве</p>
                                        <p className="sect5_card_desc">Оцените все преимущества самокатов лично</p>
                                    </div>
                                </div>
                            </div>
                            <button className="sect5_card_btn">
                                <div className="sect5_card_btn_in">
                                    <p>Подробнее</p>
                                    <img className="sect5_card_btn_arrow" src={Photo.sect5_arrow_white} alt="" />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="sect5_gap_mid"></div>
                    <div className="sect5_text">
                        <p className="sect5_title">Kugoo-Russia — первый официальный дилер Kugoo Kirin в России</p>
                        <p className="sect5_desc">Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                        <div className="sect5_cert">
                            <div className="sect5_cert_top_spacer">
                                <div className="sect5_cert_title_row">
                                    <div className="sect5_cert_left_spacer"></div>
                                    <p className="sect5_cert_title">Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</p>
                                </div>
                                <div className="sect5_cert_gap1"></div>
                                <div className="sect5_cert_list_row">
                                    <div className="sect5_cert_left_spacer"></div>
                                    <ul className="sect5_cert_list">
                                        <li><span className="sect5_cert_dot"></span><p>цены от завода-изготовителя Jilong ;</p></li>
                                        <li><span className="sect5_cert_dot"></span><p>бесплатный тест-драйв самокатов;</p></li>
                                        <li><span className="sect5_cert_dot"></span><p>фирменную гарантию 1 год;</p></li>
                                        <li><span className="sect5_cert_dot"></span><p>ремонт и обслуживание от 1 дня в собственном сервисном центре;</p></li>
                                        <li><span className="sect5_cert_dot"></span><p>более 1 000 запчастей и аксессуаров в наличии</p></li>
                                    </ul>
                                </div>
                                <div className="sect5_cert_gap2"></div>
                                <div className="sect5_cert_link_row">
                                    <div className="sect5_cert_left_spacer"></div>
                                    <a className="sect5_cert_link" href="#">Смотреть сертификат</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}