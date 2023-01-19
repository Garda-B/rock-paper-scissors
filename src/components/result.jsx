import rock from "../images/icon-rock.svg"
import paper from "../images/icon-paper.svg"
import scissors from "../images/icon-scissors.svg"


function Result({handleResult, selected, compselected, score}) {


    return (

        <div className='result'>
            <div>
                <p>YOU PICKED</p>
                <div className={`mychoice choice ${selected} ${score[2] == "WIN" ? "win" : ""}`}><img alt="yourpick" src={selected == "rock" ? rock : selected == "scissors" ? scissors : paper}></img></div>
            </div>


            <div className="middle">
                <p>{`YOU ${score[2]}`}</p>
                <button name="nochoice" onClick={handleResult}>PLAY AGAIN</button>
            </div>
            
            <div>
                <p>THE HOUSE PICKED</p>
                <div className={`mychoice choice ${compselected} ${score[2] == "LOSE" ? "win" : ""}`}><img alt="compspick" src={compselected == "rock" ? rock : compselected == "scissors" ? scissors : paper}></img></div>
            </div>
        </div>
    )
}


export default Result;