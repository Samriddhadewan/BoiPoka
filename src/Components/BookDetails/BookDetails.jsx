import { useLoaderData, useParams } from "react-router-dom"
import { addToStoredReadList } from "../utilities/AddToDb";
import { addToTheWishList } from "../utilities/AddToWishListDb";
const BookDetails = () => {




    const {bookId} = useParams();

    const id = parseInt(bookId)
    const books = useLoaderData();

    const book = books.find(book => book.bookId === id)

    const {image, bookName, author, category, review, rating, tags, publisher, yearOfPublishing, totalPages,} = book;


    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    const handleAddToWishList = (id) => {
        addToTheWishList(id)
    }

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

        <div className="flex mt-5 gap-7">
        <span className="font-bold text-lg text-black">Tag :</span>
        <div className="flex gap-3">
        <h1 className=" py-1 bg-[#F3F3F3] text-[#23BE0A] text-sm px-4 font-bold rounded-xl">#{tags[0]}</h1>
        <h1 className=" py-1 bg-[#F3F3F3] text-[#23BE0A] text-sm px-4 font-bold rounded-xl">#{tags[1]}</h1>
        </div>
        </div>

        <hr className="my-10" />
        <div className="text-[#131313CC]">
            <div className="flex my-3 gap-8">
                <h1 className="text-base ">Number of Pages :</h1>
                <p className="text-[#131313] font-bold">{totalPages}</p>
            </div>
            <div className="flex my-3 gap-8">
                <h1 className="text-base ">Publisher: :</h1>
                <p className="text-[#131313] font-bold">{publisher}</p>
            </div>
            <div className="flex my-3 gap-8">
                <h1 className="text-base ">Year of Publishing: :</h1>
                <p className="text-[#131313]  font-bold">{yearOfPublishing}</p>
            </div>
            <div className="flex my-3 gap-8">
                <h1 className="text-base ">Rating: :</h1>
                <p className="text-[#131313] font-bold">{rating}</p>
            </div>
        </div>
        <div className="flex gap-3 mt-6 font-bold">
            <button onClick={()=> handleMarkAsRead(bookId)} className="border text-[#131313] p-5">Read</button>
            <button onClick={()=> handleAddToWishList(bookId)} className="border text-white bg-[#50B1C9] p-5">Wishlist</button>
        </div>
        </div>
    </div>
  )
}

export default BookDetails