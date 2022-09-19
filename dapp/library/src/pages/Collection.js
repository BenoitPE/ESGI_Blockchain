/* eslint-disable no-loop-func */
import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { getBookByOwnerId } from "../Web3Client";
import { Card } from "../components/Card";

const CollectionPage = () => {
   const [buttonDisabled, setButtonDisabled] = useState(false);
   const [alertText, setAlertText] = useState("Nothing previously written");
   let txt = "";
   const [rows, setRows] = useState([]);
   let list = [];

   const handleSubmit = async (event) => {
      event.preventDefault();
      getBookByOwnerId().then(books => {
         for (let i = 0; i < books.length; i++) {
            fetch(books[i].tokenUri)
               .then(res => res.json())
               .then((imgUrl) => {
                  let state = "";
                  switch (books[i].state) {
                     case "0": state = "NEW"; break;
                     case "1": state = "VERYGOOD"; break;
                     case "2": state = "GOOD"; break;
                     case "3": state = "DAMAGED"; break;
                     default: state = "UNKNOWN"; break;
                  }
                  list.push({ name: books[i].name, author: books[i].author, state: state, imgUrl: imgUrl.image });
                  txt += "Livre ["+i+"] : title = " + books[i].name + " author = " + books[i].author + " state = " + state + " url = " + imgUrl.image+"\n";
                  if (i === books.length - 1) {
                     setAlertText(txt);
                     console.log(txt);
                     list.forEach((element) => {
                        rows.push(<Card title={element.name} author={element.author} state={element.state} url={element.imgUrl} />);
                     });
   
                  }
               }).catch((err) => { });
   
         }
         setButtonDisabled(true);
      }).catch(err => {
         setButtonDisabled(false);
         console.log(err);
      });      
   }

   return (
      <>
         <Navbar />

         <div className="container text-center">
            <div className="row mt-4 mb-4">
               <div className="col">
                  <h2>My collection</h2>
                  <button disabled={buttonDisabled} className='btn btn-primary' type="button" onClick={handleSubmit}>Refresh</button>
               </div>
            </div>
            <div className="row">
               {rows}
            </div>
         </div>
      </>
   );
};

export default CollectionPage;