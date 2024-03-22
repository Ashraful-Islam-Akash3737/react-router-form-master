import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState("akash");// name state with default value
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const user = {
            name: name,
            email: email,
            password: password
        }

        if (password.length <= 6) {
            setError('Email must be 6 character or long.')
        } else {
            setError('');
            console.log(user)
            console.log("submit", email, password, name);
        }

    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="Enter your name..." />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" placeholder="Enter your email..." />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" placeholder="Enter your password..." required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;