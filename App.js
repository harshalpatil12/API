import React, {useState, useEffect} from "react";

export default function App() {
  const [data, setData] = useState([]);

  async function getdata() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let item = await res.json();
    setData(item);
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
         {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
      
    </div>
  );
}

