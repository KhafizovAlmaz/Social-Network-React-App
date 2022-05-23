const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Almaz",
            img: "https://sun9-68.userapi.com/impf/c853620/v853620310/8b798/9oXzqbsBC7E.jpg?size=1620x2160&quality=96&sign=d9b104b13cfdbb3051310dc7532671f7&type=album"
        },
        {
            id: 2,
            name: "Viktor",
            img: "https://sun9-82.userapi.com/impf/c849228/v849228191/1b48e0/nnAlZE_qRkM.jpg?size=1000x1333&quality=96&sign=f9ea54a14718773e540314954b6d4d7f&type=album"
        },
        {
            id: 3,
            name: "Daniil",
            img: "https://sun9-58.userapi.com/impg/y4Bx2Ye5UVEc8am1imSzYfWi5Kei5Jt9EGf6WQ/imSzL23BdL0.jpg?size=852x1280&quality=95&sign=5c2c86b57fef7c5078973fe3f85d5ed1&type=album"
        }
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Wa yo do?"},
        {id: 3, message: "Yo"}
    ],


};

const dialogsReducer = (state = initialState ,action ) => {

    switch (action.type) {
                case SEND_MESSAGE:{
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => {return {type: SEND_MESSAGE, newMessageBody}}


export default dialogsReducer;