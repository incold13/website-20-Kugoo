import { Photo } from "../../../photo.js"
import "./Serv_sect4.scss"

export default function Serv_sect4() {
    return (
        <section className="serv4">
            <div className="serv4_spacer_top"></div>
            <div className="serv4_all">
                <div className="serv4_banner">
                    <div className="serv4_content">
                        <div className="serv4_left">
                            <div className="serv4_screen_wrap">
                                <img className="serv4_screen_img" src={Photo.serv4_screen} alt="" />
                                <div className="serv4_zoom_badge">
                                    <img src={Photo.serv4_zoom} />
                                </div>
                            </div>
                        </div>

                        <div className="serv4_right">
                            <div className="serv4_badge">
                                <p>Услуга</p>
                            </div>

                            <h2 className="serv4_title">
                                ОПРЕДЕЛИМ ПРИЧИНУ<br />
                                НЕИСПРАВНОСТИ УДАЛЕННО<br />
                                ИЛИ НА ДИАГНОСТИКЕ!
                            </h2>

                            <button className="serv4_btn" type="button">
                                Записаться на диагностику
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="serv4_spacer_bottom"></div>
        </section>
    )
}