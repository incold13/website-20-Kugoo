import { Photo } from "../../../photo.js"
import "./Coop_sect10.scss"

export default function Coop_sect10() {
    return (
        <section className="coop10">
            <div className="coop10_spacer_top"></div>
            <div className="coop10_all">
                <div className="coop10_left">
                    <h2 className="coop10_title">
                        ОБЩАЕМСЯ С КЛИЕНТАМИ, ЧТОБЫ<br />
                        ЗНАТЬ ПОЖЕЛАНИЯ И ПРЕДЛАГАТЬ<br />
                        ЛУЧШИЙ АССОРТИМЕНТ И СЕРВИС
                    </h2>

                    <p className="coop10_subtitle">
                        И еще приняли активное участие в выставке «Велокульт 2021»
                    </p>

                    <a href="#" className="coop10_link">
                        <span className="coop10_link_text">Смотреть как это было</span>
                        <div className="coop10_arrow_box">
                            <img src={Photo.coop10_arrow} alt="" />
                        </div>
                    </a>
                </div>

                <div className="coop10_right">
                    <div className="coop10_card">
                        <div className="coop10_item coop10_vk">
                            <div className="coop10_item_spacer_left"></div>
                            <div className="coop10_item_content">
                                <div className="coop10_item_left">
                                    <div className="coop10_icon_box">
                                        <img src={Photo.coop10_vk} alt="" />
                                    </div>
                                    <span className="coop10_item_name">Вконтакте</span>
                                </div>
                                <span className="coop10_item_count">3 300</span>
                            </div>
                            <div className="coop10_item_spacer_right"></div>
                        </div>

                        <div className="coop10_item coop10_inst">
                            <div className="coop10_item_spacer_left"></div>
                            <div className="coop10_item_content">
                                <div className="coop10_item_left">
                                    <div className="coop10_icon_box">
                                        <img src={Photo.coop10_inst} alt="" />
                                    </div>
                                    <span className="coop10_item_name">Instagram</span>
                                </div>
                                <span className="coop10_item_count">10 602</span>
                            </div>
                            <div className="coop10_item_spacer_right"></div>
                        </div>

                        <div className="coop10_item coop10_yt">
                            <div className="coop10_item_spacer_left"></div>
                            <div className="coop10_item_content">
                                <div className="coop10_item_left">
                                    <div className="coop10_icon_box">
                                        <img src={Photo.coop10_yt} alt="" />
                                    </div>
                                    <span className="coop10_item_name">YouTube</span>
                                </div>
                                <span className="coop10_item_count">3 603</span>
                            </div>
                            <div className="coop10_item_spacer_right"></div>
                        </div>

                        <div className="coop10_item coop10_tg">
                            <div className="coop10_item_spacer_left"></div>
                            <div className="coop10_item_content">
                                <div className="coop10_item_left">
                                    <div className="coop10_icon_box">
                                        <img src={Photo.coop10_tg} alt="" />
                                    </div>
                                    <span className="coop10_item_name">Telegram</span>
                                </div>
                                <span className="coop10_item_count">432</span>
                            </div>
                            <div className="coop10_item_spacer_right"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="coop10_spacer_bottom"></div>
        </section>
    )
}