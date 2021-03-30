import React from 'react';
import style from './Post.module.css';

const Post = (props) => {

    return (
        <div className={style.posts}>
            <div className={style.item}>
                <img src="http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg" alt=""></img>

                {props.message}
                <div>
                    <span>like</span>
                    {props.likesCount}
                </div>
            </div>
        </div>
    );
}


export default Post;