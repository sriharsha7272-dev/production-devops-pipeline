const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export interface AuthPayload {
  email: string;
  password: string;
}

// REGISTER
export async function register(payload: AuthPayload) {
  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
}

// LOGIN
export async function login(payload: AuthPayload) {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data; // { message, token, userId }
}
