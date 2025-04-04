import "./App.css";

const MAX_GUESTS_PER_STAFF = 2;
const MAX_STAFFS_PER_MANAGER = 2;

function App() {
  return (
    <div className="App">
      <div className="Control">
        <div>
          <h2>Managers: {1}</h2>
          <div>
            <button>Increment</button>
            <button>Decrement</button>
          </div>
        </div>
      </div>
      <div className="Result">
        <h2>
          Market Status: <span>{"OPEN"}</span>
        </h2>
        <h4>{""}</h4>
        <h4>{""}</h4>
      </div>
    </div>
  );
}

export default App;
