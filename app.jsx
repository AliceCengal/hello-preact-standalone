/** @jsx preact.h */

// import any hook you want to use here
var { useState, useContext, useCallback } = preactHooks;

// disgusting hack to make Babel accept ghost tags -> <></>
var React = { Fragment: preact.Fragment };

// app shared state reference
const AppCtx = preact.createContext(null);

// main entry point to the app
// setup layout and app shared states
function App(props) {

  const [Ctx, setCtx] = useState({
    incrementBy: 2,
    setIncrement: setIncrement,
  });

  function setIncrement(n) {
    setCtx({
      ...Ctx,
      incrementBy: n,
    })
  }

  return <AppCtx.Provider value={Ctx}>
    <main>
      <h1>Hellow Preact</h1>
      <FlexBox>
        <Counter />
        <SimpleForm />
        <ContextBox />
      </FlexBox>
    </main>
  </AppCtx.Provider>
}

// demo component
function Counter(props) {
  const [count, setCount] = useState(0);
  const { incrementBy } = useContext(AppCtx);

  const increment = useCallback(
    () => setCount(count + incrementBy),
    [count, incrementBy])

  return <Box>
    <h2>Counter demo</h2>

    <p>Count: {count}</p>
    <button onClick={increment}>Add</button>
  </Box>
}

// demo component
function SimpleForm(props) {

  function onSubmit(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    console.log("Username: " + data.username);
    console.log("Email: " + data.emailaddress);
  }

  return <Box classes='groovy'>
    <h2>Form Demo</h2>

    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input type='text' name='username' />

      <label>Email address</label>
      <input type='email' name='emailaddress' />

      <span></span><input type='submit' />
    </form>

    <p>Check console log for result</p>
  </Box>
}

// demo component
function ContextBox(props) {
  const { incrementBy, setIncrement } = useContext(AppCtx);

  return <Box style={{ backgroundColor: 'gray' }}>
    <h2>Context Demo</h2>

    <p>Increment value</p>
    <input type='number'
      value={incrementBy}
      onChange={(e) => setIncrement(Number(e.target.value))} />
  </Box>
}

// helper component
function Box({ children, style, classes, ...props }) {
  return <div style={{
    border: "1px solid gray",
    padding: '0.5rem',
    display: 'inline-block',
    ...style
  }}
    class={'' + classes}
    {...props}
  >
    {children}
  </div>
}

// helper component
function FlexBox({ children, style, classes, ...props }) {
  return <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    ...style
  }}
    class={'' + classes}
    {...props}
  >
    {children}
  </div>
}
