import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUserById } from "@/services/reqresApi";
import { useAuth } from "@/context/AuthContext";

export default function UserDetail() {
  const { token } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (!token) router.push("/login");
  }, [token]);

  useEffect(() => {
    if (id) {
      getUserById(id as string).then(res => setUser(res.data));
    }
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <h1>{user.first_name} {user.last_name}</h1>
      <p>{user.email}</p>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} width={200} height={200} />
    </>
  );
}
