import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

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
