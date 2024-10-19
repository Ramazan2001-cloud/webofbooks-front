'use client';
import './HeaderSection.scss';
import Link from 'next/link';
import { useWindowScroll } from '@uidotdev/usehooks';

const HeaderSection = () => {
    const [{ y }] = useWindowScroll();

    const activeShadow = () => {
        if (y && y > 50) {
            return 'header--active-backdrop';
        }
    };

    return (
        <header className={`header ${activeShadow()}`}>
            <div className="header__container container">
                <Link href="#" className="header__logo">
                    <i className="header__icon"></i>
                    <span className="header__logo-text">Web Of books</span>
                </Link>
                <nav className="header__nav">
                    <ul className="header__menu">
                        <li className="header__item">
                            <Link href="#" className="header__link">
                                Книги
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link href="#" className="header__link">
                                Читатели
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link href="#" className="header__link">
                                Посты
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link href="#" className="header__link">
                                Обмен
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link href="#" className="header__link">
                                Чат
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderSection;
