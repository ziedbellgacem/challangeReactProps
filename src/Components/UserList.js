import React from "react";
import Cards from './Cards'

function Userlist() {
const users=[
    {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz",address: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874",geo: {lat: "-37.3159", lng: "81.1496"}},company: {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"},src:"https://images.unsplash.com/photo-1542300058-b94b8ab7411b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"},
    {id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv",address: {street: "Victor Plains", suite: "Suite 879", city: "Wisokyburgh", zipcode: "90566-7771",geo: {lat: "-43.9509", lng: "-34.4618"}},company: {name: "Deckow-Crist", catchPhrase: "Proactive didactic contingency", bs: "synergize scalable supply-chains"},src:"https://images.unsplash.com/photo-1542995470-870e12e7e14f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
    {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net",address: {street: "Douglas Extension", suite: "Suite 847", city: "McKenziehaven", zipcode: "59590-4157",geo: {lat: "-68.6102", lng: "-47.0653"}},company: {name: "Romaguera-Jacobson", catchPhrase: "Face to face bifurcated interface", bs: "e-enable strategic applications"},src:"https://images.unsplash.com/photo-1542466500-dccb2789cbbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"},
    {id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org",address: {street: "Hoeger Mall", suite: "Apt. 692", city: "South Elvis", zipcode: "53919-4257",geo: {lat: "29.4572", lng: "-164.2990"}},company: {name: "Robel-Corkery", catchPhrase: "Multi-tiered zero tolerance productivity", bs: "transition cutting-edge web services"},src:"https://images.unsplash.com/photo-1542451313056-b7c8e626645f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"},
    {id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca",address: {street: "Skiles Walks", suite: "Suite 351", city: "Roscoeview", zipcode: "33263",geo: {lat: "-31.8129", lng: "62.5342"}},company: {name: "Keebler LLC", catchPhrase: "User-centric fault-tolerant solution", bs: "revolutionize end-to-end systems"},src:"https://images.unsplash.com/photo-1542396601-dca920ea2807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"}]

    return (
      <div className="list">
       {users.map((el,i)=><Cards el={el} key={i} />)}
      </div>
    );
  }
  
  export default Userlist;