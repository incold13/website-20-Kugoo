import "./Catalog_prod_sect2.scss"
import { Photo } from "../../../photo.js"

export default function Catalog_prod_sect2() {
    return (
        <section className="cat_prod2">
            <div className="cat_prod2_spacer_top"></div>
            <div className="cat_prod2_all">
                <div className="cat_prod2_banner">
                    <img className="cat_prod2_banner_img" src={Photo.promo_drone} alt="" />
                    <div className="cat_prod2_banner_text">
                        <div className="cat_prod2_badge">Акция</div>
                        <h2 className="cat_prod2_title">
                            ДО 01.09 БЕСПЛАТНАЯ<br />
                            ДОСТАВКА САМОКАТОВ<br />
                            ПО ВСЕЙ РОССИИ
                        </h2>
                        <button className="cat_prod2_btn" type="button">Подробнее</button>
                    </div>
                </div>
            </div>
            <div className="cat_prod2_spacer_bottom"></div>
        </section>
    )
}
