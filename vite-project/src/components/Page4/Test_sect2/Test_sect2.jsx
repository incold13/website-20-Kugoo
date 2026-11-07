import { Photo } from "../../../photo.js"
import "./Test_sect2.scss"

export default function Test_sect2() {
    const checkIcon = Photo.serv_cheak || Photo.serv5_check

    return (
        <section className="test2">
            <div className="test2_spacer_top"></div>
            <div className="test2_all">
                <div className="test2_row">
                    <div className="test2_info">
                        <h2 className="test2_title">
                            ОПРЕДЕЛИТЕ МАКСИМАЛЬНО<br />
                            ПОДХОДЯЩУЮ ВАМ МОДЕЛЬ<br />
                            НЕ ТЕОРЕТИЧЕСКИ, А НА ПРАКТИКЕ
                        </h2>

                        <p className="test2_subtitle">
                            Тест-драйв поможет:
                        </p>

                        <div className="test2_list">
                            <div className="test2_list_item">
                                <div className="test2_check_box">
                                    <img src={checkIcon} alt="" />
                                </div>
                                <p className="test2_item_text">Понять подходит ли вам конкретная модель;</p>
                            </div>

                            <div className="test2_list_item">
                                <div className="test2_check_box">
                                    <img src={checkIcon} alt="" />
                                </div>
                                <p className="test2_item_text">Испытать самокат в «реальной жизни»;</p>
                            </div>

                            <div className="test2_list_item">
                                <div className="test2_check_box">
                                    <img src={checkIcon} alt="" />
                                </div>
                                <p className="test2_item_text">Оценить удобство хранения и эксплуатации;</p>
                            </div>

                            <div className="test2_list_item">
                                <div className="test2_check_box">
                                    <img src={checkIcon} alt="" />
                                </div>
                                <p className="test2_item_text">Узнать реальные характеристики и возможности модели.</p>
                            </div>
                        </div>
                    </div>

                    <div className="test2_image_box">
                        <img src={Photo.test2_img1} alt="" />
                    </div>
                </div>

                <div className="test2_row1">
                    <div className="test2_image_box1">
                        <img src={Photo.test2_img2} alt="" />
                    </div>

                    <div className="test2_info">
                        <h2 className="test2_title">
                            НАУЧИМ ПРАВИЛЬНОЙ<br />
                            И БЕЗОПАСНОЙ ЕЗДЕ В ГОРОДЕ<br />
                            ВАС ИЛИ ВАШЕГО РЕБЕНКА
                        </h2>

                        <p className="test2_subtitle">
                            На обучении специалист расскажет:
                        </p>

                        <div className="test2_list">
                            <div className="test2_list_item">
                                <div className="test2_check_box">
                                    <img src={checkIcon} alt="" />
                                </div>
                                <p className="test2_item_text">Как подготовить самокат к поездке;</p>
                            </div>

                            <div className="test2_list_item">
                                <div className="test2_check_box">
                                    <img src={checkIcon} alt="" />
                                </div>
                                <p className="test2_item_text">Как «завести» самокат;</p>
                            </div>

                            <div className="test2_list_item">
                                <div className="test2_check_box">
                                    <img src={checkIcon} alt="" />
                                </div>
                                <p className="test2_item_text">Как вести себя во время поездки и обезопасить себя и окружающих;</p>
                            </div>

                            <div className="test2_list_item">
                                <div className="test2_check_box">
                                    <img src={checkIcon} alt="" />
                                </div>
                                <p className="test2_item_text">Как складывать и раскладывать электросамокат;</p>
                            </div>

                            <div className="test2_list_item">
                                <div className="test2_check_box">
                                    <img src={checkIcon} alt="" />
                                </div>
                                <p className="test2_item_text">Как ухаживать за своим девайсом.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="test2_spacer_bottom"></div>
        </section>
    )
}