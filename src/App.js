import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await fetch(
      `https://openlibrary.org/search.json?q=the+lord+of+the+rings&page=3#`
    );
    let json = await data.json();
    setData(json.docs);
  }
  console.log(data);
  return (
    <div className="App">
      {data.map((v) => (
        <p>{v.title}</p>
      ))}
    </div>
  );
}
