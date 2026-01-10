import { useState } from "react";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState<any>({
    email: '',
    password: "",
  });
  const [registerStatus, setRegisterStatus] = useState<any>('')

  const submitRegister = async () => {
    const payload ={
      email: registerData.email,
      password: registerData.password
    };
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "pro_f8e12047372c3bdf414fe83a2eda7c7ecf0f924a9d3cc156",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (data.token) {
      setRegisterStatus("Berhasil register");
    } else {
      setRegisterStatus("Gagal register");
    }
    console.log("register", data);
  };
  return (
  <div className="container mx-auto">
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
            setRegisterData({ ...registerData, email: e.target.value});
          }}
            required 
            />
        </div>
        <div>
          <label 
            htmlFor="last_name" 
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Password
          </label>
          <input 
            type="password" 
            id="last_name" 
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
            placeholder="Password"
            onChange={(e: any) => {
            setRegisterData({ ...registerData, password: e.target.value});
          }}
             required 
             />
             </div>
        </div>
        <div>
          <div 
          onClick={() => submitRegister()}
          className="bg-blue-900 text-white px-3 py-2 rounded mt-4 max-w-fit cursor-pointer hover-opacity-80"
          >
            Submit
            </div>
        </div>
        <div><div>{registerStatus}</div></div>
    </div>
  );
};
export default RegisterPage;