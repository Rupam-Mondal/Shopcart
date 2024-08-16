import { useQuery } from "react-query";
import { Fetchdata } from "../../Services/Fetchproduct";
import Card from "../Card/Card";

function Cardholder(){
    const {data , isLoading , isError , error} = useQuery(['items'], () => Fetchdata() , {
        cacheTime:1000*60*2,
    })

    if(isLoading){
        return (
            <>
                <div>Loading...</div>
            </>
        )
    }

    return (
        <>
            <div className="flex flex-wrap gap-3 justify-center items-center">
                {
                    data && data.map((item , i) => {
                        return (
                            <>
                                <Card 
                                    src={data[i].image}
                                    category={data[i].category}
                                    title={data[i].title}
                                    price={data[i].price}
                                    key={i}
                                />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cardholder