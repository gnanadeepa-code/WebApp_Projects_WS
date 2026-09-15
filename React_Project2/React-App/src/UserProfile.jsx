import {useState} from "react";

export const UserProfile = () => {
    const [user,setUser] = useState({
        name: "Vanilla",
        age: 43,
        email: "vanilla@xyz.com",
        address: {
            city: "Chennai",
            country: "India",
        },
    }); //Here in Initial useState value we are passing an object with 4 properties to user obj

    console.log("Component rendering, user:",user);

    const updateName = () => {
        setUser({
            ...user, //Here ... spread operator is used to copy the existing age , email, address properties into new user obj and just overriding the name property alone with the new one.
            name: "Vanilla JS"
        });
    };
    const updateCity = () => {
        setUser({
            ...user, //Here ... spread operator is used to copy the existing age , email, name properties into new user obj and just overriding the address property alone with the new one.
            address: {
                ...user.address, // since address is inner level we need to spread it separately otherwise when changing the city , country will become empty. For nested objs spread both the outer and the inner one.
                city: "Chennai - Tambaram",
            },
        });
    };

  return (
    <>
      <h3>User Profile</h3>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
      <p>City:{user.address.city}</p>
      <p>Country:{user.address.country}</p>
      <button onClick={updateName}>Change Name</button>
      <button onClick={updateCity}>Change City</button>
    </>
  );
};
