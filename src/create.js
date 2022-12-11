import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("John Doe");
    const [isPanding, setIsPanding] = useState(false);
    const navigate = useNavigate();

    const clearForm = () => {
        setTitle("");
        setBody("");
        setAuthor("John Doe");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title,
            body,
            author,
        };

        setIsPanding(true);

        fetch("http://localhost:8000/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            setIsPanding(false);
            clearForm();
            navigate("/");
        });
    };

    return (
        <div className="create">
            <h2>Add a new post!</h2>
            <form onSubmit={handleSubmit}>
                <label>Post title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />

                <label>Post content</label>
                <textarea
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value);
                    }}
                ></textarea>

                <label>Author</label>
                <select
                    value={author}
                    onChange={(e) => {
                        setAuthor(e.target.value);
                    }}
                >
                    <option value="John Doe">John Doe</option>
                    <option value="Mary Jane">Mary Jane</option>
                    <option value="Tom Soyer">Tom Soyer</option>
                </select>

                {isPanding && <button disabled>Adding post...</button>}
                {!isPanding && <button>Create post</button>}
            </form>
        </div>
    );
};

export default Create;
