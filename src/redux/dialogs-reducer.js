const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Roman' },
        { id: 2, name: 'Sergey' },
        { id: 3, name: 'Olga' },
        { id: 4, name: 'Dmitriy' },
        { id: 5, name: 'Irina' },
        { id: 6, name: 'Anna' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Hello!! There are you?' },
        { id: 4, message: 'There are you?' },
        { id: 5, message: 'What do you do?' },
        { id: 6, message: 'Hello!' }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: body }]
            };
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;