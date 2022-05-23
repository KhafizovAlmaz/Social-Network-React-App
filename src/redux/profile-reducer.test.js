import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, message: "Hello there!", like: 20},
        {id: 2, message: "It's my first post", like: 12},
    ]
};
test('new post should be ADDED', () => {
   //1.test data
    let action = addPostActionCreator("New post addddd");


    //2.action
    let newState = profileReducer(state,action);
    //3.expection
     expect(newState.posts.length).toBe(3) ;
});
test('new message should be', () => {
   //1.test data
    let action = addPostActionCreator("New post addddd");

    //2.action
    let newState = profileReducer(state,action);
    //3.expection
     expect(newState.posts[2].message).toBe("New post addddd") ;
});

test('after deleting length of posts should be decrement', () => {
   //1.test data
    let action = deletePost (1);

    //2.action
    let newState = profileReducer(state,action);
    //3.expection
     expect(newState.posts.length).toBe(1) ;
});








