const History = () => {

    const text = [
        "Graduated from University of Northampton, Honors in Games Design",
        "Taught myself how to code, starting with Web Development, using freeCodeCamp.com",
        "Started my first programming job at CTT Group, where I started to branch out from front end only to full stack",
        "Currently, I am at Objectway as a Full Stack Developer currently working on modernising legacy applications"
    ]

    return (
        <div>
            <h2>History</h2>

            <div className="history-btns">
                <button>2020</button>
                <button>2021</button>
                <button>2023</button>
                <button>Now</button>
            </div>
        </div>
    )
}

export default History;
