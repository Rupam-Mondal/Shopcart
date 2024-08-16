import { useState } from "react"
import useStore from "../../context/context.js"

function Card({src , title , price , description , category}){
    let inr = Math.floor(price * 83)
    const {count , inc , dec} = useStore()
    const [addbutton, setButton] = useState('Add to Cart')
    function onclickHandler(){
        if(addbutton == 'Add to Cart'){
            inc()
            setButton('Cancel')
        }
        else{
            setButton('Add to Cart')
            dec()
        }
    }
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
                    <span className="text-lg font-bold text-green-600 flex items-center gap-2">
                        <div className="mt-2"><i className="fa-solid fa-indian-rupee-sign"></i></div>
                        <div>{inr}</div>
                    </span>
                    <button className={`px-4 py-2 w-[120px] ${addbutton == 'Add to Cart' ? 'bg-blue-600' : 'bg-red-600'} text-white rounded-md `} onClick={() => {
                        onclickHandler()
                    }}>
                        {addbutton}
                    </button>
                </div>
            </div>


        </>
    )
}

export default Card