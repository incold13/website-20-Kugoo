import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./product_sect8.scss"

const popularProducts = [
    {
        id: 1,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 2,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 3,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 4,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 5,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 6,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 7,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 8,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
]

export default function Product_sect8() {
    const [index, setIndex] = useState(0)

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % (popularProducts.length - 3))
    }

    const renderCard = (item) => (
        <div key={item.id} className="prod8_card">
            <div className="prod8_card_inner">
                <div className="prod8_card_top">
                    <span className="prod8_badge">{item.badge}</span>
                    <button type="button" className="prod8_compare_btn">
                        <img src={Photo.sect2_compare} alt="" />
                    </button>
                </div>

                <div className="prod8_card_img_box">
                    <img src={item.image} alt={item.title} />
                </div>

                <div className="prod8_card_info">
                    <h4 className="prod8_card_title">{item.title}</h4>
                    <p className="prod8_card_desc">{item.desc}</p>
                </div>

                <div className="prod8_price_row">
                    <span className="prod8_price">{item.price}</span>
                    <div className="prod8_actions">
                        <button type="button" className="prod8_action_btn">
                            <img src={Photo.sect2_cart} alt="" />
                        </button>
                        <button type="button" className="prod8_action_btn">
                            <img src={Photo.sect2_heart} alt="" />
                        </button>
                    </div>
                </div>

                <button type="button" className="prod8_buy_btn">
                    Купить в 1 клик
                </button>
            </div>
        </div>
    )

    return (
        <section className="prod8">
            <div className="prod8_block">
                <div className="prod8_header">
                    <h3 className="prod8_title">ПОПУЛЯРНЫЕ ТОВАРЫ</h3>
                </div>

                <div className="prod8_slider">
                    <button
                        type="button"
                        className="prod8_btn_next"
                        onClick={handleNext}
                    >
                        <img src={Photo.sect9_arrow_next} alt="Вперед" />
                    </button>

                    <div
                        className="prod8_track"
                        style={{
                            transform: `translateX(calc(11.46vw - ${index * 20.3}vw))`,
                        }}
                    >
                        {popularProducts.map(renderCard)}
                    </div>
                </div>
            </div>
        </section>
    )
}
