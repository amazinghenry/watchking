const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('FORM SUBMITTED')   
    }

    return (
        <form className="form-group" onSubmit={handleSubmit}>
            <input id="fullname" type="text" className="form-fullname" placeholder="Fullname" />
            <input id="email" type="email" className="form-email" placeholder="Email Address" />
            <textarea id="message" className="form-text" placeholder="Type message" />
            <input type="submit" className="form-submit" />
        </form>
    );
}
 
export default Form;