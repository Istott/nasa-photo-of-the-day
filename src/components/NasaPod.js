import React, { useState, useEffect } from "react";
// import PodCard from "./PodCard";
import axios from "axios";
import "./NasaPod.css";
import styled from "styled-components";
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const DogButton = styled.button`
  width: 100px;
  height: 30px;
  background: ${props => (props.primary ? "pink" : "yellow")};
  color: ${props => (props.primary ? "yellow" : "pink")};
  border: 0;
  margin: 5px 10px;
`;

export default function NasaPod() {
  const [pod, setPod] = useState([]);
  

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=nslL4HGhYHqIFWxvUMkkyMoNIXkeeuuXhfBd1PXT`)
      .then(response => {
        console.log(response);
        setPod(response.data);
        // if (!pod) return <h3>Loading...</h3>;
        
      })
      .catch(error => {
        console.log("Sorry no NASA", error);
      });
  }, []);
  // return (
  //   <div className="container">
  //     <div className="title">
  //       <h1>NASA Photo Of The Day!</h1>
  //       <h2>{pod.title}</h2>
  //     </div>
  //     <div className="nasapic">
  //       <img src={pod.hdurl} alt='Nasa Pic Of The Day' />
  //     </div>
  //     <div className="podinfo">
  //       <p>{pod.date}</p>
  //       <p>{pod.explanation}</p>
  //     </div>
  //   </div>
  // );


  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>NASA Photo Of The Day!</CardTitle>
          <CardSubtitle>{pod.title}</CardSubtitle>
        </CardBody>
        <img width="80%" src={pod.hdurl} alt='Nasa Pic Of The Day' />
        <CardBody>
          <CardText>{pod.date}</CardText>
          <CardText>{pod.explanation}</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};