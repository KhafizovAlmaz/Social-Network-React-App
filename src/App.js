import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import React, {Suspense, useEffect} from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";
import {Navigate} from "react-router";

const SettingsC = React.lazy(() => import('./components/Settings/SettingsContainer'));

const App = (props) => {
    useEffect(() => {
        props.initializeApp();
    },[props.initialized])

    if (!props.initialized) {
        return <Preloader/>
    }
    return (
        <div className="App-wrapper" role={'main'}>
            {props.isAuth ? <HeaderContainer/> : ""}
            {props.isAuth ? <Navbar/> : ""}
            <div className={props.isAuth ? "app-wrapper-content" : "login"}>
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                    <Route path="/profile/" element={<ProfileContainer/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/settings" element={
                        <Suspense fallback={<div>Загрузка...</div>}>
                            <SettingsC/>
                        </Suspense>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route exact path="/" element={props.initialized ? <Navigate to="/profile" /> : <Login/>}/>
                </Routes>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
});

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const SamuraiJSAPP = (props) => {
    //hashRouter используется только в целях правильной работы ссылок при перезагрузке страницы на gh
    return <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SamuraiJSAPP;