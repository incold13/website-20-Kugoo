import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./Serv_sect9.scss"

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

export default function Serv_sect9() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1 >= teamMembers.length - 3 ? 0 : prev + 1))
    }

    return (
        <section className="serv9">
            <div className="serv9_spacer_top"></div>
            <div className="serv9_all">
                <div className="serv9_header">
                    <h2 className="serv9_title">КОМАНДА СЕРВИСНОГО ЦЕНТРА</h2>
                </div>

                <div className="serv9_top_cards">
                    <div className="serv9_top_card">
                        <div className="serv9_top_icon_box">
                            <img className="serv9_top_icon" src={Photo.team_scooter} alt="" />
                        </div>
                        <p className="serv9_top_text">
                            Специалисты сервисного центра <strong>подготавливают самокаты</strong> к отправке вам, <strong>проводят техническое обслуживание, тюнингуют</strong> и при необходимости <strong>ремонтируют их</strong>
                        </p>
                    </div>

                    <div className="serv9_top_card">
                        <div className="serv9_top_icon_box">
                            <img className="serv9_top_icon" src={Photo.team_consultant} alt="" />
                        </div>
                        <p className="serv9_top_text">
                            Консультант сервисного центра <strong>сопровождает вас</strong> на протяжении всего времени эксплуатации и <strong>помогает решить возникающие вопросы.</strong>
                        </p>
                    </div>
                </div>

                <div className="serv9_slider_wrap">
                    <button className="serv9_btn_next" type="button" onClick={handleNext}>
                        <img src={Photo.team_arrow_next} alt="" />
                    </button>

                    <div
                        className="serv9_track"
                        style={{ transform: `translateX(-${currentIndex * 19.8}vw)` }}
                    >
                        {teamMembers.map((member, idx) => (
                            <div className="serv9_member_card" key={idx}>
                                <div className="serv9_member_photo_box">
                                    <img className="serv9_member_photo" src={member.photo} alt={member.name} />
                                </div>
                                <div className="serv9_member_info">
                                    <h3 className="serv9_member_name">{member.name}</h3>
                                    <p className="serv9_member_role">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="serv9_spacer_bottom"></div>
        </section>
    )
}