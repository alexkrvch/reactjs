import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Nav />
            <div className="wrapper__content">
                <Routes>
                    <Route path="/" element={<Profile postData={props.postData} />} />
                    <Route path="/profile" element={<Profile postData={props.postData} />} />
                    <Route path="/dialogs/*" element={<Dialogs dialogsData={props.dialogsData} messageData={props.messageData} />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
