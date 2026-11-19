import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./about_sect7.scss"

export default function About_sect7() {
    const [phone, setPhone] = useState("")
    const [agreed, setAgreed] = useState(true)

    return (
        <section className="about7">
            <div className="about7_banner">
                <div className="about7_inner">
                    <div className="about7_img_box">
                        <img src={Photo.about_sect4_bg} alt="Бесплатный тест-драйв" />
                    </div>

                    <div className="about7_content">
                        <div className="about7_titles">
                            <h2 className="about7_title">
                                БЕСПЛАТНЫЙ ТЕСТ-ДРАЙВ<br />
                                И ОБУЧЕНИЕ В МОСКВЕ
                            </h2>
                            <p className="about7_subtitle">
                                Оцените все преимущества самокатов лично
                            </p>
                        </div>

                        <div className="about7_form_group">
                            <form className="about7_form" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    className="about7_input"
                                    type="tel"
                                    placeholder="+7 (___) __ - __ - __"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <button className="about7_btn" type="submit">
                                    Оставить заявку на тест-драйв
                                </button>
                            </form>

                            <div className="about7_agree" onClick={() => setAgreed(!agreed)}>
                                <div className={`about7_checkbox ${agreed ? "about7_checked" : ""}`}>
                                    {agreed && <span>✓</span>}
                                </div>
                                <p className="about7_agree_text">
                                    Нажимая на кнопку, вы соглашаетесь на обработку<br />
                                    персональных данных и{" "}
                                    <a
                                        href="#"
                                        className="about7_link"
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
