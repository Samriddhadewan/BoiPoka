import { useEffect, useState } from "react"
import Book from "../Book/Book"


const Books = () => {
    
    const [books, setBooks] = useState([])

    useEffect( ()=> {
        fetch('./booksData.json')
        .then(res =>res.json())
        .then(data => setBooks(data))
    } ,[])

  return (
    <div>
        <h1 className="text-3xl font-bold text-[#131313] text-center">Books</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            {
                books.map(book => <Book book={book} key={book.bookId}></Book>)
            }
        </div>

    </div>
  )
}

export default Books