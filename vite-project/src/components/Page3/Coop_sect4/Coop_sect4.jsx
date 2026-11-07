import { useState } from "react"
import "./Coop_sect4.scss"

export default function Coop_sect4() {
    const [phone, setPhone] = useState("")

    return (
        <section className="coop4">
            <div className="coop4_spacer_top"></div>
            <div className="coop4_all">
                <div className="coop4_banner">
                    <div className="coop4_text_box">
                        <p className="coop4_title">
                            ДАВАЙТЕ ОБСУДИМ УСЛОВИЯ СОТРУДНИЧЕСТВА,<br />
                            КОТОРЫЕ ПОДХОДЯТ ИМЕННО ДЛЯ ВАШЕЙ КОМПАНИИ
                        </p>
                    </div>

                    <form className="coop4_form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="coop4_input"
                            type="tel"
                            placeholder="+7 (___) __ - __ - __"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button className="coop4_btn" type="submit">
                            Скачать прайс-лист
                        </button>
                    </form>
                </div>
            </div>
            <div className="coop4_spacer_bottom"></div>
        </section>
    )
}