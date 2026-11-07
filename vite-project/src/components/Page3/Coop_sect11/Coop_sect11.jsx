import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./Coop_sect11.scss"

const faqData = [
    {
        id: 1,
        question: "Когда происходит отправка заказа?",
        answer: "Отправка заказов осуществляется в течение 1–2 рабочих дней с момента подтверждения и оплаты заказа со склада в Москве или ближайшего регионального хаба."
    },
    {
        id: 2,
        question: "Есть ли гарантия на товары?",
        answer: "Да, на всю оригинальную продукцию Kugoo предоставляется официальная гарантия от производителя и возможность обслуживания в сертифицированных сервисных центрах."
    },
    {
        id: 3,
        question: "Сколько стоит доставка товара до клиента?",
        answer: "Доставка до терминала транспортной компании бесплатная. Межтерминальная перевозка рассчитывается по тарифам выбранной ТК в зависимости от объема партии."
    },
    {
        id: 4,
        question: "Проверяется ли товар перед отправкой?",
        answer: "Да, перед отправкой каждая единица товара и упаковка проходят контроль качества и проверку заводской комплектации."
    },
    {
        id: 5,
        question: "Какими ТК вы отправляете заказы?",
        answer: "Отправляем любыми популярными транспортными компаниями: СДЭК, Деловые Линии, ПЭК, Байкал Сервис, Энергия и другими по согласованию."
    }
]

export default function Coop_sect11() {
    const [openId, setOpenId] = useState(null)

    const toggleOpen = (id) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <section className="coop11">
            <div className="coop11_spacer_top"></div>
            <div className="coop11_all">
                <h2 className="coop11_title">ОТВЕЧАЕМ НА ЧАСТЫЕ ВОПРОСЫ</h2>

                <div className="coop11_list">
                    {faqData.map((item) => {
                        const isOpen = openId === item.id
                        return (
                            <div key={item.id} className="coop11_item">
                                <button
                                    type="button"
                                    className="coop11_question_btn"
                                    onClick={() => toggleOpen(item.id)}>
                                    <span className="coop11_question_text">{item.question}</span>
                                    <div className={`coop11_plus_box ${isOpen ? "coop11_open" : ""}`}>
                                        <img src={Photo.coop11_plus} alt="" />
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="coop11_answer_box">
                                        <p className="coop11_answer_text">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="coop11_spacer_bottom"></div>
        </section>
    )
}