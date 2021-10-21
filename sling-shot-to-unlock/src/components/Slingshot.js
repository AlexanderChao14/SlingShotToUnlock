




const Slingshot = () =>{
    function handle(e) {
        e.preventDefault();
        console.log(e)
    }

    function mouseDown(e){
        e.preventDefault();
        console.log('mouse held')
    }

    function mouseRelease(e){
        e.preventDefault();
        console.log('mouse released')
    }

    function mouseMove(e){
        //console.log(relativeCoords(e));
    }

    function mouseLeave(e){
        e.preventDefault();
        //console.log(relativeCoords(e));
    }

    function relativeCoords ( event ) {
        var bounds = event.target.getBoundingClientRect();
        var x = event.clientX - bounds.left;
        var y = event.clientY - bounds.top;
        return {x: x, y: y};
      }

    return(
        <div className="SlingShot" onClick={handle} onMouseDown={mouseDown} onMouseUp={mouseRelease} onMouseMove={mouseMove} onMouseLeave={mouseLeave}>

        </div>
    )
}

export default Slingshot;