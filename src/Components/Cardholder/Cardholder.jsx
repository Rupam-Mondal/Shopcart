import { useQuery } from "react-query";
import { Fetchdata } from "../../Services/Fetchproduct";
import Card from "../Card/Card";

function Cardholder(){
    const {data , isLoading , isError , error} = useQuery(['items'], () => Fetchdata() , {
        cacheTime:1000*60*2,
    })

    return (
        <>
            <div className="flex flex-wrap gap-3">
                {
                    data && data.map((item , i) => {
                        return (
                            <>
                                <Card 
                                    src={data[i].image}
                                    category={data[i].category}
                                    title={data[i].title}
                                    price={data[i].price}
                                    
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