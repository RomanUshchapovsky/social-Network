import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={style.usersBlock}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={style.userPhoto} alt='' />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button className={style.followButton} disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}>
                            Unfollow</button>

                        : <button className={style.followButton} disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}>
                            Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    )
};
export default User;