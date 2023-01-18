import classNames from 'classnames/bind';
import styles from './Frame.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Frame() {
    return (
        <div className={cx('Frame')}>
            <div className={cx('box-rim')}>
                            {/* <div className={cx('rim1')}>
                                <img src={images.rim1} alt />
                            </div>
                            <div className={cx('rim2')}>
                                <img src={images.rim1} alt />
                            </div> */}
                        </div>
                        <div className={cx('box-texture_clouds')}>
                            <div className={cx('texture_clouds1')}>
                                <img src={images.texture_clouds} alt />
                            </div>
                            <div className={cx('texture_clouds1')}>
                                <img src={images.texture_clouds} alt />
                            </div>
                            <div className={cx('texture_clouds1')}>
                                <img src={images.texture_clouds} alt />
                            </div>
                            <div className={cx('texture_clouds1')}>
                                <img src={images.texture_clouds} alt />
                            </div>
                            <div className={cx('texture_clouds1')}>
                                <img src={images.texture_clouds} alt />
                            </div>
                        </div>
                        <div className={cx('box-big_clouds')}>
                            <div className={cx('big_clouds1')}>
                                <img src={images.big_clouds1} alt />
                            </div>
                            <div className={cx('big_clouds2')}>
                                <img src={images.big_clouds2} alt />
                            </div>
                            <div className={cx('big_clouds3')}>
                                <img src={images.big_clouds3} alt />
                            </div>
                        </div>
        </div>
    );
}

export default Frame;
