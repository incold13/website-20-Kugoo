import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./about_sect4.scss"

const teamMembers = [
    {
        id: 1,
        photo: Photo.team_member1,
        name: "Дмитрий Никитенко",
        role: "Руководитель сервисного центра"
    },
    {
        id: 2,
        photo: Photo.team_member2,
        name: "Анастасия Горина",
        role: "Заместитель директора"
    },
    {
        id: 3,
        photo: Photo.team_member3,
        name: "Юлия Кортич",
        role: "Менеджер по продажам"
    },
    {
        id: 4,
        photo: Photo.team_member4,
        name: "Сергей Бойко",
        role: "Мастер по ремонту самокатов"
    },
    {
        id: 5,
        photo: Photo.team_member1,
        name: "Дмитрий Никитенко",
        role: "Руководитель сервисного центра"
    },
    {
        id: 6,
        photo: Photo.team_member2,
        name: "Анастасия Горина",
        role: "Заместитель директора"
    }
]

export default function About_sect4() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1 >= teamMembers.length - 3 ? 0 : prev + 1))
    }

    return (
        <section className="about4">
            <div className="about4_all">
                <div className="about4_header">
                    <h2 className="about4_title">
                        В ШТАТЕ Х СПЕЦИАЛИСТОВ,
                        <br />
                        ГОТОВЫХ ПРИЙТИ НА ПОМОЩЬ
                    </h2>
                </div>

                <div className="about4_top_cards">
                    <div className="about4_top_card">
                        <div className="about4_top_inner">
                            <div className="about4_top_icon_box">
                                <img className="about4_top_icon" src={Photo.team_scooter} alt="" />
                            </div>
                            <p className="about4_top_text">
                                Специалисты сервисного центра <strong>подготавливают самокаты</strong> к отправке вам, <strong>проводят техническое обслуживание, тюнингуют</strong> и при необходимости <strong>ремонтируют их</strong>
                            </p>
                        </div>
                    </div>

                    <div className="about4_top_card">
                        <div className="about4_top_inner">
                            <div className="about4_top_icon_box">
                                <img className="about4_top_icon" src={Photo.team_consultant} alt="" />
                            </div>
                            <p className="about4_top_text">
                                Консультант сервисного центра <strong>сопровождает вас</strong> на протяжении всего времени эксплуатации и <strong>помогает решить возникающие вопросы.</strong>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="about4_slider_wrap">
                    <button className="about4_btn_next" type="button" onClick={handleNext} aria-label="Вперед">
                        <img src={Photo.team_arrow_next} alt="" />
                    </button>

                    <div
                        className="about4_track"
                        style={{ transform: `translateX(-${currentIndex * 19.8}vw)` }}
                    >
                        {teamMembers.map((member, idx) => (
                            <div className="about4_member_card" key={idx}>
                                <div className="about4_member_photo_box">
                                    <img className="about4_member_photo" src={member.photo} alt={member.name} />
                                </div>
                                <div className="about4_member_info">
                                    <h3 className="about4_member_name">{member.name}</h3>
                                    <p className="about4_member_role">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
