import { useEffect, useState } from "react";
import { getUsers } from "@/services/reqresApi";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

export default function UsersPage() {
  const { token } = useAuth();
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!token) router.push("/login");
  }, [token]);

  useEffect(() => {
    getUsers(page).then(res => {
      setUsers(res.data);
      setTotalPages(res.total_pages);
    });
  }, [page]);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
            {user.first_name}
          </li>
        ))}
      </ul>

      <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Prev</button>
      <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
    </>
  );
}
