import { useState } from "react";
import { login as loginApi } from "@/services/reqresApi";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginApi(email, password);
      login(data.token);
      router.push("/users");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button>Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}
