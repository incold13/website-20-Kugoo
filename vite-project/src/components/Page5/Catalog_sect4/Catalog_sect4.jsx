import { useState } from "react"
import "./Catalog_sect4.scss"
import { Photo } from "../../../photo.js"

const videoList = [
    { id: 1, image: Photo.sect9_video1, title: "Крутой и городской? Обзор Kugoo XS Plus" },
    { id: 2, image: Photo.sect9_video2, title: "Крутой и городской? Обзор Kugoo XS Plus" },
    { id: 3, image: Photo.sect9_video3, title: "Крутой и городской? Обзор Kugoo XS Plus" },
    { id: 4, image: Photo.sect9_video4, title: "Крутой и городской? Обзор Kugoo XS Plus" },
    { id: 5, image: Photo.sect9_video5, title: "Крутой и городской? Обзор Kugoo XS Plus" },
]

export default function Catalog_sect4() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % videoList.length)
    }

    const handleSelect = (idx) => {
        setCurrentIndex(idx)
    }

    return (
        <>
            <section className="sect9">
                <div className="sect9_all">
                    <div className="sect9_header">
                        <div className="sect9_header_left">
                            <p className="sect9_title">ВИДЕООБЗОРЫ</p>
                            <p className="sect9_desc">
                                Узнайте больше о самокатах Kugoo и посмотрите сравнительные обзоры разных моделей на нашем YouTube-канале.
                            </p>
                        </div>
                        <a className="sect9_link" href="#">
                            <span>Смотреть все видеообзоры</span>
                            <img src={Photo.promo_arrow} alt="" />
                        </a>
                    </div>

                    <div className="sect9_slider">
                        <button className="sect9_btn_next" onClick={handleNext}>
                            <img src={Photo.sect9_arrow_next} alt="" />
                        </button>

                        <div 
                            className="sect9_track"
                            style={{
                                transform: `translateX(calc(11.46vw - ${currentIndex * 22}vw))`
                            }}
                        >
                            {videoList.map((item, index) => {
                                const isActive = index === currentIndex
                                return (
                                    <div 
                                        key={item.id}
                                        className={`sect9_card ${isActive ? "sect9_card_active" : ""}`}
                                        onClick={() => handleSelect(index)}
                                    >
                                        <div className="sect9_card_img_box">
                                            <img className="sect9_card_img" src={item.image} alt="" />
                                            <div className="sect9_play_btn">
                                                <div className="sect9_play_icon">
                                                    <img src={Photo.sect7_play} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="sect9_card_title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
