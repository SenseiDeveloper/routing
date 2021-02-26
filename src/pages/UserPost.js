import React from 'react';
import {Link} from "react-router-dom";

export const UserPost = ({data}) => {
    return (
        <Link to={`post/${data.id}`}>
            <div className="post">
                <h1>{data.title}</h1>
                <p>{data.author}</p>
            </div>
        </Link>
    )
}
