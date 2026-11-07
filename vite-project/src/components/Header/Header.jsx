import "./Header.scss"
import {Photo} from "../../photo.js"
import { Link } from "react-router-dom"
export default function Header() {

  return (
    <>
        <header className="hdr">
                <div className="hdr_top">
                    <div className="hdr_top_in">
                        <div className="hdr_top_left">
                            <Link to="/servise"><a className="hdr_top_link">Сервис</a></Link>
                            <Link to="/coop"><a className="hdr_top_link" href="#">Сотрудничество</a></Link>
                            <a className="hdr_top_link" href="#">Заказать звонок</a>
                            <div className="hdr_msgs">
                                <img className="hdr_msg" src={Photo.h_viber} alt="" />
                                <img className="hdr_msg" src={Photo.h_whatsapp} alt="" />
                                <img className="hdr_msg" src={Photo.h_telegram} alt="" />
                            </div>
                        </div>
                        <div className="hdr_top_right">
                            <a className="hdr_phone" href="tel:+78005055461">+7 (800) 505-54-61</a>
                            <img className="hdr_plus" src={Photo.h_plus} alt="" />
                        </div>
                    </div>
                </div>
                <div className="hdr_main">
                    <div className="hdr_main_in">
                        <div className="hdr_a">
                            <Link to="/"><img className="hdr_logo" src={Photo.h_logo} alt="" /></Link>
                            <Link to="/catalog">
                                <button className="hdr_catalog">
                                    <img className="hdr_catalog_icon" src={Photo.h_menu} alt="" />
                                    <p className="hdr_catalog_text">Каталог</p>
                                </button>
                            </Link>
                        </div>
                        <div className="hdr_b">
                            <div className="hdr_search">
                                <div className="hdr_search_left">
                                    <div className="hdr_select">
                                        <p className="hdr_select_text">Везде</p>
                                        <div className="hdr_select_caret"></div>
                                    </div>
                                </div>
                                <input className="hdr_input" type="text" placeholder="Искать самокат KUGO" />
                                <button className="hdr_search_btn">
                                    <img className="hdr_search_icon" src={Photo.h_search} alt="" />
                                </button>
                            </div>
                            <div className="hdr_tools">
                                <img className="hdr_tool_compare" src={Photo.h_compare} alt="" />
                                <img className="hdr_tool_heart" src={Photo.h_heart} alt="" />
                                <div className="hdr_cart">
                                    <img className="hdr_cart_icon" src={Photo.h_basket} alt="" />
                                    <p className="hdr_cart_text">Корзина</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hdr_nav">
                    <div className="hdr_nav_in">
                        <a className="hdr_nav_link" href="#">О магазине</a>
                        <div className="hdr_nav_item">
                            <a className="hdr_nav_link" href="#">Доставка и оплата</a>
                            <p className="hdr_badge">Доступна рассрочка</p>
                        </div>
                        <Link to="/test"><a className="hdr_nav_link" href="#">Тест-драйв</a></Link>
                        <a className="hdr_nav_link" href="#">Блог</a>
                        <a className="hdr_nav_link" href="#">Контакты</a>
                        <div className="hdr_nav_item">
                            <a className="hdr_nav_link" href="#">Акции</a>
                            <p className="hdr_badge_round">%</p>
                        </div>
                    </div>
                </div>
            </header>
    </>
  )
}
