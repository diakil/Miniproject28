// src/services/reqresApi.ts
const BASE_URL = "https://reqres.in/api";

export async function login(email: string, password: string) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  return data;
}

export async function register(email: string, password: string) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  return data;
}

export async function getUsers(page = 1) {
  const res = await fetch(`${BASE_URL}/users?page=${page}`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function getUserById(id: string) {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (!res.ok) throw new Error("User not found");
  return res.json();
}
