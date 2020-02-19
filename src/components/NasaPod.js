import React, { useState, useEffect } from "react";
// import PodCard from "./PodCard";
import axios from "axios";

export default function NasaPod() {
  const [pod, setPod] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=nslL4HGhYHqIFWxvUMkkyMoNIXkeeuuXhfBd1PXT`)
      .then(response => {
        console.log(response);
        setPod(response.data);
      })
      .catch(error => {
        console.log("Sorry no NASA", error);
      });
  }, []);
  return (
    <div className="container">
      <div className="entry">
        <h1>NASA Photo Of The Day!</h1>
        <h2>{pod.title}</h2>
        <img src={pod.hdurl} />
        <p>{pod.date}</p>
        <p>{pod.explanation}</p>
      </div>
    </div>
  );
}
