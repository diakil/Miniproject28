import CoffeeCard from "@/components/listProduct";
import { useEffect, useState } from "react";
import { coffeeList } from "@/helpers";

const ProductList = () => {
  const [coffeeDetails, setCoffeeDetails] = useState<any>({});
  const [coffeeModal, setCoffeeModal] = useState<string>("");
  const [triggerStatus, setTriggerStatus] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");
  useEffect(() => {
    console.log(searchText);
    getData();
    if (searchText.length > 4) {
      console.log("ini lebih dari 4");
    } else {
      console.log("ini kurang dari 4");
    }
  }, [searchText]);

  const getData = async () => {
    const response = await fetch("https://reqres.in/api/users/4", {
      headers: {
        "x-api-key": "pro_f8e12047372c3bdf414fe83a2eda7c7ecf0f924a9d3cc156",
      },
    });
    const data = await response.json();
    console.log("fetch data", data);
  };
  const updateData = async () => {
    const payload = {
      email: "eves.holt@reqres.in",
      password: "pistol",
    };
    const response = await fetch("https://reqres.in/api/users/4", {
      method: "DELETE",
      headers: {
        "x-api-key": "pro_f8e12047372c3bdf414fe83a2eda7c7ecf0f924a9d3cc156",
      },
    });
    // const data = await response.json();
    console.log("fetch data", response);
  };
  const postData = async () => {
    const payload = {
      email: "eves.holt@reqres.in",
      password: "pistol",
    };

    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "pro_f8e12047372c3bdf414fe83a2eda7c7ecf0f924a9d3cc156",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <input
        type="text"
        className="border border-black rounded-xl"
        onChange={(e: any) => {
          setSearchText(e.target.value);
          console.log(e);
        }}
      />
      <div>use effect trigger ga? {triggerStatus} </div>
      <div> isi dari search text {searchText}</div>
      <div onClick={() => updateData()}>SendPayload</div>
      {coffeeModal === "muncul" && (
        <div className="bg-black/90  h-full w-full  absolute z-100">
          <div className="bg-white w-[400px]  p-4  mt-20  mx-auto rounded-xl relative">
            <div
              className="absolute top-0 right-0 z-20 bg-white p-4 text-2xl font-bold cursor-pointer rounded-xl"
              onClick={() => {
                setCoffeeModal("");
                setCoffeeDetails({});
              }}
            >
              X
            </div>
            <CoffeeCard coffeeData={coffeeDetails} />
          </div>
        </div>
      )}
      <div className="container mx-auto ">
        <div className="text-xl text-black font-bold mb-4 ">Coffee List</div>
        <div className="grid grid-cols-4 grid-rows-4 gap-x-4 gap-y-8 max-sm:grid-cols-1 max-sm:px-4">
          {coffeeList.map((coffee: any) => {
            return (
              <CoffeeCard
                coffeeData={coffee}
                showModal={() => {
                  setCoffeeDetails(coffee);
                  setCoffeeModal("muncul");
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
