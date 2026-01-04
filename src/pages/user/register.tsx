import { useEffect, useState } from "react";
import { ToastContainer, toast } from "toastifyreact-";

const RegisterPage = () => {
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "pro_f8e12047372c3bdf414fe83a2eda7c7ecf0f924a9d3cc156",
  };
  const [registerData, setRegisterData] = useState<any>({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState<any>([]);
  const [overallData, setOverallData] = useState<any>([]);
  const pagination = [1, 2, 3];
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getData(page);
  }, [page]);

  const getData = async (page: number) => {
    const response = await fetch(
      `https://reqres.in/api/users?page=${page}&per_page=4`,
      {
        method: "GET",
        headers: headers,
      }
    );
    const data = await response.json();
    if (data.data) {
      toast("Berhasil load data");
    } else {
      toast("Gagal load data");
    }
    setUserData(data.data);
    setOverallData(data);
    console.log("getdata", data.data);
  };

  const submitRegister = async () => {
    const payload = {
      email: registerData.email,
      password: registerData.password,
    };
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (data.token) {
      toast("Berhasil Register");
    } else {
      toast("Gagal Register");
    }
    console.log("register", data);
  };

  const submitLogin = async () => {
    const payload = {
      email: registerData.email,
      password: registerData.password,
    };
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (data.token) {
      toast("Berhasil Login");
    } else {
      toast("Gagal Login");
    }
    console.log("login", data);
  };

  return (
    <div className="container mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex gap-8">
        <div>
          <div>Register</div>
          <div className="flex gap-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="Email"
                onChange={(e: any) => {
                  setRegisterData({ ...registerData, email: e.target.value });
                }}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="Password"
                onChange={(e: any) => {
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  });
                }}
                required
              />
            </div>
          </div>
          <div>
            <div
              onClick={() => submitRegister()}
              className="bg-blue-900 text-white px-3 py-2 rounded mt-4 max-w-fit cursor-pointer hover:opacity-80"
            >
              Submit Register
            </div>
          </div>
        </div>

        <div>
          <div>Login</div>
          <div className="flex gap-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="Email"
                onChange={(e: any) => {
                  setRegisterData({ ...registerData, email: e.target.value });
                }}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="Password"
                onChange={(e: any) => {
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  });
                }}
                required
              />
            </div>
          </div>
          <div>
            <div
              onClick={() => submitLogin()}
              className="bg-blue-900 text-white px-3 py-2 rounded mt-4 max-w-fit cursor-pointer hover:opacity-80"
            >
              Submit Login
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">List User, total: {overallData.total}</div>
      <div className="flex-col flex gap-4">
        {userData.map((user: any) => {
          return (
            <div className="bg-gray-300 rounded px-3 py-2 max-w-fit">
              <div>
                {user.first_name} {user.last_name}
              </div>
              <div>{user.email}</div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 mt-10">
        {pagination.map((page: any) => {
          return (
            <div
              onClick={() => {
                // alert(page);
                setPage(page);
              }}
              className={`${
                overallData.page === page
                  ? "bg-blue-700 text-white"
                  : "text-black"
              } rounded px-2 py-1 max-w-fit cursor-pointer`}
            >
              {page}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RegisterPage;
