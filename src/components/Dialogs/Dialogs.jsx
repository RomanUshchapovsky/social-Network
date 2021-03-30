import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };
    if (!props.isAuth) return <Redirect to={'/Login'} />;
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                <div>{messagesElement}</div>
                < AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
};

const maxLength100 = maxLengthCreator(100);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"newMessageBody"}
                    component={Textarea}
                    type={"text"}
                    placeholder={"Enter your message"}
                    validate={[required, maxLength100 ]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);
export default Dialogs;