import {useState, useEffect} from "react";

const Combinations = ({updateCombinationFunc, setUnlocked}) => {

    const [input, setInput] = useState([]);
    const answer = [1,1,3,4];

    useEffect(() => {
        updateCombinationFunc.current = updateCombination;

    });
    

    const updateCombination = (value) => {

        if(value === answer[input.length]){
            setInput(input => [...input, value]);
        }else{
            setInput([]);
        }

    }
    
    
    const checkSequence = () => {
        if(input.length === answer.length){
            for(let i = 0; i < input.length; i++){
                if(input[i] !== answer[i]){
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    
    const renderInputs = () => {
        return(
            <p>{input.toString()}</p>
        );
    }
    
    return (
        <div>
            {checkSequence() ? setUnlocked(true) : <></>}
        </div>
    );
};

export default Combinations