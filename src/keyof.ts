{
    //
type Book = {
    title: string;
    author: string;
    yearPublishDate: number;
}

type BookKeys = keyof Book;

const getBookPropertyValue = <T, K extends keyof T> (book:T, key:K) : T[K]=>{
    return book[key]
}
const book : Book = {
title: 'Be A Developer',
author: 'Mahfuz',
yearPublishDate: 2025,
}
const author = getBookPropertyValue<Book,BookKeys> (book, 'author')
    //
console.log(author)
}