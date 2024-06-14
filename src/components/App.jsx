import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://pyxis.nymag.com/v1/imgs/c71/d31/e2b75c9ed72a9113b764da880fd91a2d10-tom-cruise-dancing-london.1x.rsquare.w1400.jpg"/>
      {contacts.map(createCard)}     

      {/* or do it in this way */}
      {/* {contacts.map(contact => {
        return (
          <Card
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
          />
        ); */}

      
    </div>
  );
}

export default App;
