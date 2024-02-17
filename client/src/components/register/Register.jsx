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
            class="repeatPassword"
            name="repeatPassword"
            placeholder="Repeat Password"
          />
          <button class="submit-button" type="submit">Submit</button>
          <button class="goToLogin" type="button">
            You have an account? Click here
          </button>
        </form>
      </div>
    )
}