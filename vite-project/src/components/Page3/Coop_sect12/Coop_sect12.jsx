import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./Coop_sect12.scss"

export default function Coop_sect12() {
    const [phone, setPhone] = useState("")
    const [agreed, setAgreed] = useState(true)

    const checkIcon = Photo.serv_cheak || Photo.serv5_check

    return (
        <section className="coop12">
            <div className="coop12_spacer_top"></div>
            <div className="coop12_all">
                <div className="coop12_banner">
                    <div className="coop12_spacer_left"></div>
                    <div className="coop12_content">
                        <div className="coop12_left">
                            <h2 className="coop12_title">
                                ОБСУДИТЕ ИНДИВИДУАЛЬНОЕ<br />
                                КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ<br />
                                С ЛИЧНЫМ МЕНЕДЖЕРОМ
                            </h2>

                            <div className="coop12_list">
                                <div className="coop12_list_item">
                                    <div className="coop12_check_box">
                                        <img src={checkIcon} alt="" />
                                    </div>
                                    <p className="coop12_item_text">Ознакомитесь с актуальным каталогом;</p>
                                </div>

                                <div className="coop12_list_item">
                                    <div className="coop12_check_box">
                                        <img src={checkIcon} alt="" />
                                    </div>
                                    <p className="coop12_item_text">Узнаете, какие категории товаров пользуются наибольшим спросом;</p>
                                </div>

                                <div className="coop12_list_item">
                                    <div className="coop12_check_box">
                                        <img src={checkIcon} alt="" />
                                    </div>
                                    <p className="coop12_item_text">Получите доступ к выгодным ценам на закупку оптом.</p>
                                </div>
                            </div>
                        </div>

                        <div className="coop12_right">
                            <div className="coop12_card_titles">
                                <h3 className="coop12_card_title">
                                    ПОЛУЧИТЕ ПЕРСОНАЛЬНОЕ<br />
                                    КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ
                                </h3>
                                <p className="coop12_card_subtitle">
                                    с учетом ваших условий работы
                                </p>
                            </div>

                            <form className="coop12_form" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    className="coop12_input"
                                    type="tel"
                                    placeholder="+7 (___) __ - __ - __"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />

                                <button className="coop12_btn" type="submit">
                                    Скачать прайс-лист
                                </button>
                            </form>

                            <div className="coop12_agree_row" onClick={() => setAgreed(!agreed)}>
                                <div className="coop12_custom_check">
                                    {agreed && <span>✓</span>}
                                </div>
                                <p className="coop12_agree_text">
                                    Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <a href="#" className="coop12_agree_link">политикой конфиденциальности</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="coop12_spacer_right"></div>
                </div>
            </div>
            <div className="coop12_spacer_bottom"></div>
        </section>
    )
}