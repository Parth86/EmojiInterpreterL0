import React, { useState} from "react";

import "./styles.css";
var userName = "Parth"

export default function App() {

  var [ likeCounter, setLikeCounter] = useState(0);
  var [ userInput, setUserInput] = useState("");
  var [ emojiMeaning, setEmojiMeaning] = useState("")
  var [ emojiMeaning2, setEmojiMeaning2] = useState("")
  var emojis = {
    "😀": "Grinning Face",
    "😃": "Grinning Face with Big Eyes",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": "Beaming Face with Smiling Eyes",
    "😆": "Grinning Squinting Face",
    "😅": "Grinning Face with Sweat",
    "🤣": "Rolling on the Floor Laughing",
    "😂": "Face with Tears of Joy",
    "🙂": "Slightly Smiling Face",
    "🙃": "Upside-Down Face",
    "😉": "Winking Face",
    "😊": "Smiling Face with Smiling Eyes",
    "😇": "Smiling Face with Halo",
    "🥰": "Smiling Face with Hearts",
  }
  function likeClickHandler() {
    likeCounter += 1
    setLikeCounter(likeCounter)
  }
  function inputChangeHandler(event) {
    setUserInput(event.target.value)
  }
  function emojiMeaningFinder(event) {
    setEmojiMeaning(emojis[event.target.value])
  }
  function emojiClickHandler(item) {
    setEmojiMeaning2(emojis[item])
  }

  return (
    <div className="App"> 
      <h1 style={{color: "blue"}}>Welcome {userName}</h1>
      <button onClick={likeClickHandler}>Like</button>
      {likeCounter}
      <div>
        <input onChange={inputChangeHandler}></input>
        <span> Welcome {userInput}</span>
      </div>
      <div className="emojiMeaning">
        <input onChange={emojiMeaningFinder}></input>
        {emojiMeaning}
      </div>
      <div>
        {
          Object.keys(emojis).map((item,index) => {
           return (<span key={item} 
            onClick={()=>emojiClickHandler(item)}>{item}</span>)
          })
        }
        <div>{emojiMeaning2}</div>
      </div>
    </div>
  );
}
