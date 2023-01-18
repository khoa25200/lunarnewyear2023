import classNames from 'classnames/bind';
import styles from './Intro.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Intro() {
    return (
        <div className={cx('Intro')}>
            <div>
            <div className={cx('box-slider')}>
                    <div className={cx('slider1')}>
                        <img src={images.bgr} alt />
                        <div className={cx('happynewyear')}>
                            <div className={cx('textHappynewyear')}>
                                <div className={cx('box-span')}>
                                    <span />
                                </div>
                                <div className={cx('box-span')}>
                                    <span />
                                </div>
                                <div className={cx('box-span')}>
                                    <span />
                                </div>
                                <div className={cx('box-span')}>
                                    <span />
                                </div>
                            </div>
                        </div>
                        <div className={cx('box-button')}>
                            <div className={cx('button')}>
                                <button>Ấn vào đây nè!</button>
                                <span>
                                    <i className={cx('fa-solid fa-heart')} />
                                </span>
                            </div>
                        </div>
                        <div className={cx('box-slider_img1')}>
                            <div className={cx('slider-img1')}>
                                <img src={images.circular_pattern} alt />
                            </div>
                            <div className={cx('pattern')}>
                                <img src={images.pattern} alt />
                            </div>
                        </div>
                        <div className={cx('circle')}>
                            <span />
                        </div>
                        <div className={cx('box-flower')}>
                            <div className={cx('flower-img')}>
                                <img src={images.flower} alt />
                            </div>
                            <div className={cx('flower-img')}>
                                <img src={images.flower} alt />
                            </div>
                            <div className={cx('flower-img')}>
                                <img src={images.flower1} alt />
                            </div>
                            <div className={cx('flower-img')}>
                                <img src={images.flower1} alt />
                            </div>
                            <div className={cx('flower-img')}>
                                <img src={images.flower2} alt />
                            </div>
                            <div className={cx('flower-img')}>
                                <img src={images.flower2} alt />
                            </div>
                        </div>
                        <div className={cx('box-slider_img2')}>
                            <div className={cx('box-slider-img2')}>
                                <div className={cx('slider-img2')}>
                                    <img src={images.lanterns} alt />
                                </div>
                            </div>
                            <div className={cx('box-slider-img3')}>
                                <div className={cx('slider-img3')}>
                                    <img src={images.lanterns} alt />
                                </div>
                            </div>
                            <div className={cx('box-slider-img4')}>
                                <div className={cx('slider-img4')}>
                                    <img src={images.lanterns} alt />
                                </div>
                            </div>
                            <div className={cx('box-slider-img5')}>
                                <div className={cx('slider-img5')}>
                                    <img src={images.lanterns} alt />
                                </div>
                            </div>
                        </div>
                        <div className={cx('slider-img6')}>
                            <img src={images.cloud_red1} alt />
                            <img src={images.cloud_red2} alt />
                            <img src={images.cloud_red2} alt />
                        </div>
                        {/* <div className={cx('box-lion_dance">
                            <div className={cx('lion_dance1">
                                <img src={images.Lion_dance} alt />
                            </div>
                            <div className={cx('lion_dance2">
                                <img src={images.Lion_dance2} alt />
                            </div>
                        </div> */}
                        <div className={cx('cat')}>
                            <img src={images.cat} alt />
                        </div>
                        <div className={cx('box-number')}>
                            <div className={cx('number2023')}>
                                <div className={cx('number')}>
                                    <span>2</span>
                                </div>
                                <div className={cx('number')}>
                                    <span>0</span>
                                </div>
                                <div className={cx('number')}>
                                    <span>2</span>
                                </div>
                                <div className={cx('number')}>
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {/* <div className={cx('slider2')}>
                        <div className={cx('rhombus')}>
                        <div className={cx('rhombus')}>
                        <div className={cx('rhombus-img')}>
                        <img src={images.truongan} alt />
                        </div>
                        <div className={cx('mail')}>
                            <button>
                                <i className={cx('fa-regular fa-envelope')}>
                            </button>
                            <span className={cx('heart')}>
                                <i className={cx('fa-solid fa-heart')}>
                            </span>
                        </div>
                    </div> */}
                    <div className={cx('slider3')}>
                        <div className={cx('box-content')}>
                            <div className={cx('left')}>
                                <img src={images.bg1} alt />
                                <div className={cx('center')}></div>
                                <div className={cx('lanterns-content')}>
                                    <img src={images.lanterns} alt />
                                </div>
                                <div className={cx('box-big_flowers')}>
                                    <img src={images.big_flower} alt />
                                    <img src={images.big_flower} alt />
                                    <img src={images.big_flower} alt />
                                    <img src={images.big_flower1} alt />
                                    <img src={images.big_flower1} alt />
                                    <img src={images.big_flower2} alt />
                                    <img src={images.big_flower2} alt />
                                    <img src={images.big_flower2} alt />
                                </div>
                                <div className={cx('box-circle_left')}>
                                    <div className={cx('circle_left')}>
                                        <img src={images.circular_pattern} alt />
                                        <div className={cx('text-content')}>
                                            <h2>Happy New</h2>
                                            <h1>Year</h1>
                                            <span>2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('apricot_blossom')}>
                                    <img src={images.apricot_blossom} alt />
                                    <img src={images.apricot_blossom} alt />
                                    <img src={images.apricot_blossom} alt />
                                    <img src={images.apricot_blossom} alt />
                                    <img src={images.apricot_blossom} alt />
                                    <img src={images.apricot_blossom} alt />
                                </div>
                            </div>
                            <div className={cx('right')}>
                                <div className={cx('content')}>
                                    <div className={cx('title')}>
                                        <h1>🧡Gửi em!</h1>
                                    </div>
                                    <p>
                                        Năm mới, anh chỉ chúc em được nhiều sức khỏe thôi. Còn về hạnh phúc và niềm vui,
                                        anh mong rằng chính mình sẽ là người mang những điều đó đến với em. Yêu em
                                        nhiều! Năm mới đến rồi, một năm qua thật đặc biệt với anh và cả em nữa. Năm mới
                                        đến đồng nghĩa với việc anh lại được nối dài năm tháng yêu thương chăm sóc em.
                                        Anh chúc em tràn đầy hạnh phúc ngọt ngào hãy gìn giữ và nuôi dưỡng tình yêu của
                                        chúng mình em nhé.
                                    </p>
                                    <div className={cx('fixedContent')}>
                                        <h3>Người gửi: Đăng Khoa Nguyễn</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <i className={cx('fa-solid fa-xmark')}> */}
                    </div>
                </div>
                {/* <audio id="song">
                    <source src={images.nhac.mp3} type="audio/mp3">
                </audio> */}
            </div>
        </div>
    );
}

export default Intro;