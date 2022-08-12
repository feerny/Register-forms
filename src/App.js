import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Body from './components/body/Body.jsx'
import './App.css';

function App() {
  return (
    <div className="App">

      <Header 
      title="Forms|Pepe"
      intagram="https://www.instagram.com/ferrer_343/"
      git="https://github.com/feerny"
      face="https://web.facebook.com/pepe.onisama/"
       />


      <Body />


       <Footer />

    </div>
  );
}

export default App;
