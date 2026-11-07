import { Photo } from "../../../photo.js"
import "./Test_sect3.scss"

const popularScooters = [
    {
        id: 1,
        title: "Kugoo Kirin M4",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        badge: "ХИТ",
        badgeType: "hit",
        hasArrows: true
    },
    {
        id: 2,
        title: "Kugoo Kirin M4",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        badge: "Новинка",
        badgeType: "new",
        hasArrows: false
    },
    {
        id: 3,
        title: "Kugoo Kirin M4",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        badge: "ХИТ",
        badgeType: "hit",
        hasArrows: false
    },
    {
        id: 4,
        title: "Kugoo Kirin M4",
        battery: "2000 mAh",
        power: "1,2 л.с.",
        speed: "60 км/ч",
        time: "5 часов",
        oldPrice: "39 900 ₽",
        price: "29 900 ₽",
        badge: "Новинка",
        badgeType: "new",
        hasArrows: false
    }
]

export default function Hero_sect12() {
    return (
        <section className="sect12">
            <div className="sect12_spacer_top"></div>
            <div className="sect12_all">
                <div className="sect12_header">
                    <p className="sect12_title">ЧАСТО ПОКУПАЮТ</p>
                </div>
                <div className="sect12_cards_row">
                    {popularScooters.map((item) => (
                        <div className="sect12_card" key={item.id}>
                            <div className="sect12_card_top">
                                <div className="sect12_top_bar">
                                    <div className={item.badgeType === "hit" ? "sect12_badge_hit" : "sect12_badge_new"}>
                                        <p>{item.badge}</p>
                                    </div>
                                    <div className="sect12_compare_btn">
                                        <img src={Photo.sect2_compare} alt="" />
                                    </div>
                                </div>
                                <div className="sect12_scooter_box">
                                    {item.hasArrows ? (
                                        <div className="sect12_arrow_btn">
                                            <img src={Photo.sect2_arrow_left} alt="" />
                                        </div>
                                    ) : (
                                        <div className="sect12_arrow_placeholder"></div>
                                    )}
                                    {item.hasArrows ? (
                                        <div className="sect12_arrow_btn">
                                            <img src={Photo.sect2_arrow_right} alt="" />
                                        </div>
                                    ) : (
                                        <div className="sect12_arrow_placeholder"></div>
                                    )}
                                </div>
                            </div>

                            <div className="sect12_card_bottom">
                                <div className="sect12_card_bottom_inner">
                                    <p className="sect12_card_name">{item.title}</p>
                                    <div className="sect12_specs_grid">
                                        <div className="sect12_spec_item">
                                            <img src={Photo.sect2_battery} alt="" />
                                            <p>{item.battery}</p>
                                        </div>
                                        <div className="sect12_spec_item">
                                            <img src={Photo.sect2_power} alt="" />
                                            <p>{item.power}</p>
                                        </div>
                                        <div className="sect12_spec_item">
                                            <img src={Photo.sect2_speed} alt="" />
                                            <p>{item.speed}</p>
                                        </div>
                                        <div className="sect12_spec_item">
                                            <img src={Photo.sect2_timer} alt="" />
                                            <p>{item.time}</p>
                                        </div>
                                    </div>

                                    <div className="sect12_price_row">
                                        <div className="sect12_price_box">
                                            <p className="sect12_old_price">{item.oldPrice}</p>
                                            <p className="sect12_new_price">{item.price}</p>
                                        </div>
                                        <div className="sect12_actions">
                                            <div className="sect12_action_btn">
                                                <img src={Photo.sect2_cart} alt="" />
                                            </div>
                                            <div className="sect12_action_btn">
                                                <img src={Photo.sect2_heart} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <button className="sect12_buy_btn" type="button">
                                        Купить в 1 клик
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sect12_spacer_bottom"></div>
        </section>
    )
}
