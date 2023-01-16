import classNames from 'classnames/bind';
import styles from './SnowBgAnimation.module.scss';
const cx = classNames.bind(styles);
function SnowBgAnimation() {
    return (
        <div className={cx('snowflakes')}>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
            <div className={cx('snowflake')}></div>
        </div>
    );
}

export default SnowBgAnimation;
