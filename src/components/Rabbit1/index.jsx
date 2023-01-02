import classNames from 'classnames/bind';
import styles from './Rabbit1.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Rabbit1() {
    return (
        <div className={cx('rabbit1')}>
            <img src={images.bodyRabbit1} alt="img-error" />
            <img src={images.earRabbit1} alt="img-error" />
        </div>
    );
}

export default Rabbit1;
