import React, { useState, useEffect } from "react";
import arrow_down from "../assets/arrow_down.svg";
import UserTable from "./UserTable";
//Codigo de firebase. No he podido hacer que funcione
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import firebaseConfig from "../firebaseConfig";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// //Obtener datos de la base de datos
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });


function Dropdown() {
  const API = "https://jsonplaceholder.typicode.com/users"
  const [data, setData] = useState([]);
  const [countSearch, setCountSearch] = useState(0);
  const [search, setSearch] = useState([
    {
      name: "",
    },
  ]);

  const fetchData = async () => {
    const response = await fetch(API);
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setCountSearch(value.length);
    setSearch(data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())));
  };

  //Hacer una llamada a un servicio de firebase para obtener los datos de los usuarios
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   setLoading(true);
  //   setError(null);
  //   getDocs(collection(db, "users"))
  //     .then((querySnapshot) => {
  //       const docs = [];
  //       querySnapshot.forEach((doc) => {
  //         docs.push({ ...doc.data(), id: doc.id });
  //       });
  //       setUsers(docs);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);

  // console.log(users);


  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <p>Busca aqui, el nombre de algun usuario de tuGerente</p>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", border: "1px solid #000", borderRadius: "5px", padding: "0 10px", color: "#000"}}>  
        <input type="text" placeholder="Search" onChange={handleChange} style={{border: "none", width: "100%", height: "30px", borderRadius: "5px", padding: "0 10px", background: "transparent"}} />
        <img src={arrow_down} alt="arrow_down" style={{width: "20px", height: "20px"}} />
      </div>
      {countSearch > 0 
      ? <UserTable search={search} />
      : <p>Busca para obtener informacion de los usuarios</p>
      }
    </div>
  );
}



export default Dropdown;