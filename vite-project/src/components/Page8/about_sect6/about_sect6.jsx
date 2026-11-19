import { Photo } from "../../../photo.js"
import "./about_sect6.scss"

export default function About_sect6() {
    return (
        <section className="about6">
            <div className="about6_all">
                <img className="about6_img" src={Photo.sect7_banner} alt="Видео о компании" />
                <button type="button" className="about6_play_btn" aria-label="Смотреть видео">
                    <div className="about6_play_icon">
                        <img src={Photo.sect7_play} alt="" />
                    </div>
                </button>
            </div>
        </section>
    )
}
