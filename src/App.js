import VoiceToText from './pages/voicetotext/Voicetotext';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import WordCounter from './pages/wordcounter/WordCounter';
import TextToVoice from './pages/texttovoice/TextToVoice';
import HemonGame from './pages/hemongame/HemonGame';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/voicetotext" exact={true} component={VoiceToText} />
          <Route path="/about" exact={true} component={About} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/wordcounter" exact={true} component={WordCounter} />
          <Route path="/texttovoice" exact={true} component={TextToVoice} />
          <Route path="/hemongame" exact={true} component={HemonGame} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;