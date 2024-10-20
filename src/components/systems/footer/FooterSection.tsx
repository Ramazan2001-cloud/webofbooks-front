import Link from 'next/link';
import './FooterSection.scss';
const FooterSection = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <nav>
                    <h2 className="footer__title">Социальные сети</h2>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href={'#'} className="footer__link">
                                instagram
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href={'#'} className="footer__link">
                                telegram
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href={'#'} className="footer__link">
                                whatsapp
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h2 className="footer__title">Контактная информация</h2>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href={'#'} className="footer__link">
                                sterlingedvard@gmail.com
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href={'#'} className="footer__link">
                                +7 747 440 37 63
                            </a>
                        </li>
                    </ul>
                </nav>
                <Link href={'/'} className="footer__logo">
                    <i className="footer__icon"></i>
                    <span className="footer__logo-text">Web Of books</span>
                </Link>
            </div>
        </footer>
    );
};

export default FooterSection;
