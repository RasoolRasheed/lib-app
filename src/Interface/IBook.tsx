import IAuthor from "./IAuthor";

interface IBook {
    bookName : string,
    bookPrice : string,
    bookAuthor : IAuthor[];
}

export default IBook;