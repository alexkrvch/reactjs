import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <Profile />
        <Footer />
    </div>
  );
}

export default App;
