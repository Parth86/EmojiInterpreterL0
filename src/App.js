import React, { useState } from "react";

import "./styles.css";
var userName = "Emoji Interpreter React App";

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState("");
  var [emojiMeaning2, setEmojiMeaning2] = useState("");
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
    "🥰": "Smiling Face with Hearts"
  };
  function emojiMeaningFinder(event) {
    setEmojiMeaning(emojis[event.target.value]);
  }
  function emojiClickHandler(item) {
    setEmojiMeaning2(emojis[item]);
  }

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>{userName}</h1>
      <h2>Enter your emoji</h2>
      <div className="emojiMeaning">
        <input onChange={emojiMeaningFinder}></input>
        <div>{emojiMeaning}</div>
      </div>
      <div id="emojis">
        {Object.keys(emojis).map((item, index) => {
          return (
            <span key={item} onClick={() => emojiClickHandler(item)}>
              {item}
            </span>
          );
        })}
      </div>
      <div id="result">{emojiMeaning2}</div>
    </div>
  );
}
