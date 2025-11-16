import myGif from './assets/gif.gif';
import './App.css';

function App() {
  return (
    <>
      <div>
        {/* <p className='maroma'>Maroma, mándame el audio ya</p> */}
          <img src={myGif} className="myGif" alt="my Gif" />

      </div>
    </>
  );
}

export default App;
