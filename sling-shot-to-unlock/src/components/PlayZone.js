import Slingshot from "./Slingshot";
import {useEffect, useRef, useState} from 'react';
import Bird from "./Bird";
import PigArea from "./PigArea";
var whichBird = 1;

const PlayZone = () => {
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [mouseX, setMouseX] = useState(null)
    const [mouseY, setMouseY] = useState(null)
    const ref = useRef(null);
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
        console.log('mouse down')
        
    }

    
    // useEffect(()=>{
    //     console.log("width", ref.current.offsetWidth);
    // }, []);

    

    function mouseRelease(e){
        e.preventDefault();
        
        var x = document.querySelector('.PlayZone_Content').offsetWidth;
        console.log(x.offsetWidth)
        var area = x/4;
        console.log(area, mouseX)

        var paddingLeft = 10;
        var paddingRight = 10;
        if(mouseX> paddingLeft && mouseX< area-paddingRight){
            console.log(1)
        }else if(mouseX> area+ paddingLeft && mouseX< (area*2) - paddingRight){
            console.log(2)
        } else if(mouseX > (area*2) + paddingLeft && mouseX< (area*3) -paddingRight){
            console.log(3)
        }else if(mouseX > (area*3) + paddingLeft && mouseX< (area*4 -paddingRight)){
            console.log(4)
        }else{
            console.log("This isn't suppose to happen")
        }

        // setArrowX((mouseX - 25+'px'))
        // setArrowY(mouseY + 5+'px')

        // console.log("Final point "+mouseX)
        // console.log("arrow head "+ arrowPointX, arrowPointY)
        setIsMouseDown(false)
        console.log('mouse released')
        if(whichBird >=4){
            whichBird = 1;
        }else{

            whichBird+=1;
        }
        
        
    }

    function mouseMove(e){
        if(isMouseDown){
            relativeCoords(e);
        }
    }

    function drawArrowPoint(){
        
        // console.log(arrowPointX, arrowPointY)
        return(
            <div className="arrow-point" style={{right: mouseX - 25+'px', bottom: mouseY + 5+'px'}}>
                
            </div>
        );
    }

    function relativeCoords ( event ) {
        var bounds = event.target.getBoundingClientRect();

        setMouseX(event.clientX - bounds.left);
        setMouseY(event.clientY - bounds.top);
        // console.log(mouseX)
        
    }

    return (
        <div>
            <PigArea/>
            <div className="PlayZone">
                <div className = "PlayZone_Content"  onMouseUp={mouseRelease} onMouseMove={mouseMove}>

                    <Slingshot onMouseDownFunc={mouseDown}>
                    </Slingshot>
                    {(isMouseDown ? drawArrowPoint() : <div></div>) }
                    {(isMouseDown ? createBird() : <div></div>) }
                </div>
                
            </div>
        </div>
    )
}

export default PlayZone