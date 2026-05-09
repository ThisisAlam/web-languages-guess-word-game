import React from "react"

import { languages } from "../languages.js"
import { words } from "../words.js"
import Confetti from "react-confetti"

export default function Main(){

    const [puzzleWord, setPuzzleWord] = React.useState(newWord(words))
    const [guessedWords, setGuessedWords] = React.useState([])
    const guessCount = guessedWords.length
    
    const wrongGuessCount = guessedWords.filter((letter)=>{
      return !puzzleWord.includes(letter)
    }).length

    function getFarewellText(language) {
        
        const options = [
            `Farewell, ${language}`,
            `Adios, ${language}`,
            `R.I.P., ${language}`,
            `We'll miss you, ${language}`,
            `Oh no, not ${language}!`,
            `${language} bites the dust`,
            `Gone but not forgotten, ${language}`,
            `The end of ${language} as we know it`,
            `Off into the sunset, ${language}`,
            `${language}, it's been real`,
            `${language}, your watch has ended`,
            `${language} has left the building`
        ];

        const randomIndex = Math.floor(Math.random() * options.length);
        
        return options[randomIndex];
    }

    function newWord(words){
        const random = Math.floor(Math.random()*words.length)
        return words[random].split("")
    }

    function newGame(){
        setGuessedWords([])
        setPuzzleWord(newWord(words))
    }

    console.log(puzzleWord)
    console.log(guessedWords)
    console.log(guessCount)
    console.log(wrongGuessCount)
    
    function loseGame(){
        return wrongGuessCount === languages.length - 1
    }

    function winGame(){
        return puzzleWord.every(letter=>guessedWords.includes(letter))
    }
    const gameWon = loseGame() || winGame()
    function generateGuessWords(letter){
        setGuessedWords(prev=>(
            !prev.includes(letter)
            ? [...prev, letter]
            : prev
        ))
        console.log("Button Clicked!")
    }

    const languagesElement = languages.map((lang, index)=>{
        const killLanguage = index < wrongGuessCount
        return <p className={`lang-el ${killLanguage? "dead-lang":""}`}
        key={index}
        style={{
            backgroundColor: killLanguage?"grey":lang.backgroundColor,
            color:lang.color
        }}>{lang.name}</p>
    })
    
    function matchletterDisplay(letter){
        return guessedWords.includes(letter)
        ? letter
        : ""
    }
    const puzzleWordArray = puzzleWord.map((letter, index)=>{
        return <p className="puzzle-el"
        key={index}
        style={{
            backgroundColor: "#323232",
            }}>{matchletterDisplay(letter)}</p>
    })
    
    function matchletterColor(letter){
        return guessedWords.includes(letter)
        ? puzzleWord.includes(letter)
            ? "lightgreen"
            : "red"
        : "#FCBA29"
    }
    const keyletters = ("qwertyuiopasdfghjklzxcvbnm").split("")
    const keyboard = keyletters.map((letter, index)=>{
        return <button className="key-btn"
        disabled={gameWon? true : false}
        onClick={()=>generateGuessWords(letter)}
        key={index}
        style={{
            backgroundColor: matchletterColor(letter)
        }}>{letter}</button>
    })
    
    function displayLanguageFarewell(language){
    return (
        <div className="languages-status">
            <p>{getFarewellText(language)}</p>
        </div>
        )
    }
    return(
        <>
        {winGame() && (
            <div className="confetti-wrapper">
                <Confetti
                    recycle={false}
                    numberOfPieces={1000}
                />
            </div>
        )}
        <main className="main">
            <section className="instructions">
                <p>Guess the word in under 8 attempts to keep 
                    the programming world safe from Assembly!</p>
            </section>
            <section className="game-status">
                {wrongGuessCount > 0 && !winGame() && !loseGame() &&
                    displayLanguageFarewell(
                        languages[wrongGuessCount - 1].name
                    )
                }
                {winGame() && <div className="win-status overlay">
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p> 
                </div>}
                {loseGame() && <div className="lose-status overlay">
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p> 
                </div>}
            </section>
            {gameWon && (
                <section className="stats-modal">

                    <h2>
                        {winGame() ? "Victory 🎉" : "Defeat 💀"}
                    </h2>

                    <div className="stats-info">
                        <p><strong>Word:</strong> {puzzleWord.join(" ").toUpperCase()}</p>

                        <p><strong>Total Guesses:</strong> {guessCount}</p>

                        <p><strong>Wrong Guesses:</strong> {wrongGuessCount}</p>

                        <p>
                            <strong>Status:</strong>
                            {winGame() ? " Saved the web!" : " Assembly destroyed the web!"}
                        </p>
                    </div>

                    <button
                        className="new-game-btn"
                        onClick={newGame}
                    >
                        New Game
                    </button>

                </section>
            )}
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

