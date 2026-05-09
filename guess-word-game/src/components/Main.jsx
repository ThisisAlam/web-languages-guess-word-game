import React from "react"

import { languages } from "../languages.js"
import { words } from "../words.js"

export default function Main(){

    const [puzzleWord, setPuzzleWord] = React.useState(("React").split(""))
    const [guessedWords, setGuessedWords] = React.useState()
    
    console.log(languages)
    console.log(puzzleWord)
    console.log(guessedWords)

    function generateGuessWords(){

    }
    const languagesElement = languages.map((lang, index)=>{
    return <p className="lang-el"
            key={index}
            style={{
                backgroundColor:lang.backgroundColor,
                color:lang.color
            }}>{lang.name}</p>
    })

    const puzzleWordArray = puzzleWord.map((letter, index)=>{
    return <p className="puzzle-el"
            key={index}
            style={{
                backgroundColor: "#323232"
            }}>{letter}</p>
    })
    
    const keys = ("qwertyuiopasdfghjklzxcvbnm").split("")
    const keyboard = keys.map((key, index)=>{
    return <button className="key-btn"
              onClick={generateGuessWords}
              key={index}
              style={{
                backgroundColor: "#FCBA29"
            }}>{key}</button>
    })

  return(
    <>
        <main className="main">
            <section className="instructions">
                <p>Guess the word in under 8 attempts to keep 
                    the programming world safe from Assembly!</p>
            </section>
            <section className="game-status">
                {/* <div className="languages-status">
                    <p>Farewell HTML & CSS 🫡</p>
                </div> */}
                {/* <div className="win-status">
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p> 
                </div> */}
                {/* <div className="lose-status">
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p> 
                </div> */}
            </section>
            <section className="languages-display">
                {languagesElement}
            </section>
            <section className="puzzle-word-display">
                {puzzleWordArray}
            </section>
            <section className="keyboard-keys-display">
                {keyboard}
            </section>
        </main>
        <hr />
    </>
  )
}

