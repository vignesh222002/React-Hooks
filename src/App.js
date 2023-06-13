// import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';
import Greet  from './components/Greet';
import Welcome from './components/class';
import Gallery from './components/Gallery';
import Message from './components/Message';
import Greetings from './components/Greetings';
import ListRendering from './components/ListRendering';
import IndexedKey from './components/indexedKey';
import UseState from './components/Hooks';
import SetState from './components/Hooks';
import StateObj from './components/Hooks';
import StateArray from './components/Hooks';
import UseEffect from './components/Hooks';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import Parent from './components/Memo/Parent';
import UseMemo from './components/Memo/UseMemo';
import ComponentA from './components/Context/ComponentA';
import CounterOne from './components/Reducer.js/CounterOne';
import CounterTwo from './components/Reducer.js/CounterTwo';
import ChangeTitle from './components/CustomHooks/ChangeTitle';
import ChangeCounter from './components/CustomHooks/ChangeCounter';
import ChangeInputForm from './components/CustomHooks/ChangeInputForm';
import FormEvents from './components/Basic/FormEvents';
import Proptypes from './components/Basic/PropTypes';


function App() {
  console.log('nantha da gta vignesh!');
  return (
    <div className="App">

      {/* <Proptypes name="vignesh" age={21} email="gtavignesh@gmail.com" children= {["vicky", "perumal"]}/> */}
      {/* <FormEvents /> */}
      {/* <ChangeInputForm /> */}
      {/* <ChangeCounter /> */}
      {/* <ChangeTitle /> */}
      {/* <CounterTwo /> */}
      <CounterOne />
      {/* <ComponentA /> */}
      {/* <UseMemo /> */}
      {/* <Parent /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <UseEffect /> */}
      {/* <StateArray /> */}
      {/* <StateObj /> */}
      {/* <SetState /> */}
      {/* <UseState /> */}
      {/* <IndexedKey /> */}
      {/* <ListRendering /> */}
      {/* <Greetings /> */}
      {/* <Message /> */}
      {/* <Greet name="Vignesh" surName="Wara" /> */}
      {/* <Greet name="Vignesh" surName="perumal" /> */}
      {/* <Welcome name="Vignesh" surName="Wara" /> */}
      {/* <Gallery /> */}
    </div>
  );
}

export default App;
