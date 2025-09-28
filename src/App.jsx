import myGif from './assets/gif.gif';
import './App.css';

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={myGif} className="myGif" alt="my Gif" />
        </a>
      </div>
    </>
  );
}

export default App;
