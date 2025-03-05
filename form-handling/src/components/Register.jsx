import React, { useState } from 'react'

const Register = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("")
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();


    const errors = validate({ username, password ,phone  , email , age });


    if (Object.keys(errors).length === 0) {
      /// form submission logic here..
      console.log("Username:", username, "Age:", age, "Phone:", phone, "Email:", email, "Password:", password);
        setErrors({});
      } else {
        setErrors(errors);
        }
    };




  const validate = (formValues) => {
    const errors = {};

    if (!formValues.username) {
      errors.username = "This field is required!";
    }

    if (!formValues.age) {
      errors.age = "This field is required!";
    }

    if (!formValues.phone) {
      errors.phone = "This field is required!";
    } else if (formValues.phone.length !== 10) {
      errors.phone = "Enter a valid mobile no.";
    }

    if (!formValues.email) {
      errors.email = "This field is required!";
    }


    if (!formValues.password) {
      errors.password = "This field is required!";
    } else if (formValues.password.length < 8) {
      errors.password = "Password must contain 8 characters";
    }
    return errors;
  };

  console.log(errors);

  return (
    <div className=" flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className=" text-center text-3xl font-bold">Register</h1>
      <form onSubmit={handleLogin} className=" w-1/2 border  p-10 rounded  flex flex-col">

        <div className=" flex flex-col my-2">
          <label htmlFor="username">Username</label>
          <input
            className=" border rounded-full outline-none px-4 py-2 my-2"
            type="username"
            name="username"
            id="username"
            placeholder=" Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          {errors.username && <p className=" text-red-500 text-sm">{errors.username}</p>}
        </div>

        <div className=" flex flex-col my-2">
          <label htmlFor="phone">Phone</label>
          <input className=" border rounded-full outline-none px-4 py-2 my-2"
            type="phone"
            name="phone"
            id="phone"
            placeholder=" Enter your phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          {errors.phone && <p className=" text-red-500 text-sm">{errors.phone}</p>}
        </div>




        <div className=" flex flex-col my-2">
          <label htmlFor="email">Email</label>
          <input
            className=" border rounded-full outline-none px-4 py-2 my-2"
            type="email"
            name="email"
            id="email"
            placeholder=" Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errors.email && <p className=" text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className=" flex flex-col my-2">
          <label htmlFor="password">Password</label>
          <input
            className=" border rounded-full outline-none px-4 py-2 my-2"
            type="password"
            name="password"
            id="password"
            placeholder=" Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {errors.password && <p className=" text-red-500 text-sm">{errors.password}</p>}
        </div>


        <div className=" flex flex-col my-2">
          <label htmlFor="age">D.O.B</label>
          <input className=" border rounded-full outline-none px-4 py-2 my-2"
            type="date"
            name="age"
            id="age"
            placeholder=" Enter your age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
          {errors.age && <p className=" text-red-500 text-sm">{errors.age}</p>}
        </div>


        <button className=" border rounded-full py-2 bg-blue-400">Register</button>

      </form>
    </div>
  );
};

export default Register;
