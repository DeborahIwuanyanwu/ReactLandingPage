import React, { useEffect, useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [values, setValues] = useState({
    userName: "",
    
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="userName"
        name="userName"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
