import classNames from 'classnames/bind';
import styles from './Text2023.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Text2023() {
    return (
        <div className={cx('text2023')}>
            <img src={images.svg2023_21} alt="error-img" />
            {/* <img src={images.svg2023_0} alt="error-img" /> */}
            <img src={images.svg2023_22} alt="error-img" />
            <img src={images.svg2023_3} alt="error-img" />
            <img className={cx('trangtri')} src={images.trangtri2023} alt="error-img" />
        </div>
    );
}

export default Text2023;
