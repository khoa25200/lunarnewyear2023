import classNames from 'classnames/bind';
import styles from './HappyNewYearTextEffect.module.scss';
import TextAnimation from 'react-text-animations';
// import images from '~/assets/images';
const cx = classNames.bind(styles);
function HappyNewYearTextEffect() {
    return (
        <div className={cx('new-year-text')}>
            <TextAnimation.Slide
                target="Merciful"
                text={['Gracious', 'Peace', 'Knowing']}
                cname="textAnimation"
                id="textAnimation__slide"
                animation={{
                    duration: 1000,
                    delay: 2000,
                    timingFunction: 'ease-out',
                }}
                loop={false}
            >
                Allah is The Merciful
            </TextAnimation.Slide>
        </div>
    );
}

export default HappyNewYearTextEffect;
