import { useState } from "react"
import "./about_sect9.scss"
import { Photo } from "../../../photo.js"

const videoList = [
    { id: 1, image: Photo.sect9_video1, title: "Крутой и городской? Обзор Kugoo XS Plus" },
    { id: 2, image: Photo.sect9_video2, title: "Крутой и городской? Обзор Kugoo XS Plus" },
    { id: 3, image: Photo.sect9_video3, title: "Крутой и городской? Обзор Kugoo XS Plus" },
    { id: 4, image: Photo.sect9_video4, title: "Крутой и городской? Обзор Kugoo XS Plus" },
    { id: 5, image: Photo.sect9_video5, title: "Крутой и городской? Обзор Kugoo XS Plus" },
]

export default function About_sect9() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % videoList.length)
    }

    const handleSelect = (idx) => {
        setCurrentIndex(idx)
    }

    return (
        <section className="about9">
            <div className="about9_all">
                <div className="about9_header">
                    <div className="about9_header_left">
                        <p className="about9_title">ВИДЕООБЗОРЫ</p>
                        <p className="about9_desc">
                            Узнайте больше о самокатах Kugoo и посмотрите сравнительные обзоры разных моделей на нашем YouTube-канале.
                        </p>
                    </div>
                    <a className="about9_link" href="#">
                        <span>Смотреть все видеообзоры</span>
                        <img src={Photo.promo_arrow} alt="" />
                    </a>
                </div>

                <div className="about9_slider">
                    <button className="about9_btn_next" onClick={handleNext} aria-label="Следующее видео">
                        <img src={Photo.sect9_arrow_next} alt="" />
                    </button>

                    <div 
                        className="about9_track"
                        style={{
                            transform: `translateX(calc(11.46vw - ${currentIndex * 22}vw))`
                        }}
                    >
                        {videoList.map((item, index) => {
                            const isActive = index === currentIndex
                            return (
                                <div 
                                    key={item.id}
                                    className={`about9_card ${isActive ? "about9_card_active" : ""}`}
                                    onClick={() => handleSelect(index)}
                                >
                                    <div className="about9_card_img_box">
                                        <img className="about9_card_img" src={item.image} alt="" />
                                        <div className="about9_play_btn">
                                            <div className="about9_play_icon">
                                                <img src={Photo.sect7_play} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="about9_card_title">{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
