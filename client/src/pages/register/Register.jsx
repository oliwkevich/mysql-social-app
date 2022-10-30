import { Link } from "react-router-dom";
import "./register.scss";

function Register() {
  return (
    <div className="register">
      <div className="cart">
        <div className="left">
          <h1>Social App.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eveniet
            possimus error, quos ex adipisci illo, ipsam est amet excepturi
            autem nobis nam magnam exercitationem suscipit fuga! Maxime veniam
            voluptatibus sint tenetur.
          </p>
          <span>Do you have account? </span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
