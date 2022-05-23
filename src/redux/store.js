import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello there!", like: 20},
                {id: 2, message: "It's my first post", like: 12},
            ],
            newPostText: 'it'
        },
        dialogsPage: {
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
            newMessageBody: ""

        }

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log();
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) { //это callback функция, которая через observer возвращает ререндер из index.js
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}


export default store;