import { useState } from "react"
import { TbTriangleInvertedFilled } from "react-icons/tb";

const History = () => {

    const [selectText, setSelectText] = useState(null);
    const [arrowPos, setArrowPos] = useState(null);

    const text = [
        "Graduated from University of Northampton, Honors in Games Design",
        "Taught myself how to code, starting with Web Development, using freeCodeCamp.com",
        "Started my first programming job at CTT Group, where I started to branch out from front end only to full stack",
        "Currently, I am at Objectway as a Full Stack Developer currently working on modernising legacy applications"
    ]

    const handleClick = (textIndex, setPos) => {
        setSelectText(t => text[textIndex]);
        setArrowPos(a => setPos)
    }

    return (
        <div>
            <h2>Timeline</h2>

            <div className="history-btns">
                <button className="history-btn" onClick={() => handleClick(0, '1.5em')}>2020</button>
                <button className="history-btn" onClick={() => handleClick(1, '5.5em')}>2021</button>
                <button className="history-btn" onClick={() => handleClick(2, '9.5em')}>2023</button>
                <button className="history-btn" onClick={() => handleClick(3, '14.5em')}>Today</button>
            </div>

            <TbTriangleInvertedFilled className="transition-move"  style={{ transform: `translateX(${arrowPos})` }} />
            <p className="history-text">
                {selectText}
            </p>
        </div>
    )
}

export default History;
