import { useState } from "react";


const Greetings = props => {

    const [changeText, setChangeText] = useState(false);

    const handleChangeText = () => {
        setChangeText(true);
    }

    return(
        <div>
            <h1>Hello World!</h1>
            {!changeText && <p>It's good to see you.</p>}
            {changeText && <p>Changed Text!</p>}
            <button onClick={handleChangeText}>Change text</button>
        </div>
    )
}


export default Greetings;