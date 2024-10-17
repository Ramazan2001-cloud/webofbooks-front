'use client';
import './HeaderSection.scss';

const HeaderSection = () => {
    return (
        <header className="header">
            <div>LOGO</div>
            <ul className="header__menu">
                <li className="header__item">Обо мне</li>
                <li className="header__item">Книги</li>
                <li className="header__item">Обмен</li>
            </ul>
        </header>
    );
};

export default HeaderSection;
