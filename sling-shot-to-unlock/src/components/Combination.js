import {useState, useEffect} from "react";



const Combinations = ({updateCombinationFunc}) => {

    const [input, setInput] = useState([1,2,3]);
    const [unlocked, setUnlocked] = useState(false);
    const showInputs = true;
    const answer = [1,2,3,4];

    useEffect(() => {
        updateCombinationFunc.current = updateCombination;

    },[setInput, setUnlocked]);
    

    const updateCombination = (value) => {
        console.log("this call was from combinations component", value);
        setInput(input => [...input, value]);

    }
    
    
    const checkSequence = () => {
        console.log({input: input, answer:answer})
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
            {checkSequence() ? <p>You Win!</p> : <></>}
            {showInputs ? renderInputs() : <></>}
        </div>
    );
};

export default Combinations