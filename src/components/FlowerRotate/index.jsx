import classNames from 'classnames/bind';
import styles from './FlowerRotate.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function FlowerRotate() {
    return (
        <div className={cx('flower-rotate')}>
           <img src={images.flower_03} alt="error-img" />
        </div>
    );
}

export default FlowerRotate;
