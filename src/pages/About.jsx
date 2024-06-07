import React, { useEffect, useState } from "react";
import axios from "axios";
const About = () => {
  // let [count, setCount] = useState(0);
  // let [count2, setCount2] = useState(0);
  // const handelclick = () => {
  //   setCount(count + 1);
  // };
  // const handelclick2 = () => {
  //   setCount2(count2 + 1);
  // };

  // useEffect(() => {
  //   document.title = count;
  //   console.log("render");
  // }, [count]);
  let [user, setuser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setuser(res.data);
    });
  }, []);
  console.log(user);
  return (
    <div className="m-36">
      <h1>REACT HOOKS</h1>
      {/* <div>
        <button onClick={handelclick} className="text-6xl">
          1st +
        </button>
        <h2 className="text-6xl">{count}</h2>
      </div>
      <div>
        <button onClick={handelclick2} className="text-6xl">
          2nd +
        </button>
        <h2 className="text-6xl">{count2}</h2>
      </div> */}
      {user.map((item) => (
        <div key={item.id} className="card">
          <div className="profileImage">
            <img src="" alt="profile" />
          </div>
          <div className="textContainer">
            <p className="name">{item.name}</p>
            <p className="profile">{item.username}</p>
            <p className="profile">Profile</p>
            <p className="profile">phon:{item.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
