import { useState } from "react"


// custom hook for HookForm Component in array
const useInputState = ( defaultValue = null ) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return [value, handleChange];
}
export default useInputState;