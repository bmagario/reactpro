import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterReducerComp } from "./bases/CounterReducerComp";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr/>
      <Counter initialValue={ 15 } />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComp />
    </>
  );
}

export default App;
