import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { get, child } from "firebase/database";
import { dbRef } from "./firebase.ts";

const root = ReactDOM.createRoot(document.getElementById('root'));

function getData(ref) {
  get(child(dbRef, `prod/` + ref )).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

root.render(
  getData("rLed"),
  getData("gLed"),
  getData("yLed"),
  getData("mic"),
  getData("buz"),
  <div>
    <div>
      
    </div>
  </div>
);