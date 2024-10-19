import './page.scss';
import Link from 'next/link';
import Image from 'next/image';
import BooksImageOne from '@/assets/images/books-image-one.jpg';
import BooksImageTwo from '@/assets/images/books-image-two.jpg';
import BooksImageThree from '@/assets/images/books-image-three.jpg';

export default function Home() {
    return (
        <main className="main">
            <section className="main__section">
                <div className="main__content container">
                    <article className="main__about">
                        <h1>Web Of books</h1>
                        <p className="main__description">
                            Добро пожаловать на наш сервис обмена книг! Здесь вы
                            можете находить, обменивать и делиться любимыми
                            книгами с другими читателями.
                        </p>
                        <Link href="#" className="main__link">
                            Обмен
                        </Link>
                    </article>
                </div>
                <Image
                    src={BooksImageOne}
                    alt="Картинка книг"
                    className="main__image-one"
                />
                <div className="main__backdrop"></div>
            </section>
            <section className="main__section-two">
                <article className="main__article">
                    <Image
                        src={BooksImageTwo}
                        alt="Картинка книг"
                        className="main__article-image border-bottom-rr"
                    />
                    <div className="main__article-text">
                        <h2>Что мы хотим ?</h2>
                        <p className="main__description">
                            Мы создали этот сервис, чтобы вдохновить как можно
                            больше людей на чтение. В современном мире книги
                            играют важную роль, и мы верим, что обмен
                            литературой может помочь каждому найти что-то
                            особенное.
                        </p>
                    </div>
                </article>
            </section>
            <section className="main__section-two">
                <article className="main__article">
                    <div className="main__article-text">
                        <h2>Почему важно читать ?</h2>
                        <ul className="main__list">
                            <li className="main__item">
                                - Чтение стимулирует умственную активность,
                                улучшает критическое мышление и помогает
                                развивать аналитические навыки.
                            </li>
                            <li className="main__item">
                                - Регулярное чтение тренирует внимание и
                                помогает сосредотачиваться на задаче.
                            </li>
                            <li className="main__item">
                                - Чтение художественной литературы помогает
                                лучше понимать эмоции и переживания других
                                людей, развивая способность к сопереживанию.
                            </li>
                            <li className="main__item">
                                - Погружение в книгу позволяет отвлечься от
                                повседневных забот и снять напряжение.
                            </li>
                            <li className="main__item">
                                - Книги открывают новые миры, культуры и идеи,
                                позволяя нам увидеть мир с разных точек зрения.
                            </li>
                        </ul>
                    </div>
                    <Image
                        src={BooksImageTwo}
                        alt="Картинка книг"
                        className="main__article-image border-top-lr"
                    />
                </article>
            </section>
            <section className="main__section-two">
                <Image
                    src={BooksImageThree}
                    alt="Картинка книг"
                    className="main__image-two"
                />
            </section>
        </main>
    );
}
