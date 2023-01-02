import classNames from 'classnames/bind';
import styles from './Landingpage.module.scss';
import images from '~/assets/images';
import FlowerRotate from '~/components/FlowerRotate';
import Rabbit1 from '~/components/Rabbit1';
import SnowBgAnimation from '~/components/SnowBgAnimation';
const cx = classNames.bind(styles);
function Landingpage() {
    return (
        <div className={cx('landing-page', 'wrapper')}>
            <h1> Landing Page</h1>
            <FlowerRotate />
            <Rabbit1 />
            <SnowBgAnimation />
        </div>
    );
}

export default Landingpage;
