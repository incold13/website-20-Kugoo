import { Photo } from "../../../photo.js"
import "./about_sect2.scss"

export default function About_sect2() {
    return (
        <section className="about2">
            <div className="about2_all">
                <div className="about2_left">
                    <h2 className="about2_title">
                        С 2017 Г. РАЗВИВАЕМ ТЕМУ
                        <br />
                        ЭЛЕКТРОТРАНСПОРТА И
                        <br />
                        ОСВЕЩАЕМ ЕГО ЦЕННОСТЬ
                        <br />
                        В СОВРЕМЕННОМ МИРЕ
                    </h2>

                    <div className="about2_block">
                        <h3 className="about2_subtitle">Наша цель</h3>
                        <p className="about2_desc">
                            Предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.
                        </p>
                    </div>

                    <div className="about2_block">
                        <h3 className="about2_subtitle">
                            Специализируемся исключительно на бренде Kugoo, поэтому вы получите:
                        </h3>

                        <ul className="about2_list">
                            <li className="about2_item">
                                <span className="about2_check_icon">
                                    <svg viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="#6F73EE" strokeWidth="1.5" />
                                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#6F73EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="about2_item_text">
                                    <strong>Цены</strong> от завода-изготовителя Jilong ;
                                </span>
                            </li>

                            <li className="about2_item">
                                <span className="about2_check_icon">
                                    <svg viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="#6F73EE" strokeWidth="1.5" />
                                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#6F73EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="about2_item_text">
                                    <strong>Бесплатный тест-драйв</strong> самокатов;
                                </span>
                            </li>

                            <li className="about2_item">
                                <span className="about2_check_icon">
                                    <svg viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="#6F73EE" strokeWidth="1.5" />
                                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#6F73EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="about2_item_text">
                                    Фирменную <strong>гарантию 1 год;</strong>
                                </span>
                            </li>

                            <li className="about2_item">
                                <span className="about2_check_icon">
                                    <svg viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="#6F73EE" strokeWidth="1.5" />
                                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#6F73EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="about2_item_text">
                                    <strong>Ремонт и обслуживание</strong> от 1 дня в собственном сервисном центре
                                </span>
                            </li>

                            <li className="about2_item">
                                <span className="about2_check_icon">
                                    <svg viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="#6F73EE" strokeWidth="1.5" />
                                        <path d="M6 10.5L8.5 13L14 7.5" stroke="#6F73EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="about2_item_text">
                                    <strong>Более 1 000 запчастей</strong> и аксессуаров в наличии.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="about2_right">
                    <div className="about2_cert_box">
                        <img
                            src={Photo.about_sect2_cert}
                            alt="Сертификат"
                            className="about2_cert_img"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
