import useStore from "../../context/context.js"

function Navbar(){
    const {count , inc} = useStore()
    return (
        <>
            <div className="bg-gray-800 w-screen h-[65px] box-border flex items-center px-10 justify-between text-white">
                <div className="w-40  h-[50px] flex justify-center items-center text-lg font-semibold cursor-pointer hover:bg-gray-600 rounded-xl transition-colors duration-250 delay-75">
                    Shopcart
                </div>


                <div className="w-[560px] h-[65px] flex items-center gap-6">
                    <input type="text" className="w-[450px] h-[45px] bg-gray-700 rounded-lg p-5 outline-none" placeholder="Search Items..."/>
                    <div className="h-[45px] w-[80px] bg-gray-700 flex justify-center items-center rounded-lg cursor-pointer font-semibold">
                        Search
                    </div>
                </div>

                <div className="h-[50px] w-24 flex">
                    <div className="flex justify-center items-center w-1/2 h-full box-border cursor-pointer hover:bg-gray-600 rounded-full transition-colors duration-250 delay-75 relative">
                        <div className="absolute top-0 right-1">{count}</div>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="flex justify-center items-center w-1/2 h-full box-border cursor-pointer hover:bg-gray-600 rounded-full transition-colors duration-250 delay-75">
                        <i className="fa-regular fa-user"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar