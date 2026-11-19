import { Photo } from "../../../photo.js"
import "./delivery_sect3.scss"

const features = [
    "Узнавайте первыми об акциях и спецпредложениях",
    "Получите доступ к секретным распродажам и полезной информации",
    "Держите наши контакты всегда под рукой"
]

export default function Delivery_sect3() {
    return (
        <section className="deliv3">
            <div className="deliv3_banner">
                <div className="deliv3_inner">
                    <div className="deliv3_content">
                        <h2 className="deliv3_title">
                            ОТСЛЕЖИВАЙТЕ СВОИ ЗАКАЗЫ<br />
                            В ФИРМЕННОМ ПРИЛОЖЕНИИ<br />
                            KUGOO-RUSSIA
                        </h2>

                        <div className="deliv3_features">
                            {features.map((text, idx) => (
                                <div className="deliv3_feature_item" key={idx}>
                                    <div className="deliv3_check_icon">
                                        <svg width="1.25vw" height="1.25vw" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10.5" stroke="#FFFFFF" strokeWidth="1.5" />
                                            <path d="M7.5 12L10.5 15L16.5 9" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="deliv3_feature_text">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="deliv3_apps_row">
                            <a href="#" className="deliv3_app_btn" onClick={(e) => e.preventDefault()}>
                                <img src={Photo.googleplay} alt="Доступно на Google Play" />
                            </a>
                            <a href="#" className="deliv3_app_btn" onClick={(e) => e.preventDefault()}>
                                <img src={Photo.appstore} alt="Загрузите в App Store" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
