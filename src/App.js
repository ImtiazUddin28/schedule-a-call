import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
import SocialMedia from './components/SocialMedia/SocialMedia';
import TopHeader from './components/TopHeader/TopHeader';

function App() {
  return (
    <div className='App'>
     <TopHeader></TopHeader>
     <Header></Header>
     <Schedule></Schedule>
     <SocialMedia></SocialMedia>
     <Banner></Banner>
     <Footer></Footer>
    </div>
  );
}

export default App;
