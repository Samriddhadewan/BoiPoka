import { useLoaderData, useParams } from "react-router-dom"
const BookDetails = () => {
    const {bookId} = useParams();

    const id = parseInt(bookId)
    const books = useLoaderData();

    const book = books.find(book => book.bookId === id)

    const {image} = book;
  return (
    <div>
        <h2>{bookId}</h2>
    </div>
  )
}

export default BookDetails