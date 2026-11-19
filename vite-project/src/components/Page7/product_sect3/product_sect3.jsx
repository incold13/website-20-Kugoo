import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./product_sect3.scss"

export default function Product_sect3() {
    const [phone, setPhone] = useState("")
    const [agreed, setAgreed] = useState(true)

    return (
        <section className="prod3">
            <div className="prod3_banner">
                <div className="prod3_inner">
                    <div className="prod3_img_box">
                        <img src={Photo.product_sect3} alt="Тест-драйв Kugoo Kirin M4" />
                    </div>

                    <div className="prod3_content">
                        <div className="prod3_titles">
                            <h2 className="prod3_title">
                                ЗАПИШИТЕСЬ НА
                                <br />
                                БЕСПЛАТНЫЙ ТЕСТ-ДРАЙВ
                                <br />
                                KUGOO KIRIN M4 В МОСКВЕ
                            </h2>
                            <p className="prod3_subtitle">
                                Оставьте свой номер, менеджер свяжется с вами в течение 5 минут, чтобы уточнить дату и время
                            </p>
                        </div>

                        <div className="prod3_form_group">
                            <form className="prod3_form" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    className="prod3_input"
                                    type="tel"
                                    placeholder="+7 (___) __ - __ - __"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <button className="prod3_btn" type="submit">
                                    Оставить заявку на тест-драйв
                                </button>
                            </form>

                            <div className="prod3_agree" onClick={() => setAgreed(!agreed)}>
                                <div className={`prod3_checkbox ${agreed ? "prod3_checked" : ""}`}>
                                    {agreed && <span>✓</span>}
                                </div>
                                <p className="prod3_agree_text">
                                    Нажимая на кнопку, вы соглашаетесь на обработку
                                    <br />
                                    персональных данных и{" "}
                                    <a
                                        href="#"
                                        className="prod3_link"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        политикой конфиденциальности
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
