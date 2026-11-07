import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./Test_sect4.scss"

export default function Test_sect4() {
    const [phone, setPhone] = useState("")

    return (
        <section className="test3">
            <div className="test3_spacer_top"></div>
            <div className="test3_all">
                <div className="test3_banner">
                    <div className="test3_spacer_left"></div>
                    <div className="test3_content">
                        <div className="test3_titles">
                            <h2 className="test3_title">
                                НЕТ НУЖНОЙ МОДЕЛИ, КОТОРУЮ<br />
                                ХОТИТЕ ПРОТЕСТИРОВАТЬ?
                            </h2>
                            <p className="test3_subtitle">
                                Оставьте заявку, и менеджер подберет нужный самокат
                            </p>
                        </div>

                        <form className="test3_form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="test3_input"
                                type="tel"
                                placeholder="+7 (___) __ - __ - __"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <button className="test3_btn" type="submit">
                                Оставить заявку на тест-драйв
                            </button>
                        </form>

                        <div className="test3_agree_row">
                            <div className="test3_check_icon">✓</div>
                            <p className="test3_agree_text">
                                Нажимая на кнопку, вы соглашаетесь на обработку<br />
                                персональных данных и <a href="#" className="test3_agree_link">политикой конфиденциальности</a>
                            </p>
                        </div>
                    </div>

                    <div className="test3_woman_box">
                        <img src={Photo.test3_woman} alt="" />
                    </div>
                </div>
            </div>
            <div className="test3_spacer_bottom"></div>
        </section>
    )
}