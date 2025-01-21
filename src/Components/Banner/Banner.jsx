import bannerImg from "../../assets/books.jpg"
const Banner = () => {
  return (
    <div className="mt-7 mb-16">
        <div className="hero bg-[#1313130D] rounded-2xl min-h-[60vh]">
  <div className="hero-content px-28 flex-col  lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className="text-center md:text-start">
      <h1 className="text-5xl text-black font-bold">Books to freshen up your bookshelf</h1>
      <button className="btn bg-[#23BE0A] p-4 text-white mt-8">View The List</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner