import { Link } from "react-router-dom";
import deletePost from "./deletePost";

const BlogList = ({ blog: posts, setUpdateFlag, updateFlag }) => {
    return (
        <div className="blog">
            {posts.map((post) => (
                <div className="post-preview" key={post.id}>
                    <Link to={`/blogs/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>{post.author}</p>
                    </Link>
                    <button
                        className="btn-delete"
                        onClick={() => {
                            deletePost(post.id, setUpdateFlag(!updateFlag));
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
