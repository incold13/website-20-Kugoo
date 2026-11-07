import "./Catalog_sect2.scss"
import { Photo } from "../../../photo.js"

const categories = [
    { id: 1, image: Photo.cat_vacuum, title: "Робот-пылесоссы" },
    { id: 2, image: Photo.cat_bike, title: "Электровелосипеды" },
    { id: 3, image: Photo.cat_scale, title: "Весы" },
    { id: 4, image: Photo.cat_vacuum, title: "Робот-пылесоссы" },
    { id: 5, image: Photo.cat_scale, title: "Весы" },
    { id: 6, image: Photo.cat_vacuum, title: "Робот-пылесоссы" },
    { id: 7, image: Photo.cat_bike, title: "Электровелосипеды" },
    { id: 8, image: Photo.cat_scale, title: "Весы" },
]

export default function Catalog_sect2() {
    return (
        <>
            <section className="sect4">
                <div className="sect4_all">
                    <div className="sect4_grid">
                        {categories.map(item => (
                            <div className="sect4_card" key={item.id}>
                                <img className="sect4_card_img" src={item.image} alt="" />
                                <div className="sect4_card_overlay">
                                    <p className="sect4_card_title">{item.title}</p>
                                    <p className="sect4_card_price">от 29 900 ₽</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}