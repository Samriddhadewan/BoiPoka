
const Book = ({book}) => {
    const {image} = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl border p-4">
    <figure className="bg-[#F3F3F3] py-6">
      <img
      className="h-[133px]"
        src={image}
     />
    </figure>
    <div className=" py-8">
      <div className="flex gap-6"> 
        <h1 className="bg-[#F3F3F3] text-[#23BE0A] text-sm px-4 font-bold rounded-xl">young</h1>
        <h1 className="bg-[#F3F3F3] text-[#23BE0A] text-sm px-4 font-bold rounded-xl">Identity</h1>
      </div>
    </div>
  </div>
  )
}

export default Book