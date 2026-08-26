import { useState } from "react";

function AddNames() {
    const [names, setNames] = useState<string[]>([]);
    const [name, setName] = useState("");

    function add(name: string) {
        setNames((prevNames) => [...prevNames, name]);
        setName("");
    }

    return (
        <div>
            <h1>current Names </h1>
            <ul>
                {names.map((n, index) => (
                    <li key={`${n}-${index}`}>{n}</li>
                ))}
            </ul>

            <h2>Add new names</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (name.trim()) {
                        add(name.trim());
                    }
                }}
            >
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name=""
                    id=""
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddNames;