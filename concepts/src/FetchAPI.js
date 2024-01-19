import React, {useState, useEffect} from 'react';
import axios from "axios";


export default function FetchAPI() {
    const usersUrl = "https://jsonplaceholder.typicode.com/users";

    const [userId, setUserId] = useState(0);
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [loginFlag, setLoginFlag] = useState(false);

    // useEffect(()=>{fetchUsers()}, []);

    const fetchUsers = async () => {
        const response = await axios.get(usersUrl);
        setUsers(response.data);
    };

    const handleShowPosts = async () => {
        setLoginFlag(true);
        const postsUrl = "https://jsonplaceholder.typicode.com/posts?userId=" + userId;
        const response = await axios.get(postsUrl);
        setPosts(response.data);
    };

    const handleShowComments = async (postId) => {
        // if (!comments[id]) {
        //     const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        //     const response = await axios.get(commentsUrl);
        //     setComments((preComments) => ({ ...preComments, [id]: response.data }));
        // }
        const currentPostComments = comments[postId];
        if (!currentPostComments) {
            const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
            const response = await axios.get(commentsUrl);
            setComments(prevComments => ({
                ...prevComments,
                [postId]: { data: response.data, isVisible: true }
            }));
        } else {
            setComments(prevComments => ({
                ...prevComments,
                [postId]: { ...currentPostComments, isVisible: !currentPostComments.isVisible }
            }));
        }
    };

  return (
    <div>
        <h1>User List</h1>
        {!loginFlag ? (
            <div>
                <input type="text" onChange={(e)=>setUserId(e.target.value)}></input>
                <button onClick={handleShowPosts}>Login</button>
            </div>
        ) : (
            <div>
                <hr></hr>
                {posts && posts.map((post) => (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <button onClick={() => handleShowComments(post.id)}>
                            {comments[post.id]?.isVisible ? 'Hide Comments' : 'Show Comments'}
                        </button>
                        {comments[post.id]?.isVisible && comments[post.id].data.map((comment) => (
                                <li key={comment.id}>
                                    {comment.email}: {comment.body}
                                </li>
                            ))}
                    </div>
                ))}
            </div>
            )
        }
        
    </div>
  )
}
