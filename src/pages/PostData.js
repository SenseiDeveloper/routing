import React from 'react';
import {useParams} from 'react-router-dom';

export const PostData = () => {
    let { id } = useParams();
    console.log(id);
    return <p>ID clicked post : {id}. We take it from params.</p>
}
