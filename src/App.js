import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";

function App(props) {
  return (
    <div className="App">
        <Header />
        <Nav state={props.state.navSection} />
        <div className="wrapper__content">
            <Routes>
                <Route path="/" element={<Profile state={props.state.profilePage} addPost={props.addPost} changePostText={props.changePostText} />} />
                <Route path="/profile" element={<Profile state={props.state.profilePage} addPost={props.addPost} changePostText={props.changePostText}  />} />
                <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />} />
                <Route path="/music" element={<Music />} />
                <Route path="/news" element={<News />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
