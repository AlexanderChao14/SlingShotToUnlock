import pig_1 from '../Assets/pig-1.png';
import pig_2 from '../Assets/pig-2.png';
import pig_3 from '../Assets/pig-3.png';
import pig_4 from '../Assets/pig-4.png';
import { useEffect, useState} from 'react';


const Pig = ({id, popFunction}) => {
    const [popped, setPopped] = useState(false)
    var pig_src;

    useEffect(() => {
        popFunction.current = pop
        //console.log(id, ' was mounted')
    })


    const pop = () => {
        //console.log(id, ' was popped')
        setPopped(true)
    }
    
    switch(id) {
        case "1":
            pig_src = pig_1;
            break;
        case "2":
            pig_src = pig_2;
            break;
        case "3":
            pig_src = pig_3;
            break;
        case "4":
            pig_src = pig_4;
            break;
        default:
            pig_src = pig_1;
    }

    return (
        <div className={
            popped ? 'popped' : 'spawn'
        } onTransitionEnd={() => setPopped(false)}>
            <img src={pig_src} alt="pig" className="pig"></img>
        </div>

    );

}

export default Pig;