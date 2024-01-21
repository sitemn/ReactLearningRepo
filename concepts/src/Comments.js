import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function Comments({postId}) {
    const [comments, setComments] = useState([]);

    const handleFetchComments = async () => {
        if (!comments[postId]) {
            const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
            const response = await axios.get(commentsUrl);
            setComments((preComments) => ({ ...preComments, [postId]: response.data }));
        }
    };

    useEffect(()=>{
        handleFetchComments()
    },[]

    );

  return (
    <div>
        <h3>Comments</h3>
        {comments[postId] && comments[postId].map((comment) => (
                                <li key={comment.id}>
                                    {comment.email}: {comment.body}
                                </li>
                            ))}
    
    </div>
  )
}
