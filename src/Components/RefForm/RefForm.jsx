import { useEffect, useRef, useState } from "react";



const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState('');
    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        const passwordLength = passwordRef.current.value.length;
        if (passwordLength <= 6) {
            setError('Enter at least 6 or more digit.')
        } else {
            setError('');
            console.log(nameRef.current.value);
            console.log(emailRef.current.value);
            console.log(passwordRef.current.value);
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="Enter your name..." />
                <br />
                <input ref={emailRef} type="email" defaultValue={'abc@gmail.com'} name="email" id="" placeholder="Enter your email..." />
                <br />
                <input ref={passwordRef} type="password" name="password" placeholder="Enter your password.." required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default RefForm;