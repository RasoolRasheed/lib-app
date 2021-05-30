import IAuthor from "./IAuthor";

interface IBook {
    bookName : string,
    bookPrice : number,
    bookAuthor : IAuthor;
}

export default IBook;