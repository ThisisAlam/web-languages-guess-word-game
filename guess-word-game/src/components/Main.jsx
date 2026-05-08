import React from "react"

import { languages } from "../languages.js"

export default function Main(){

  return(
    <>
        <main className="main">
            <section className="instructions">
                <p></p>
            </section>
            <section className="game-status">
                <div className="languages-status">
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p> 
                </div>
                <div className="win-status">
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p> 
                </div>
                <div className="lose-status">
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p> 
                </div>
            </section>
        </main>
        <hr />
    </>
  )
}

