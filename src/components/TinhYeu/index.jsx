import classNames from 'classnames/bind';
import styles from './TinhYeu.module.scss';
const cx = classNames.bind(styles);
function TinhYeu(handleActiveSlide3) {
    return ( 
        <div  className={cx('tinhyeu')} onClick={handleActiveSlide3}>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            <h1>🧡Gửi em!</h1>
                        </div>
                        <p>
                            Năm mới, anh chúc em được nhiều sức khỏe.
                            Còn về hạnh phúc anh chỉ mong rằng sẽ được gặp em sớm hơn vào năm 2023. Mãi yêu vầ mong được cùng em đi khắp thế gian. Gửi em người anh mong chờ.
                        </p>
                        <div className={cx('fixedContent')}>
                            <h3>Người gửi: Đăng Khoa Nguyễn</h3>
                        </div>
                    </div>
                </div>
     );
}

export default TinhYeu;