import "./product_sect5.scss"
import { Photo } from "../../../photo.js"

export default function Product_sect5() {
    return (
        <section className="prod5">
            <div className="prod5_all">
                <div className="prod5_card prod5_card_1">
                    <div className="prod5_card_content">
                        <div className="prod5_card_text_top">
                            <h3 className="prod5_card_title">
                                ХОТИТЕ ПРОВЕРИТЬ
                                <br />
                                ТОВАР ПЕРЕД
                                <br />
                                ПОКУПКОЙ?
                            </h3>
                            <p className="prod5_card_desc">
                                Продемонстрируем нужный товар онлайн или в магазине
                            </p>
                        </div>
                        <a className="prod5_card_link" href="#">
                            <span>Подробнее</span>
                            <img src={Photo.promo_arrow} alt="" />
                        </a>
                    </div>
                </div>

                <div className="prod5_card prod5_card_2">
                    <div className="prod5_card_content">
                        <div className="prod5_card_text_top">
                            <h3 className="prod5_card_title">
                                НАШЛИ KUGOO
                                <br />
                                JILONG ДЕШЕВЛЕ?
                            </h3>
                            <p className="prod5_card_desc">
                                Сообщите нам в каком магазине цена ниже, а мы сделаем вам крутое спецпредложение!
                            </p>
                        </div>
                        <a className="prod5_card_link" href="#">
                            <span>Да, нашли дешевле</span>
                            <img src={Photo.promo_arrow} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
