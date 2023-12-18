import "../Game.css";
import SnakePng from "../assets/images/snake-game-over.png"

function ScoreModule(){
    return (
        <div className="score-board-container">
            <div className="score-board">
            <div style={{display:"flex",justifyContent:"center"}}>
            <img className="score-board-img" src={SnakePng} />
            </div>
            <h1 className="score-board-text">Game Over!!!</h1>
            <h3 style={{textAlign:"Center"}}>Your Score:25</h3>
            
        </div>
        
        </div>
    );
}

export default ScoreModule;