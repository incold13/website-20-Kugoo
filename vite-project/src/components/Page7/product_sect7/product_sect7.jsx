import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./product_sect7.scss"

const questions = [
    {
        id: 1,
        title: "ДЛЯ КОГО ВЫБИРАЕТЕ\nЭЛЕКТРОСАМОКАТ?",
        options: [
            "Для взрослого",
            "Для ребенка",
            "Для человека в возрасте",
            "Будет кататься и взрослый, и ребенок",
        ],
    },
    {
        id: 2,
        title: "КАКАЯ ДАЛЬНОСТЬ ХОДА\nВАМ НЕОБХОДИМА?",
        options: [
            "До 20 км",
            "От 20 до 40 км",
            "От 40 до 60 км",
            "Более 60 км",
        ],
    },
    {
        id: 3,
        title: "ПО КАКОМУ ПОКРЫТИЮ\nПЛАНИРУЕТЕ ЕЗДИТЬ?",
        options: [
            "Только ровный асфальт",
            "Асфальт и городская плитка",
            "Грунтовые дороги и парки",
            "Бездорожье и пересеченная местность",
        ],
    },
    {
        id: 4,
        title: "ВАЖЕН ЛИ ВЕС\nЭЛЕКТРОСАМОКАТА?",
        options: [
            "Да, нужен легкий (до 15 кг)",
            "Средний вес (15 – 25 кг)",
            "Тяжелый и мощный (от 25 кг)",
            "Вес не имеет значения",
        ],
    },
    {
        id: 5,
        title: "В КАКОЙ БЮДЖЕТ\nПЛАНИРУЕТЕ УЛОЖИТЬСЯ?",
        options: [
            "До 30 000 ₽",
            "От 30 000 до 50 000 ₽",
            "От 50 000 до 80 000 ₽",
            "Более 80 000 ₽",
        ],
    },
]

export default function Product_sect7() {
    const [currentStep, setCurrentStep] = useState(0)
    const [answers, setAnswers] = useState({
        0: 0,
        1: null,
        2: null,
        3: null,
        4: null,
    })

    const currentQ = questions[currentStep]
    const progressPercent = Math.round((currentStep / questions.length) * 100)

    const handleSelectOption = (optIndex) => {
        setAnswers((prev) => ({ ...prev, [currentStep]: optIndex }))
    }

    const handleNext = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep((prev) => prev + 1)
        }
    }

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1)
        }
    }

    return (
        <section className="prod7">
            <div className="prod7_all">
                <div className="prod7_header">
                    <h2 className="prod7_title">
                        ПРОЙДИТЕ ТЕСТ ИЗ 5 ВОПРОСОВ И ПОЛУЧИТЕ
                        <br />
                        ПОДБОРКУ ТОП-3 ЭЛЕКТРОСАМОКАТА
                        <br />
                        ПО ВАШИМ ПАРАМЕТРАМ
                    </h2>
                    <p className="prod7_subtitle">Бонусом вы получите</p>
                </div>

                <div className="prod7_bonuses">
                    <div className="prod7_bonus_card">
                        <div className="prod7_bonus_inner">
                            <div className="prod7_bonus_icon_box">
                                <img src={Photo.product_sect7_bonus1} alt="" />
                            </div>
                            <span className="prod7_bonus_text">
                                Чек-лист «ТОП-5 городских электросамокатов 2021 г.»
                            </span>
                        </div>
                    </div>

                    <div className="prod7_bonus_card">
                        <div className="prod7_bonus_inner">
                            <div className="prod7_bonus_icon_box">
                                <img src={Photo.product_sect7_bonus2} alt="" />
                            </div>
                            <span className="prod7_bonus_text">
                                Инструкция «Как правильно подготовить самокат к первой поездке. 7 советов эксперта»
                            </span>
                        </div>
                    </div>
                </div>

                <div className="prod7_quiz_card">
                    <div className="prod7_quiz_left">
                        <div className="prod7_quiz_left_inner">
                            <div className="prod7_quiz_hint">
                                <img src={Photo.product_sect7_icon} alt="" />
                                <span>
                                    Пройдите тест и получите подборку 3 моделей электросамокатов, которые вам подходят
                                </span>
                            </div>

                            <h3 className="prod7_question_title">
                                {currentQ.title.split("\n").map((line, idx) => (
                                    <span key={idx}>
                                        {line}
                                        {idx === 0 && <br />}
                                    </span>
                                ))}
                            </h3>

                            <div className="prod7_options_grid">
                                {currentQ.options.map((opt, idx) => {
                                    const isSelected = answers[currentStep] === idx
                                    return (
                                        <div
                                            key={idx}
                                            className={`prod7_option ${isSelected ? "prod7_option_active" : ""}`}
                                            onClick={() => handleSelectOption(idx)}
                                        >
                                            <div className="prod7_option_inner">
                                                <div className="prod7_radio">
                                                    {isSelected && <div className="prod7_radio_dot"></div>}
                                                </div>
                                                <span className="prod7_option_label">{opt}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="prod7_nav_row">
                                <div className="prod7_progress_block">
                                    <span className="prod7_progress_label">
                                        Готово: {progressPercent}%
                                    </span>
                                    <div className="prod7_progress_track">
                                        <div
                                            className="prod7_progress_bar"
                                            style={{
                                                width: `${Math.max(progressPercent, 12)}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="prod7_buttons">
                                    <button
                                        type="button"
                                        className="prod7_btn_prev"
                                        onClick={handlePrev}
                                        disabled={currentStep === 0}
                                    >
                                        ←
                                    </button>
                                    <button
                                        type="button"
                                        className="prod7_btn_next"
                                        onClick={handleNext}
                                    >
                                        <span>Далее</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prod7_quiz_right">
                        <div className="prod7_quiz_right_inner">
                            <div className="prod7_manager_block">
                                <div className="prod7_manager_avatar">
                                    <img src={Photo.product_sect7_manager} alt="Петр Алексеев" />
                                </div>
                                <div className="prod7_manager_info">
                                    <h4 className="prod7_manager_name">Петр Алексеев</h4>
                                    <p className="prod7_manager_role">Менеджер</p>
                                </div>
                            </div>

                            <div className="prod7_orange_cards">
                                <div className="prod7_orange_card">
                                    <div className="prod7_orange_inner">
                                        <div className="prod7_orange_icon_box">
                                            <img src={Photo.product_sect7_orange1} alt="" />
                                        </div>
                                        <span className="prod7_orange_text">
                                            Топ-5 городских электросамокатов 2021 г.
                                        </span>
                                    </div>
                                </div>

                                <div className="prod7_orange_card">
                                    <div className="prod7_orange_inner">
                                        <div className="prod7_orange_icon_box">
                                            <img src={Photo.product_sect7_orange2} alt="" />
                                        </div>
                                        <span className="prod7_orange_text">
                                            7 советов эксперта по подготовке самоката к первой поездке
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
