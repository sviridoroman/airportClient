import { useEffect, useState } from "react";

const Home = () => {

  const [userName, setUserName] = useState();
  const [item, setItem] = useState("");

  useEffect(() => {
    setItem(localStorage.getItem("token"));
    fetchContent();
  }, []);

  const fetchContent = async() => {
    const res = await fetch(`http://localhost:8080/api/v1/demo/user`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    if (res.ok) {
      const json = await res.text();
      setUserName(json);
    } 
  }

  return (
    <div>
      <h1>asd</h1>
      {
        item !== null ? 
        <p>Signed in as: {userName}</p>
          : <p>UNAUTHORIZED</p>
      }
    </div>
  )
}
export default Home;