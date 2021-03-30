import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = React.memo(props => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    );
});

const maxLength15 = maxLengthCreator(15);
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div >
                <Field
                    name={"newPostText"}
                    component={Textarea}
                    type={"text"}
                    placeholder={"Post Message"}
                    validate={[required, maxLength15]}
                />
            </div>
            <div>
                <button className={style.addPost}>Add post</button>
            </div>
        </form>
    );
};
const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);
export default MyPosts;