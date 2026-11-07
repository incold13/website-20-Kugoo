import { Photo } from "../../../photo.js"
import "./Serv_sect5.scss"

export default function Serv_sect5() {
    return (
        <section className="serv5">
            <div className="serv5_spacer_top"></div>
            <div className="serv5_all">
                <div className="serv5_content">
                    <div className="serv5_video_box">
                        <img className="serv5_video_img" src={Photo.serv5_video} alt="" />
                        <div className="serv5_play_btn">
                            <img className="serv5_play_icon" src={Photo.serv5_play} alt="" />
                        </div>
                    </div>

                    <div className="serv5_info">
                        <div className="serv5_titles">
                            <h2 className="serv5_title">
                                СДЕЛАЕМ ГИДРОИЗОЛЯЦИЮ<br />
                                ЭЛЕКТРОСАМОКАТА
                            </h2>
                            <p className="serv5_subtitle">
                                которая позволит вам кататься в любую погоду
                            </p>
                        </div>

                        <p className="serv5_desc">
                            Гидроизоляция — это защита от проникновения воды. Электросамокат изнутри покрывается специальным веществом, которое предотвращает попадание любой влаги.
                        </p>

                        <div className="serv5_benefits_block">
                            <p className="serv5_benefits_title">Что дает гидроизоляция:</p>
                            <div className="serv5_benefits_list">
                                <div className="serv5_benefit_item">
                                    <img className="serv5_check_icon" src={Photo.serv5_check} alt="" />
                                    <p className="serv5_benefit_text">
                                        Возможность выезжать в дождь или после дождя
                                    </p>
                                </div>

                                <div className="serv5_benefit_item">
                                    <img className="serv5_check_icon" src={Photo.serv5_check} alt="" />
                                    <p className="serv5_benefit_text">
                                        Можно ездить в любое время года
                                    </p>
                                </div>

                                <div className="serv5_benefit_item">
                                    <img className="serv5_check_icon" src={Photo.serv5_check} alt="" />
                                    <p className="serv5_benefit_text">
                                        Защита от влаги, пыли и грязи продлит срок беспроблемного использования.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="serv5_link_text">
                            Подробнее про гидроизоляцию прочитайте в <a href="#" className="serv5_article_link">нашей статье</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="serv5_spacer_bottom"></div>
        </section>
    )
}