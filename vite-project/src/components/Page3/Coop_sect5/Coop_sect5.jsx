import { Photo } from "../../../photo.js"
import "./Coop_sect5.scss"

export default function Coop_sect5() {
    return (
        <section className="coop5">
            <div className="coop5_spacer_top"></div>
            <div className="coop5_all">
                <div className="coop5_header">
                    <h2 className="coop5_title">
                        ДОСТАВЛЯЕМ СО СКЛАДОВ ПО <span>МОСКВЕ,</span><br />
                        <span>КРАСНОДАРУ И МИНСКУ БЕСПЛАТНО,</span> ПО РОССИИ —<br />
                        ЛЮБОЙ ТРАНСПОРТНОЙ КОМПАНИЕЙ НА ВАШ ВЫБОР
                    </h2>
                    <p className="coop5_subtitle">
                        Ежегодно оформляем и доставляем более 1 000 оптовых и розничных заказов.<br />
                        Всегда в наличии на складах весь ассортимент, представленный в каталоге.
                    </p>
                </div>

                <div className="coop5_map_box">
                    <img className="coop5_map_img" src={Photo.coop5_map} alt="Карта доставки" />
                </div>
            </div>
            <div className="coop5_spacer_bottom"></div>
        </section>
    )
}