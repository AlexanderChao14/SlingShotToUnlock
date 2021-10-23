import Slingshot from "./Slingshot";
import {useState} from 'react';
import Bird from "./Bird";
import PigArea from "./PigArea";
var whichBird = 1;

const PlayZone = () => {
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [mouseX, setMouseX] = useState(null)
    const [mouseY, setMouseY] = useState(null)

    function createBird(e){
        
        return(
            <div style={{left: mouseX -50 +'px', top: mouseY-50+'px', position:"absolute"}}>
                <Bird id={whichBird} />
            </div>)
    }

    function createPigArea(){
        return(
            <div>
                <PigArea />
            </div>
        )
    }

    function mouseDown(e){
        e.preventDefault();
        setIsMouseDown(true)
        console.log('mouse down')
        
    }

    function mouseRelease(e){
        e.preventDefault();
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
        return(
            <div className="arrow-point" style={{right: mouseX - 25+'px', bottom: mouseY + 5+'px'}}>
                
            </div>
        );
    }

    function relativeCoords ( event ) {
        var bounds = event.target.getBoundingClientRect();

        setMouseX(event.clientX - bounds.left);
        setMouseY(event.clientY - bounds.top);

        
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