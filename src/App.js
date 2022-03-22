import VoiceToText from './pages/voicetotext/Voicetotext';
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import Option from './components/Option/Option';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;