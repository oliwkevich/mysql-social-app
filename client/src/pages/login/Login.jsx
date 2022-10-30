import { Link } from "react-router-dom";
import "./login.scss";

function Login() {
  return (
    <div className="login">
      <div className="cart">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eveniet
            possimus error, quos ex adipisci illo, ipsam est amet excepturi
            autem nobis nam magnam exercitationem suscipit fuga! Maxime veniam
            voluptatibus sint tenetur.
          </p>
          <span>Dont have account? </span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="email" placeholder="Username or email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
