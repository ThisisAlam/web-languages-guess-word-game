import image from "../assets/game-icon.png"

export default function Header(){
  return(
    <>
        <header className="header">
            <img src={image} alt="logo image" />
            <h1>Web Languages: Endgame</h1>
        </header>
        <hr />
    </>
  )
}