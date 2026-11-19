import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./about_sect5.scss"

const cityPhotos = {
    moscow: [
        Photo.process_img1,
        Photo.process_img2,
        Photo.process_img3,
        Photo.process_img4,
        Photo.process_img5,
        Photo.process_img6,
    ],
    spb: [
        Photo.process_img4,
        Photo.process_img5,
        Photo.process_img6,
        Photo.process_img1,
        Photo.process_img2,
        Photo.process_img3,
    ],
    krasnodar: [
        Photo.process_img3,
        Photo.process_img2,
        Photo.process_img1,
        Photo.process_img6,
        Photo.process_img5,
        Photo.process_img4,
    ],
}

export default function About_sect5() {
    const [city, setCity] = useState("moscow")

    return (
        <section className="about5">
            <div className="about5_all">
                <div className="about5_header">
                    <h2 className="about5_title">
                        ОФИЦИАЛЬНЫЕ МАГАЗИНЫ
                        <br />
                        И СЕРВИСНЫЕ ЦЕНТРЫ
                    </h2>

                    <div className="about5_tabs">
                        <button
                            type="button"
                            className={`about5_tab about5_tab_sm ${city === "moscow" ? "about5_tab_active" : ""}`}
                            onClick={() => setCity("moscow")}
                        >
                            Москва
                        </button>
                        <button
                            type="button"
                            className={`about5_tab about5_tab_md ${city === "spb" ? "about5_tab_active" : ""}`}
                            onClick={() => setCity("spb")}
                        >
                            Санкт-Петербург
                        </button>
                        <button
                            type="button"
                            className={`about5_tab about5_tab_md ${city === "krasnodar" ? "about5_tab_active" : ""}`}
                            onClick={() => setCity("krasnodar")}
                        >
                            Краснодар
                        </button>
                    </div>
                </div>

                <div className="about5_grid">
                    {cityPhotos[city].map((src, idx) => (
                        <div className="about5_photo_card" key={idx}>
                            <img src={src} alt="Сервисный центр Kugoo" className="about5_img" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
