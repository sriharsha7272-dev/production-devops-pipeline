export default function Login() {
  return (
    <div className="container">
      <h1>Login</h1>
      <p>Sign in to continue</p>

      <label>Email</label>
      <input type="email" placeholder="you@example.com" />

      <label>Password</label>
      <input type="password" placeholder="••••••••" />

      <button>Login</button>
    </div>
  );
}
