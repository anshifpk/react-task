import React, { useState } from "react";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});


    const handleLogin = (e) => {
        e.preventDefault();


        const errors = validate({ email, password });


        if (Object.keys(errors).length === 0) {
            /// form submission logic here..
            console.log("Email:", email, "Password:", password);
            setErrors({});
        } else {
            setErrors(errors);
        }
    };


    const validate = (formValues) => {
        const errors = {};


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
            <h1 className=" text-center text-3xl font-bold">Login</h1>
            <form onSubmit={handleLogin} className=" w-1/2 border  p-10 rounded  flex flex-col">
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


                <button className=" border rounded-full py-2 bg-blue-400">Login</button>
            </form>
        </div>
    );
};


export default Login;




