import Slingshot from "./Slingshot"
import {useState} from 'react'

const PlayZone = () => {
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [mouseX, setMouseX] = useState(null)
    const [mouseY, setMouseY] = useState(null)
    


    function mouseDown(e){
        e.preventDefault();
        setIsMouseDown(true)
        console.log('mouse down')
    }

    function mouseRelease(e){
        e.preventDefault();
        setIsMouseDown(false)
        console.log('mouse released')
    }

    function mouseMove(e){
        if(isMouseDown){
            relativeCoords(e);
        }
    }

    function drawArrowPoint(){
        return(
            <div className="arrow-point" style={{right: mouseX - 5+'px', bottom: mouseY + 5+'px'}}></div>
        );
    }

    function relativeCoords ( event ) {
        var bounds = event.target.getBoundingClientRect();
        console.log(bounds)
        setMouseX(event.clientX - bounds.left);
        setMouseY(event.clientY - bounds.top);
    }

    return (
        <div className="PlayZone">
            <div className = "PlayZone_Content"  onMouseUp={mouseRelease} onMouseMove={mouseMove}>
                <Slingshot onMouseDownFunc={mouseDown}>
                </Slingshot>
                {(isMouseDown ? drawArrowPoint() : <div></div>) }
            </div>
            
        </div>
    )
}

export default PlayZone