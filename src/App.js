import VoiceToText from './pages/voicetotext/Voicetotext';
import Home from './pages/home/Home';
import About from './pages/about/About';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;