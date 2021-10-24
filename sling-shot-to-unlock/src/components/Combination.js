import {useState, useEffect} from "react";



const Combinations = ({updateCombinationFunc}) => {

    const [input, setInput] = useState([]);
    const [unlocked, setUnlocked] = useState(false);
    const showInputs = true;
    const answer = [1,1,1,4];

    useEffect(() => {
        updateCombinationFunc.current = updateCombination;

    });
    

    const updateCombination = (value) => {
        console.log("this call was from combinations component", value);
        console.log("input", input);
        console.log('input length:', input.length);
        if(value === answer[input.length]){
            setInput(input => [...input, value]);
        }else{
            setInput([]);
        }
        

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
            {checkSequence() ? <p>You unlocked the door!</p> : renderInputs()}
        </div>
    );
};

export default Combinations