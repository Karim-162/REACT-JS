const domcontainer = document.querySelector("#root");

const Increment = () => {
    const [counter, setCounter]=React.useState(0);
  return (
    <div className="center-column">
      <h1 id="display">{counter}</h1>
      <div>
        <button id="button"  onClick={() => setCounter(counter + 1)}>
          increment+
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<Increment/>, domcontainer);
