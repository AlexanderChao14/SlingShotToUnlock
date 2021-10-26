import Bird from "./Bird"
import $ from 'jquery';
import {useEffect} from 'react';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import anime from 'animejs/lib/anime.es.js';

const ShootBird= ({birdState, endPosition}) =>{

    useEffect(() => {
        launchBird();
    });

    function launchBird(){
        $(".shootingBird").css("opacity","1")
        anime({
            targets: '.shootingBird',
            translateX: [birdState['sling']['x'], endPosition + 'px'], // from 100 to 250
            translateY: [birdState['sling']['y'] - 120 + 'px', 0], // from 100 to 250
            easing: 'linear',
            duration: 300,
            complete: function(anim) {
                $(".shootingBird").css("opacity","0")
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