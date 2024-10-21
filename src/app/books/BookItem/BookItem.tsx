'use client';
import Link from 'next/link';
import './BookItem.scss';
import Image from 'next/image';
import BookImageTest from '@/assets/images/book-image-test.jpg';

const BookItem = () => {
    return (
        <article className="book-item">
            <Link href={'#'} className="book-item__link">
                <Image
                    src={BookImageTest}
                    alt="book"
                    className="book-item__image"
                />
                <div className="book-item__content">
                    <h2 className="book-item__title">Lorem ipsum</h2>
                    <p className="book-item__subname">Автор</p>
                    <p className="book-item__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </Link>
        </article>
    );
};

export default BookItem;
