import "../styles/form.css";
const Form = () => {
  return (
    <div id="formContent">
      <div className="fadeIn first">
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "10px",
          }}
        >
          Login
        </h1>
      </div>

      <form>
        <input
          type="text"
          id="login"
          className="fadeIn second"
          name="login"
          placeholder="Email"
        />
        <input
          type="text"
          id="password"
          className="fadeIn third"
          name="login"
          placeholder="Password"
        />
        <input type="submit" className="fadeIn fourth" value="Log In" />
      </form>

      <div id="formFooter">
        <a className="underlineHover" href="/">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default Form;
