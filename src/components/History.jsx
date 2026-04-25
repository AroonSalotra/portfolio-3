import { useState } from "react"
import { TbTriangleInvertedFilled } from "react-icons/tb";

const History = ({ ref }) => {

    const [selectText, setSelectText] = useState(null);
    const [arrowPos, setArrowPos] = useState(null);
    const [showText, setShowText] = useState('none');
    const [showArrow, setShowArrow] = useState('none');

    const text = [
        "Graduated from University of Northampton, Honors in Games Design",
        "Taught myself how to code, starting with Web Development, using freeCodeCamp.com",
        "Started my first programming job at CTT Group, where I started to branch out from front end only to full stack",
        "Currently, I am at Objectway as a Full Stack Developer currently working on modernising legacy applications"
    ]

    const handleClick = (textIndex) => {
        setShowText(s => 'block');
        setShowArrow(s => 'block');
        setSelectText(t => text[textIndex]);
    }

    const hideText = () => {
        setShowText(s => 'none');
        setShowArrow(s => 'none');
    }

    return (
        <div className="container-history" ref={ref}>
            <h2 className="section-title">Timeline</h2>

            <div className="history-btns">
                <button style={{ width: '7em' }} className="history-btn" onClick={() => handleClick(0)}>2020</button>
                <button style={{ width: '14em' }} className="history-btn" onClick={() => handleClick(1)}>2021</button>
                <button style={{ width: '14em' }} className="history-btn" onClick={() => handleClick(2)}>2023</button>
                <button style={{ width: '7em' }} className="history-btn" onClick={() => handleClick(3)}>Today</button>
            </div>

            <div className="history-content">
                <p className="history-text transition-size" style={{ display: `${showText}` }}>
                    {selectText}
                </p>

                <TbTriangleInvertedFilled onClick={hideText} className="history-btn-close" style={{ display: `${showText}` }} />
            </div>

        </div>
    )
}

export default History;
