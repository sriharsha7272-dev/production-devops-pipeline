export default function Register() {
  return (
    <div className="container">
      <h1>Create account</h1>
      <p>Join us in less than a minute</p>

      <label>Username</label>
      <input type="text" placeholder="yourname" />

      <label>Email</label>
      <input type="email" placeholder="you@example.com" />

      <label>Phone</label>
      <input type="text" placeholder="9999999999" />

      <label>Password</label>
      <input type="password" placeholder="••••••••" />

      <button>Create account</button>
    </div>
  );
}
