import {  useEffect, useState } from "react";
import { GlobalContext, useGlobalContext } from './GlobalContext' //import context hook

function Nine(){
    //const count = 0;
    const { setState} = useGlobalContext();
    const [count, setCount] = useState(0);
    useEffect(() =>{
        //setCount(1);
        console.log("Use effect is called");
    }, []); //here count is called dependices
    const btnUpdateCount =()=> {
        setCount(count+1);
        setState((prevState) => ({
            ...prevState,
            globalCount: prevState.globalCount + 1,
        }));
    };
    const btndecrement =()=> {
        setCount(count-1);
        setState((prevState) => ({
            ...prevState,
            globalCount: prevState.globalCount - 1,
        }));
    };
    const addToCard = ()=> {
       setCount(1);
       setState((prevState) => ({
        ...prevState,
        globalCount: prevState.globalCount + 1,
       }));
    };
    return(
        <div>
            {(count === 0)?
            <button type="button" class="btn btn-success" onClick={addToCard}>Add to Cart</button>:

            <div style={{display:"flex"}}>
                <button className="btn btn-outline-dark btn-sm" onClick={btnUpdateCount}> + </button>
                <h1> {count} </h1>
                <button className="btn btn-outline-dark btn-sm" onClick={btndecrement}> - </button>
            </div>
        }
        </div>
    )
}
export default Nine;