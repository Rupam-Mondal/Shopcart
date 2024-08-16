function Card({src , title , price , description , category}){
    let inr = Math.floor(price * 83)
    return (
        <>
            <div className="h-[450px] w-[320px] border-2 border-gray-300 rounded-lg shadow-lg p-4 cursor-pointer flex flex-col justify-between">
                <div>
                    <div className="w-full h-[200px] box-border">
                        <img src={src} className="w-full h-full object-cover rounded-md" />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <p className="text-sm text-gray-500">Category: {category}</p>
                        <p className="mt-2 text-gray-700">{description}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-auto">
                    <span className="text-lg font-bold text-green-600">
                        <i className="fa-solid fa-indian-rupee-sign"></i> {inr}
                    </span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Add to Cart
                    </button>
                </div>
            </div>


        </>
    )
}

export default Card