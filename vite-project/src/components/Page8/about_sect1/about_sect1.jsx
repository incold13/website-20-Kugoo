import { Link } from "react-router-dom"
import { Photo } from "../../../photo.js"
import "./about_sect1.scss"

export default function About_sect1() {
    return (
        <section className="about1">
            <div className="about1_breadcrumbs_wrap">
                <div className="about1_breadcrumbs">
                    <div className="about1_home_box">
                        <img src={Photo.catalog1_home} alt="" />
                    </div>
                    <Link to="/" className="about1_bc_link">
                        Главная
                    </Link>
                    <span className="about1_bc_slash">/</span>
                    <span className="about1_bc_current">О магазине</span>
                </div>
            </div>

            <div className="about1_banner">
                <div className="about1_gradient_overlay"></div>

                <div className="about1_banner_inner">
                    <div className="about1_left">
                        <h1 className="about1_title">
                            KUGOO-RUSSIA — ПЕРВЫЙ
                            <br />
                            ОФИЦИАЛЬНЫЙ ДИЛЕР
                            <br />
                            KUGOO KIRIN В РОССИИ
                        </h1>

                        <div className="about1_stats_row">
                            <div className="about1_stat">
                                <span className="about1_stat_label">Работаем с</span>
                                <span className="about1_stat_value">2017 г</span>
                            </div>

                            <div className="about1_stat">
                                <span className="about1_stat_label">
                                    Специалистов
                                    <br />
                                    в штате
                                </span>
                                <span className="about1_stat_value">35</span>
                            </div>

                            <div className="about1_stat">
                                <span className="about1_stat_label">
                                    Клиентов по России
                                    <br />
                                    и странам СНГ
                                </span>
                                <span className="about1_stat_value">2 000</span>
                            </div>
                        </div>
                    </div>

                    <div className="about1_play_wrapper">
                        <div className="about1_play_box">
                            <button type="button" className="about1_play_btn" aria-label="Смотреть видео">
                                <svg width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="#6F73EE">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                            <span className="about1_play_text">
                                Посмотрите
                                <br />
                                видео-знакомство 2 мин
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
