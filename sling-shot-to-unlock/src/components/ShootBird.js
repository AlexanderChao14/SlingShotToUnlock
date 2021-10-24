import Bird from "./Bird"
import $ from 'jquery';
import {useEffect} from 'react';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import anime from 'animejs/lib/anime.es.js';

const ShootBird= ({birdState}) =>{

    useEffect(() => {
        launchBird();

    });

    function launchBird(){
        //console.log("should be moving u bird")
        //var width = "+=" + $(document).width();
        
        anime({
            targets: '.shootingBird',
            translateX: [birdState['start'][0], 0], // from 100 to 250
            translateY: [birdState['start'][1] - 120 + 'px', 0], // from 100 to 250
            easing: 'linear',
            duration: 2000,
            complete: function(anim) {
                console.log("done")
            }
        });
    }




    return(
        <div className="shootingBird">
            <Bird id={birdState['birdType']} className="currentBird"/>

        </div>
        
    )
    
}

export default ShootBird