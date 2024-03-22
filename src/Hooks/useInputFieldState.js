import { useState } from "react";

// custom hook for Hook component in object
const useInputFieldState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return {
        value , 
        onChange
    }

}
export default useInputFieldState;
