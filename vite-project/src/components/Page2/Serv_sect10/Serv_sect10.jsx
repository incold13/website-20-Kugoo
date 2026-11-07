import { Photo } from "../../../photo.js"
import "./Serv_sect10.scss"

export default function Serv_sect10() {
    return (
        <section className="serv10">
            <div className="serv10_spacer_top"></div>
            <div className="serv10_all">
                <div className="serv10_header">
                    <h2 className="serv10_title">
                        ПОСМОТРИТЕ<br />
                        НА ПРОЦЕСС РАБОТЫ
                    </h2>

                    <div className="serv10_stat_badge">
                        <div className="serv10_badge_icon_box">
                            <img className="serv10_badge_icon" src={Photo.process_tools} alt="" />
                        </div>
                        <div className="serv10_badge_info">
                            <p className="serv10_badge_sub">В среднем</p>
                            <p className="serv10_badge_main">350 доработок</p>
                            <p className="serv10_badge_desc">специалисты выполняют за 1 месяц</p>
                        </div>
                    </div>
                </div>

                <div className="serv10_gallery">
                    <div className="serv10_rows">
                        <div className="serv10_photo_card">
                            <img className="serv10_img" src={Photo.process_img1} alt="" />
                        </div>
                        <div className="serv10_photo_card1">
                            <img className="serv10_img" src={Photo.process_img2} alt="" />
                        </div>
                        <div className="serv10_photo_card">
                            <img className="serv10_img" src={Photo.process_img3} alt="" />
                        </div>
                    </div>
                    <div className="serv10_rows">
                        <div className="serv10_photo_card3">
                            <img className="serv10_img" src={Photo.process_img4} alt="" />
                        </div>
                        <div className="serv10_photo_card2">
                            <img className="serv10_img" src={Photo.process_img5} alt="" />
                        </div>
                        <div className="serv10_photo_card3">
                            <img className="serv10_img" src={Photo.process_img6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="serv10_spacer_bottom"></div>
        </section>
    )
}