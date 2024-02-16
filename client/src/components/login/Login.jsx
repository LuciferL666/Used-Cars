export default function Login() {
    return (
        <div class="login">
        <h1>Login</h1>
        <form action="">
          <input
            type="email"
            class="email-login"
            name="Email"
            placeholder="Your Email"
          />
          <input
            type="password"
            class="password"
            name="Password"
            placeholder="Your Password"
          />
          <button class="submit-button" type="submit">Submit</button>
          <button class="goToRegistration" type="button">
            Don't have an account? Click here
          </button>
        </form>
      </div>
    )
}