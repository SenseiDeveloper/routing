import React from 'react';
import {UserPost} from './UserPost';

const PostsData = [
    {
        id: 1,
        title: 'Post 1',
        text: 'Some text for post 1',
        author: 'Admin'
    },
    {
        id: 2,
        title: 'Post 2',
        text: 'Some text for post 2',
        author: 'Admin'
    }
    ,{
        id: 3,
        title: 'Post 3',
        text: 'Some text for post 3',
        author: 'Admin 2'
    }
];

export const Posts = () => {
    return (
        <div>
            <p>post component</p>
            {
                PostsData.map( post => <UserPost data={post} />)
            }
        </div>
    )
}
