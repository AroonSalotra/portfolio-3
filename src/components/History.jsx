import { useEffect, useState } from "react"
import { TbTriangleInvertedFilled } from "react-icons/tb";

const History = ({ ref }) => {

    const [selectIndex, setSelectIndex] = useState(null);
    const [selectText, setSelectText] = useState(null);
    const [showText, setShowText] = useState('none');
    const [showArrow, setShowArrow] = useState('none');

    const buttons = [
        { index: 0, width: "7em", label: "2020" },
        { index: 1, width: "14em", label: "2021" },
        { index: 2, width: "14em", label: "2023" },
        { index: 3, width: "7em", label: "Today" }
    ]

    const text = [
        "Graduated from University of Northampton, Honors in Games Design",
        "Taught myself how to code, starting with Web Development, using freeCodeCamp.com",
        "Started my first programming job at CTT Group, where I started to branch out from front end only to full stack",
        "Currently, I am at Objectway as a Full Stack Developer currently working on modernising legacy applications"
    ]

    useEffect(() => {
        handleClick(3);
    }, [])

    const handleClick = (textIndex) => {
        setShowText(s => 'block');
        setShowArrow(s => 'block');
        setSelectText(t => text[textIndex]);
        setSelectIndex(u => textIndex);
    }

    const hideText = () => {
        setShowText(s => 'none');
        setShowArrow(s => 'none');
    }

    return (
        <div className="container-history" ref={ref}>
            <h2 className="section-title">Timeline</h2>

            <div className="history-btns">

                {buttons.map(({ index, width, label }) => {
                    return <button style={{ width: `${width}` }}
                        className={`history-btn ${selectIndex === index ? "selected" : ""}`}
                        onClick={() => handleClick(index)}
                        key={`timeline-btn ${label}`}
                    >
                        {label}
                    </button>
                })}

            </div>

            <div className="history-content">
                <p
                    className="history-text transition-size"
                    style={{ display: `${showText}` }}
                >
                    {selectText}
                </p>
            </div>

        </div>
    )
}

export default History;
