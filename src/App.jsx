import "./App.css";
import { useState, useEffect } from "react";
const MAX_GUESTS_PER_STAFF = 2;
const MAX_STAFFS_PER_MANAGER = 2;

import { Control, MarketStatus } from "./components";
import { useDarkMode } from "./contexts";
function App() {
  const [guestCount, setGuestCount] = useState(0);
  const [managerCount, setManagerCount] = useState(1);
  const [staffCount, setStaffCount] = useState(1);

  const [isMoreStaffNeeded, setIsMoreStaffNeeded] = useState(false);
  const [isMoreManagerNeeded, setIsMoreManagerNeeded] = useState(false);
  const [isMarketOpen, setIsMarketOpen] = useState(true);

  const { isDarkMode, toggleDarkMode } = useDarkMode();

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

  useEffect(() => {
    // Check if we need more staff
    if (guestCount > staffCount * MAX_GUESTS_PER_STAFF) {
      setIsMoreStaffNeeded(true);
    } else {
      setIsMoreStaffNeeded(false);
    }
  }, [guestCount, staffCount]);

  useEffect(() => {
    if (staffCount > managerCount * MAX_STAFFS_PER_MANAGER) {
      setIsMoreManagerNeeded(true);
    } else {
      setIsMoreManagerNeeded(false);
    }
  }, [staffCount, managerCount]);

  useEffect(() => {
    if (isMoreStaffNeeded || isMoreManagerNeeded) {
      setIsMarketOpen(false);
    } else {
      setIsMarketOpen(true);
    }
  }, [isMoreManagerNeeded, isMoreStaffNeeded]);

  return (
    <div className="App" data-dark-mode={isDarkMode}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="ControlContainer">
        <Control
          onIncrementButtonClick={incrementManagerCount}
          onDecrementButtonClick={decrementManagerCount}
        >
          <h2>Managers: {managerCount}</h2>
        </Control>
        <Control
          onIncrementButtonClick={incrementStaffCount}
          onDecrementButtonClick={decrementStaffCount}
        >
          <h2>Staffs: {staffCount}</h2>
        </Control>
        <Control
          onIncrementButtonClick={incrementGuestCount}
          onDecrementButtonClick={decrementGuestCount}
        >
          <h2>Guests: {guestCount}</h2>
        </Control>
      </div>
      <MarketStatus
        isMarketOpen={isMarketOpen}
        isMoreStaffNeeded={isMoreStaffNeeded}
        isMoreManagerNeeded={isMoreManagerNeeded}
      />
    </div>
  );
}

export default App;
