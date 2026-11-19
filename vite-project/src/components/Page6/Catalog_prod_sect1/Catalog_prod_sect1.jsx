import { Photo } from "../../../photo.js"
import "./Catalog_prod_sect1.scss"

export default function Catalog_prod_sect1() {
    return (
        <section className="catalog_prod1">
            <div className="catalog_prod1_spacer_top"></div>
            <div className="catalog_prod1_breadcrumbs_wrap">
                <div className="catalog_prod1_breadcrumbs_spacer"></div>
                <div className="catalog_prod1_breadcrumbs">
                    <div className="catalog_prod1_home_box">
                        <img src={Photo.catalog1_home} alt="" />
                    </div>
                    <a href="#" className="catalog_prod1_bc_link">Главная</a>
                    <span className="catalog_prod1_bc_slash">/</span>
                    <a href="#" className="catalog_prod1_bc_link">Каталог</a>
                    <span className="catalog_prod1_bc_slash">/</span>
                    <span className="catalog_prod1_bc_current">Электросамокаты</span>
                </div>
            </div>
            <div className="catalog_prod1_spacer_middle"></div>
            <div className="catalog_prod1_all">
                <div className="catalog_prod1_banner">
                    <div className="catalog_prod1_content">
                        <h1 className="catalog_prod1_title">
                            ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}