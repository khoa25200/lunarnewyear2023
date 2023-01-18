import classNames from 'classnames/bind';
import styles from './Landingpage.module.scss';
import images from '~/assets/images';
import FlowerRotate from '~/components/FlowerRotate';
import Rabbit1 from '~/components/Rabbit1';
import SnowBgAnimation from '~/components/SnowBgAnimation';
import HappyNewYearTextEffect from '~/components/HappyNewYearTextEffect';
import DustGolden from '~/components/DustGolden';
import Text2023 from '~/components/Text2023';
import Intro from '~/components/Intro';
import Frame from '~/components/Frame/index';
const cx = classNames.bind(styles);
function Landingpage() {
    return (
        <div className={cx('landing-page', 'wrapper')}>
            {/* <img src={images.text2023} alt="" width="300px" /> */}
            {/* <FlowerRotate /> */}
            {/* <Rabbit1 /> */}
            {/* <HappyNewYearTextEffect /> */}
            {/* <DustGolden /> */}
            {/* <Text2023 /> */}
            <Frame />
            <Intro />
            <SnowBgAnimation />
        </div>
    );
}

export default Landingpage;
