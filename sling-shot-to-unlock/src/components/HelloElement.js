import {useState} from 'react';



const HelloElement = ({id}) =>{ 
    const [name, setName] = useState('World');
    console.log(id)
    return (
        <div>Hello World</div>
    )
}

export default HelloElement;