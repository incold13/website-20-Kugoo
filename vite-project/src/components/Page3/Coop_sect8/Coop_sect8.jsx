import { Photo } from "../../../photo.js"
import "./Coop_sect8.scss"

export default function Coop_sect8() {
    return (
        <section className="coop8">
            <div className="coop8_spacer_top"></div>
            <div className="coop8_all">
                <div className="coop8_left">
                    <h2 className="coop8_title">
                        KUGOO — САМЫЙ<br />
                        ПОПУЛЯРНЫЙ БРЕНД<br />
                        ЭЛЕКТРОТРАНСПОРТА<br />
                        В РОССИИ
                    </h2>

                    <div className="coop8_texts">
                        <p className="coop8_text">
                            Количество поисковых запросов от потенциальных клиентов<br />
                            в 2020 г. по сравнению с 2019 г. выросло в 2 раза<br />
                            согласно сервису оценки спроса и популярности.
                        </p>
                        <p className="coop8_text">
                            Kugoo имеет лидирующие позиции среди<br />
                            конкурирующих брендов: спрос на продукцию от завода<br />
                            Jilong выше в несколько раз.
                        </p>
                    </div>
                </div>

                <div className="coop8_right">
                    <div className="coop8_image_box">
                        <img src={Photo.coop8_dashboard} alt="" />
                    </div>
                </div>
            </div>
            <div className="coop8_spacer_bottom"></div>
        </section>
    )
}