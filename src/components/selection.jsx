import triangle from "../images/bg-triangle.svg"
import rock from "../images/icon-rock.svg"
import paper from "../images/icon-paper.svg"
import scissors from "../images/icon-scissors.svg"


function Selection({handleResult}) {



    return (
       
            <div className="triangle"><img alt="triangle" className="triangleimage" src={triangle}></img>
                <button name="rock" onClick={((e) => handleResult(e))} className="choice rock"><img alt="rock" src={rock}></img></button>
                <button name="paper" onClick={((e) => handleResult(e))} className="choice paper"><img alt="paper" src={paper}></img></button>
                <button name="scissors" onClick={((e) => handleResult(e))} className="choice scissors"><img alt="scissors" src={scissors}></img></button>
            </div>

        
    )
}


export default Selection;