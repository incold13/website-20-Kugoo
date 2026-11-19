import { useState } from "react"
import { Photo } from "../../../photo.js"
import "./product_sect6.scss"

const itemsBoughtTogether = [
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

const similarProducts = [
    {
        id: 101,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 102,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 103,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 104,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 105,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 106,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 107,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
    {
        id: 108,
        title: "Защитная экипировка «Черепаха»",
        desc: "100% дышащая ткань",
        price: "5 900 ₽",
        badge: "Новинка",
        image: Photo.product_sect6_item,
    },
]

export default function Product_sect6() {
    const [index1, setIndex1] = useState(0)
    const [index2, setIndex2] = useState(0)

    const handleNext1 = () => {
        setIndex1((prev) => (prev + 1) % (itemsBoughtTogether.length - 3))
    }

    const handleNext2 = () => {
        setIndex2((prev) => (prev + 1) % (similarProducts.length - 3))
    }

    const renderCard = (item) => (
        <div key={item.id} className="prod6_card">
            <div className="prod6_card_inner">
                <div className="prod6_card_top">
                    <span className="prod6_badge">{item.badge}</span>
                    <button type="button" className="prod6_compare_btn">
                        <img src={Photo.sect2_compare} alt="" />
                    </button>
                </div>

                <div className="prod6_card_img_box">
                    <img src={item.image} alt={item.title} />
                </div>

                <div className="prod6_card_info">
                    <h4 className="prod6_card_title">{item.title}</h4>
                    <p className="prod6_card_desc">{item.desc}</p>
                </div>

                <div className="prod6_price_row">
                    <span className="prod6_price">{item.price}</span>
                    <div className="prod6_actions">
                        <button type="button" className="prod6_action_btn">
                            <img src={Photo.sect2_cart} alt="" />
                        </button>
                        <button type="button" className="prod6_action_btn">
                            <img src={Photo.sect2_heart} alt="" />
                        </button>
                    </div>
                </div>

                <button type="button" className="prod6_buy_btn">
                    Купить в 1 клик
                </button>
            </div>
        </div>
    )

    return (
        <section className="prod6">
            <div className="prod6_block">
                <div className="prod6_header">
                    <h3 className="prod6_title">С ЭТИМ ТОВАРОМ ПОКУПАЮТ</h3>
                </div>

                <div className="prod6_slider">
                    <button
                        type="button"
                        className="prod6_btn_next"
                        onClick={handleNext1}
                    >
                        <img src={Photo.sect9_arrow_next} alt="Вперед" />
                    </button>

                    <div
                        className="prod6_track"
                        style={{
                            transform: `translateX(calc(11.46vw - ${index1 * 20.3}vw))`,
                        }}
                    >
                        {itemsBoughtTogether.map(renderCard)}
                    </div>
                </div>
            </div>

            <div className="prod6_block">
                <div className="prod6_header">
                    <h3 className="prod6_title">ПОХОЖИЕ ТОВАРЫ</h3>
                </div>

                <div className="prod6_slider">
                    <button
                        type="button"
                        className="prod6_btn_next"
                        onClick={handleNext2}
                    >
                        <img src={Photo.sect9_arrow_next} alt="Вперед" />
                    </button>

                    <div
                        className="prod6_track"
                        style={{
                            transform: `translateX(calc(11.46vw - ${index2 * 20.3}vw))`,
                        }}
                    >
                        {similarProducts.map(renderCard)}
                    </div>
                </div>
            </div>
        </section>
    )
}
