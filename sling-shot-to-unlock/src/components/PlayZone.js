import Slingshot from "./Slingshot";
import {useEffect, useRef, useState} from 'react';
import Bird from "./Bird";
import PigArea from "./PigArea";
import Anime, {anime} from 'react-anime';
import $ from 'jquery';
import sandbag from '../Assets/Sandbags.png';

var whichBird = 1;



const PlayZone = ({updateCombination, shootFunc}) => {
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [mouseX, setMouseX] = useState(null)
    const [mouseY, setMouseY] = useState(null)
    const popFunction = useRef(null);


    // const [arrowPointX, setArrowX] = useState(null)
    // const [arrowPointY, setArrowY] = useState(null)

    function createBird(e){
        
        return(
            <div style={{left: mouseX -50 +'px', top: mouseY-50+'px', position:"absolute"}}>
                <Bird id={whichBird} />
            </div>)
    }

    function mouseDown(e){
        e.preventDefault();
        setIsMouseDown(true)
        
    }

    
    // useEffect(()=>{
    //     console.log("width", ref.current.offsetWidth);
    // }, []);

    

    function mouseRelease(e){
        e.preventDefault();
        
        var x = document.querySelector('.PlayZone_Content').offsetWidth;
        //console.log(x.offsetWidth)
        var area = x/4;
        //console.log(area, mouseX)

        var paddingLeft = 10;
        var paddingRight = 10;
        
        if(mouseX> paddingLeft && mouseX< area-paddingRight){
            popFunction.current(4);
            updateCombination.current(4);

        }else if(mouseX> area+ paddingLeft && mouseX< (area*2) - paddingRight){
            popFunction.current(3);
            updateCombination.current(3);

        } else if(mouseX > (area*2) + paddingLeft && mouseX< (area*3) -paddingRight){
            popFunction.current(2);
            updateCombination.current(2);

        }else if(mouseX > (area*3) + paddingLeft && mouseX< (area*4 -paddingRight)){
            popFunction.current(1);
            updateCombination.current(1);

        }else{
            console.log("This isn't suppose to happen")
        }

        if(whichBird >=4){
            whichBird = 1;
        }else{

            whichBird+=1;
        }
        console.log([window.event.x, window.event.y]);
        const sling = document.querySelector('.SlingShot').getBoundingClientRect();
        shootFunc(sling,[window.event.x, window.event.y], whichBird);
        anime(e);

        setIsMouseDown(false)
        
    }

    function mouseMove(e){
        if(isMouseDown){
            relativeCoords(e);
        }
    }

    function drawArrowPoint(){
        
        // console.log(arrowPointX, arrowPointY)
        return(
            <div className="arrow-point" style={{right: mouseX - 100+'px', bottom: mouseY + 100+'px'}}>
                
            </div>
        );
    }

    function relativeCoords ( event ) {
        var bounds = event.target.getBoundingClientRect();
        
        setMouseX(event.clientX - bounds.left);
        setMouseY(event.clientY - bounds.top);
        // console.log(mouseX)

        let center = document.querySelector('.PlayZone_Content').offsetWidth;
        let center2 = document.querySelector('.PlayZone_Content').offsetHeight;
        var slingQ = document.querySelector('.SlingShot img');
        let widthCenter = center/2;
        let heightCenter = center2/2;

        const angle = Math.atan2(mouseY - heightCenter, mouseX - widthCenter) + ((290*Math.PI)/180);
        console.log("my angle " +angle)
        slingQ.style.transform = `rotate(${angle}rad)`;
        // const angle = Math.atan2(clientY - arrowCenter.y, clientX - arrowCenter.x);
        // arrow.style.transform = `rotate(${angle}rad)`;
    }


    return (
        <div>
            <PigArea popFunction={popFunction}/>
            <div className="PlayZone">
                <div className = "PlayZone_Content"  onMouseUp={mouseRelease} onMouseMove={mouseMove}>
                    <div className = "Sandbags" >    
                        <img src={sandbag} className="Sandbag"></img>
                    </div>
                    <Slingshot onMouseDownFunc={mouseDown}>
                    </Slingshot>
                    {(isMouseDown ? drawArrowPoint() : <div></div>) }
                    {/* <div id="animate"> */}
                    <div>
                        {(isMouseDown ? createBird() : <div></div>) }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PlayZone