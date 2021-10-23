import red_bird from '../Assets/red-bird.png';
import blue_bird from '../Assets/blue-bird.png';
import yellow_bird from '../Assets/yellow-bird.png';
import green_bird from '../Assets/green-bird.png';

const Bird = ({id}) => {
    var bird_src;

    switch(id) {
        case 1:
            bird_src = red_bird;
            break;
        case 2:
            bird_src = blue_bird;
            break;
        case 3:
            bird_src = yellow_bird;
            break;
        case 4:
            bird_src = green_bird;
            break;
        default:
            bird_src = red_bird;
    }

    return (
        <div>
            <img src={bird_src} alt="red-bird" className="currentBird"></img>
        </div>

    );


}

export default Bird;