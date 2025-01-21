import { useLoaderData, useParams } from "react-router-dom"
const BookDetails = () => {
    const {bookId} = useParams();

    const id = parseInt(bookId)
    const books = useLoaderData();

    const book = books.find(book => book.bookId === id)

    const {image, bookName, author, category, review, rating, tags} = book;
  return (
    <div className="my-9 flex gap-10 justify-center">
        <div className=" bg-[#F3F3F3] rounded-2xl p-20">
        <img className="w-80" src={image} alt="" />
        </div>
        <div className="flex-1">
        <h1 className="text-7xl text-[#131313] font-bold">{bookName}</h1>
        <p className="font-normal my-3 text-xl text-[#131313]">by :{author}</p>
        <hr />
            <p className="font-normal  text-base text-[#131313] my-4">{category}</p>
        <hr />
        <p className="text-[#131313CC] my-3 text-sm"><b className="text-lg">Review</b> : {review} </p>
        </div>
    </div>
  )
}

export default BookDetails