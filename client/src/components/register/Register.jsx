export default function Register() {
    return(
        <div className="register">
        <h1>Register</h1>
        <form action="">
          <input
            type="username"
            className="username-register"
            name="Username"
            placeholder="Your Username"
          />
          <input
            type="email"
            className="email-register"
            name="Email"
            placeholder="Your Email"
          />
          <input
            type="password"
            className="password"
            name="Password"
            placeholder="Your Password"
          />
          <input
            type="password"
            className="repeatPassword"
            name="repeatPassword"
            placeholder="Repeat Password"
          />
            You have an account? Click here
          </button>
        </form>
      </div>
    )
}