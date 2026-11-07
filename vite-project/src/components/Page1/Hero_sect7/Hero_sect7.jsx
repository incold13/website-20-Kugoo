import "./Hero_sect7.scss"
import { Photo } from "../../../photo.js"

export default function Hero_sect7() {
    return (
        <>
            <section className="sect7">
                <div className="sect7_all">
                    <img className="sect7_img" src={Photo.sect7_banner} alt="" />
                    <button className="sect7_play_btn">
                        <div className="sect7_play_icon">
                            <img src={Photo.sect7_play} alt="" />
                        </div>
                    </button>
                </div>
            </section>
        </>
    )
}
