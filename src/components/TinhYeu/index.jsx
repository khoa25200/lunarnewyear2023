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
                            Năm mới, anh chỉ chúc em được nhiều sức khỏe thôi. Còn về hạnh phúc và niềm vui, anh mong
                            rằng chính mình sẽ là người mang những điều đó đến với em. Yêu em nhiều! Năm mới đến rồi,
                            một năm qua thật đặc biệt với anh và cả em nữa. Năm mới đến đồng nghĩa với việc anh lại được
                            nối dài năm tháng yêu thương chăm sóc em. Anh chúc em tràn đầy hạnh phúc ngọt ngào hãy gìn
                            giữ và nuôi dưỡng tình yêu của chúng mình em nhé.
                        </p>
                        <div className={cx('fixedContent')}>
                            <h3>Người gửi: Đăng Khoa Nguyễn</h3>
                        </div>
                    </div>
                </div>
     );
}

export default TinhYeu;