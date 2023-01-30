import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
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
                <Route path="/" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dialogs/*" element={<DialogsContainer />} />
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
