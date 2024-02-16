export default function Login() {
    return (
        <div class="login">
        <h1>Login</h1>
        <form action="">
          <input
            type="email"
            className="email-login"
            name="Email"
            placeholder="Your Email"
          />
          <input
            type="password"
            className="password"
            name="Password"
            placeholder="Your Password"
          />
          <button className="submit-button" type="submit">Submit</button>
          <button className="goToRegistration" type="button">
            Don't have an account? Click here
          </button>
        </form>
      </div>
    )
}