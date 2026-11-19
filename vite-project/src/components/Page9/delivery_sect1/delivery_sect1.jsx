import { Link } from "react-router-dom"
import { Photo } from "../../../photo.js"
import "./delivery_sect1.scss"

export default function Delivery_sect1() {
    return (
        <section className="deliv1">
            <div className="deliv1_breadcrumbs_wrap">
                <div className="deliv1_breadcrumbs">
                    <div className="deliv1_home_box">
                        <img src={Photo.catalog1_home} alt="" />
                    </div>
                    <Link to="/" className="deliv1_bc_link">
                        Главная
                    </Link>
                    <span className="deliv1_bc_slash">/</span>
                    <span className="deliv1_bc_current">Доставка и оплата</span>
                </div>
            </div>

            <div className="deliv1_banner">
                <div className="deliv1_inner">
                    <div className="deliv1_content">
                        <h1 className="deliv1_title">
                            ОПЛАТА И ДОСТАВКА ЛЮБЫМИ<br />
                            УДОБНЫМИ СПОСОБАМИ
                        </h1>
                    </div>

                    <div className="deliv1_drone_box">
                        <img className="deliv1_drone_img" src={Photo.serv8_drone} alt="Доставка Kugoo" />
                    </div>
                </div>
            </div>
        </section>
    )
}
