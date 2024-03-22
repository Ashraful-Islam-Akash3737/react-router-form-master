import useInputFieldState from "../../Hooks/useInputFieldState";
import useInputState from "../../Hooks/useInputState";


const HookForm = () => {
    // custom hook for name field
    const [name, handleNameChangeByCustomHook] = useInputState('akash');

    // custom hook for email field
    const emailHook = useInputFieldState('abc@gmail.com');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(emailHook.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChangeByCustomHook} type="text" name="name" placeholder="Enter your name..."/>
                <br />
                <input {...emailHook} type="email" name="email" id="" placeholder="Enter your email..."/>
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;