'use client';
import { UserOutlined } from '@ant-design/icons';
import './HeaderSection.scss';
import Link from 'next/link';

const HeaderSection = () => {
    return (
        <header className="header container">
            <Link href={'##'} className="header__user">
                <UserOutlined style={{ fontSize: '40px' }} />
            </Link>
            <ul className="header__menu">
                <li className="header__item">Обо мне</li>
                <li className="header__item">Книги</li>
                <li className="header__item">Обмен</li>
            </ul>
        </header>
    );
};

export default HeaderSection;
