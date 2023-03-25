import './App.css';
import Banner from './components/Banner/Banner';
import { ShopContextProvider } from './components/context/ScheduleContext';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
import SocialMedia from './components/SocialMedia/SocialMedia';
import TopHeader from './components/TopHeader/TopHeader';

function App() {
  return (
    <ShopContextProvider>
      <div>
        <TopHeader></TopHeader>
        <Header></Header>
        <Schedule></Schedule>
        <SocialMedia></SocialMedia>
        <Banner></Banner>
        <Footer></Footer>
      </div>
    </ShopContextProvider>
  );
}

export default App;
