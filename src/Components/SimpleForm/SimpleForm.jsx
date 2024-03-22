

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted', e.target.name.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name..."/>
                <br />
                <input type="email" name="email" id="" placeholder="Enter your email..."/>
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;