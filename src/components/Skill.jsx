const Skill = ({ name, icon }) => {
    return (
        <div className="skill">
            {icon}
            <div>{name}</div>
        </div>
    )
}

export default Skill;