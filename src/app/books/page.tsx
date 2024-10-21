import './books.scss';
// import BooksImageSearch from '@/assets/images/books-image-search.jpg';
import BooksImageMore from '@/assets/images/books-image-more.jpg';
import Image from 'next/image';

import Input from '@/components/UI/input/Input';
import Button from '@/components/UI/button/Button';
import BookItem from './BookItem/BookItem';

const Books = () => {
    return (
        <main className="books">
            <section className="books__section">
                <Image
                    src={BooksImageMore}
                    alt="Фон книг с лестницой"
                    className="books__image"
                />
                <div className="backdrop"></div>
                <div className="books__search">
                    <div className="books__container flex align-center justify-center gap-10 container">
                        <Input />
                        <Button />
                    </div>
                </div>
                {/* <div className="backdrop"></div> */}
                <div className="books__list container">
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                </div>
            </section>
        </main>
    );
};

export default Books;
