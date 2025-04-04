import "./App.css";
import { useState } from "react";
const MAX_GUESTS_PER_STAFF = 2;
const MAX_STAFFS_PER_MANAGER = 2;

function App() {
  const [guestCount, setGuestCount] = useState(0);
  const [managerCount, setManagerCount] = useState(1);
  const [staffCount, setStaffCount] = useState(1);

  const incrementManagerCount = () => {
    setManagerCount(managerCount + 1);
  };

  const decrementManagerCount = () => {
    setManagerCount(managerCount - 1);
  };

  const incrementStaffCount = () => {
    setStaffCount(staffCount + 1);
  };

  const decrementStaffCount = () => {
    setStaffCount(staffCount - 1);
  };

  const incrementGuestCount = () => {
    setGuestCount(guestCount + 1);
  };

  const decrementGuestCount = () => {
    setGuestCount(guestCount - 1);
  };

  if (guestCount > staffCount * MAX_GUESTS_PER_STAFF) {
    console.log("More staff needed");
  } else {
    console.log("No need for more staff");
  }

  if (staffCount > managerCount * MAX_STAFFS_PER_MANAGER) {
    console.log("More manager needed");
  } else {
    console.log("No need for more manager");
  }
  return (
    <div className="App">
      <div className="ControlContainer">
        <div className="Control">
          <div>
            <h2>Managers: {managerCount}</h2>
            <div>
              <button onClick={incrementManagerCount}>Increment</button>
              <button onClick={decrementManagerCount}>Decrement</button>
            </div>
          </div>
        </div>
        <div className="Control">
          <div>
            <h2>Staffs: {staffCount}</h2>
            <div>
              <button onClick={incrementStaffCount}>Increment</button>
              <button onClick={decrementStaffCount}>Decrement</button>
            </div>
          </div>
        </div>
        <div className="Control">
          <div>
            <h2>Guests: {guestCount}</h2>
            <div>
              <button onClick={incrementGuestCount}>Increment</button>
              <button onClick={decrementGuestCount}>Decrement</button>
            </div>
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
