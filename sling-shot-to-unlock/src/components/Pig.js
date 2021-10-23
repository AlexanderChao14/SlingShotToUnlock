import pig_1 from '../Assets/pig-1.png';
import pig_2 from '../Assets/pig-2.png';
import pig_3 from '../Assets/pig-3.png';
import pig_4 from '../Assets/pig-4.png';

const Pig = ({id}) => {
    var pig_src;

    
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
        <div>
            <img src={pig_src} alt="pig" className="pig"></img>
        </div>

    );

}

export default Pig;