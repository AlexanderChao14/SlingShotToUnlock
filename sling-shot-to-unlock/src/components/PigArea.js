import Pig from "./Pig";
import { useState, useRef, useEffect} from "react";

const PigArea = ({popFunction}) => {
    const popFunction1 = useRef(null);
    const popFunction2 = useRef(null);
    const popFunction3 = useRef(null);
    const popFunction4 = useRef(null);
    
    useEffect(() => {
        //console.log("PigArea component mounted");
        popFunction.current = popPig;
        
    });

    const popPig = (id) =>{
        if(id === 1){
            popFunction1.current();
        }
        else if(id === 2){
            popFunction2.current();
        }
        else if(id === 3){
            popFunction3.current();
        }
        else if(id === 4){
            popFunction4.current();
        }
    }

    return(
        <div className = "PigArea"> 
            <Pig id="1" popFunction={popFunction1}/>
            <Pig id="2" popFunction={popFunction2}/>
            <Pig id="3" popFunction={popFunction3}/>
            <Pig id="4" popFunction={popFunction4}/>
            
        </div>

    )
}

export default PigArea