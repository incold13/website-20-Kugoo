import { Photo } from "../../../photo.js"
import "./Catalog_sect1.scss"

export default function Catalog_sect1() {
    return (
        <section className="catalog1">
            <div className="catalog1_spacer_top"></div>

            <div className="catalog1_breadcrumbs_wrap">
                <div className="catalog1_breadcrumbs_spacer"></div>
                <div className="catalog1_breadcrumbs">
                    <div className="catalog1_home_box">
                        <img src={Photo.catalog1_home} alt="" />
                    </div>
                    <a href="#" className="catalog1_bc_link">Главная</a>
                    <span className="catalog1_bc_slash">/</span>
                    <span className="catalog1_bc_current">Каталог</span>
                </div>
            </div>

            <div className="catalog1_spacer_middle"></div>
            <div className="catalog1_all">
                <div className="catalog1_banner">
                    <div className="catalog1_content">
                        <h1 className="catalog1_title">
                            КАТАЛОГ ТОВАРОВ
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}