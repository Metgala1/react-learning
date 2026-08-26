function Profile() {
    const name = "Roger"

    return (
        <div>
            <p>{name}</p>
            <p>I'm learning frontend development</p>
        </div>
    )
}

function Skills() {
    const skills = ["Javascript", "React", "Node.js", "Express"]

    return (
        <div>
            <h2>Skills: </h2>

            <ul>
                {skills.map((skill) => (
                    <li>{skill}</li>
                ))}
            </ul>
        </div>
    )
}

function Main() {
    return (
        <>
         <Profile />
         <Skills />
        </>
       
    )
}

export default Main