import { useState } from "react"
import "./about_sect10.scss"
import { Photo } from "../../../photo.js"

const articles = [
    {
        id: 1,
        image: Photo.sect10_blog1,
        title: "Как правильно заряжать электросамокат",
        desc: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: 53
    },
    {
        id: 2,
        image: Photo.sect10_blog2,
        title: "Как правильно заряжать электросамокат",
        desc: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: 53
    },
    {
        id: 3,
        image: Photo.sect10_blog3,
        title: "Как правильно заряжать электросамокат",
        desc: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: 53
    },
    {
        id: 4,
        image: Photo.sect10_blog4,
        title: "Как правильно заряжать электросамокат",
        desc: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: 53
    },
    {
        id: 5,
        image: Photo.sect10_blog1,
        title: "Как правильно заряжать электросамокат",
        desc: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: 53
    },
    {
        id: 6,
        image: Photo.sect10_blog2,
        title: "Как правильно заряжать электросамокат",
        desc: "Один из первых вопросов, который волнует после покупки электросамоката.",
        date: "01.09.2021",
        views: 53
    }
]

export default function About_sect10() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % (articles.length - 2))
    }

    return (
        <section className="about10">
            <div className="about10_all">
                <div className="about10_header">
                    <p className="about10_title">НОВЫЕ СТАТЬИ В БЛОГЕ</p>
                </div>
                <div className="about10_slider">
                    <button className="about10_btn_next" onClick={handleNext} aria-label="Следующие статьи">
                        <img src={Photo.sect9_arrow_next} alt="" />
                    </button>

                    <div 
                        className="about10_track"
                        style={{
                            transform: `translateX(calc(11.46vw - ${currentIndex * 26.38}vw))`
                        }}
                    >
                        {articles.map((item) => (
                            <div className="about10_card" key={item.id}>
                                <div className="about10_card_img_box">
                                    <img className="about10_card_img" src={item.image} alt="" />
                                </div>
                                <div className="about10_card_content_box">
                                    <div className="about10_card_info">
                                        <div className="about10_card_texts">
                                            <p className="about10_card_title">{item.title}</p>
                                            <p className="about10_card_desc">{item.desc}</p>
                                        </div>
                                        <div className="about10_card_meta">
                                            <div className="about10_meta_item">
                                                <img src={Photo.sect10_calendar} alt="" />
                                                <p>{item.date}</p>
                                            </div>
                                            <div className="about10_meta_item">
                                                <img src={Photo.sect10_eye} alt="" />
                                                <p>{item.views}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
