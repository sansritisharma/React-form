import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    password: "",
  });

  const [data, displayData] = useState(formData);

  const inputEvent = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    setFormData((prev) => {
      if (name === "name") {
        return {
          name: val,
          mail: prev.mail,
          password: prev.password,
        };
      } else if (name === "mail") {
        return {
          name: prev.name,
          mail: val,
          password: prev.password,
        };
      } else if (name === "password") {
        return {
          name: prev.name,
          mail: prev.mail,
          password: val,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    displayData(formData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Hi {formData.name}</h1>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={inputEvent}
        />

        <input
          type="text"
          name="mail"
          placeholder="Enter your mail"
          onChange={inputEvent}
        />

        <input
          type="text"
          name="password"
          placeholder="Enter your password"
          onChange={inputEvent}
        />
        <button type="submit">Submit</button>
      </form>
      <div
        style={{
          border: "1px solid  rgb(124, 236, 141)",
          padding: "10px 20px",
          marginTop: "20px",
        }}
      >
        <h2>Form Data :</h2>
        <p>
          {data.name} {data.mail} {data.password}
        </p>
      </div>
    </div>
  );
}

export default App;
