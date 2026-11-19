import { Link } from "react-router-dom"
import { Photo } from "../../../photo.js"
import "./promo_sect1.scss"

export default function Promo_sect1() {
    return (
        <section className="promo1">
            <div className="promo1_breadcrumbs_wrap">
                <div className="promo1_breadcrumbs">
                    <div className="promo1_home_box">
                        <img src={Photo.catalog1_home} alt="" />
                    </div>
                    <Link to="/" className="promo1_bc_link">
                        Главная
                    </Link>
                    <span className="promo1_bc_slash">/</span>
                    <span className="promo1_bc_current">Акции</span>
                </div>
            </div>

            <div className="promo1_banner">
                <div className="promo1_banner_inner">
                    <div className="promo1_content">
                        <div className="promo1_badges">
                            <span className="promo1_badge promo1_badge_date">До 01.09</span>
                            <span className="promo1_badge promo1_badge_gift">+ 2 подарка</span>
                        </div>
                        <h1 className="promo1_title">
                            ВЫГОДА 2880 RUB ПРИ ПОКУПКЕ<br />
                            KUGOO KIRIN M4 PRO 13 AH
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
