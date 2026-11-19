import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./delivery_sect4.scss"

export default function Delivery_sect4() {
    const [phone, setPhone] = useState("")
    const [agreed, setAgreed] = useState(true)

    return (
        <section className="deliv4">
            <div className="deliv4_banner">
                <div className="deliv4_inner">
                    <div className="deliv4_content">
                        <h2 className="deliv4_title">ОСТАЛИСЬ ВОПРОСЫ?</h2>

                        <p className="deliv4_subtitle">
                            Наши консультанты рассчитают сроки и стоимость доставки, ответят на
                            вопросы, касающиеся выбора и приобретения продуктов Kugoo.
                        </p>

                        <div className="deliv4_form_group">
                            <form className="deliv4_form" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    className="deliv4_input"
                                    type="tel"
                                    placeholder="+7 (___) __ - __ - __"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <button className="deliv4_btn" type="submit">
                                    Проконсультироваться
                                </button>
                            </form>

                            <div className="deliv4_agree" onClick={() => setAgreed(!agreed)}>
                                <div className={`deliv4_checkbox ${agreed ? "deliv4_checked" : ""}`}>
                                    {agreed && <span>✓</span>}
                                </div>
                                <p className="deliv4_agree_text">
                                    Нажимая на кнопку, вы соглашаетесь на обработку<br />
                                    персональных данных и{" "}
                                    <a
                                        href="#"
                                        className="deliv4_link"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        политикой конфиденциальности
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="deliv4_woman_box">
                        <img className="deliv4_woman_img" src={Photo.deliv4_woman} alt="Консультант Kugoo" />
                    </div>
                </div>
            </div>
        </section>
    )
}
