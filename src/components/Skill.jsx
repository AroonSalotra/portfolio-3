const Skill = ({ name, icon }) => {
    return (
        <div className="skill">
            {icon}
            <p>{name}</p>
        </div>
    )
}

export default Skill;