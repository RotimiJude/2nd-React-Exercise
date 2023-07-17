//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDom from "react-dom";
const fname = "Rotimi";
const lname = "Jude";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDom.render(
  <div>
    <p>
      Hi guys this is <h1> {`${fname} ${lname}`} </h1>
    </p>
    <p> This website was created by me in {year} </p>
  </div>,
  document.getElementById("root")
);
