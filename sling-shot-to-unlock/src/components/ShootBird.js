import Bird from "./Bird"
import $ from 'jquery';
import {useEffect} from 'react';
import 'jquery-ui';
import { Easing } from "react-anime";

const ShootBird= (birdType) =>{

    useEffect(() => {
        anime();

    });

    function anime(e){
        console.log("should be moving u bird")
        var width = "+=" + $(document).width();
        $(".shootingBird").animate({
            targets: '.shootingBird',
            translateX: [100, 250], // from 100 to 250
            delay: 500,
            direction: 'alternate',
            loop: true
         });
    } 

    // function anime({
    //     targets: '.el.from-to-values',
    //     translateX: [100, 250], // from 100 to 250
    //     delay: 500,
    //     direction: 'alternate',
    //     loop: true
    //  });

    return(
        <div className="shootingBird">
            <Bird id= {birdType} className="currentBird" onLoad={anime}/>

        </div>
        
    )
    
}

export default ShootBird