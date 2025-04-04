import { useDarkMode } from "../contexts";

export const MarketStatus = ({
  isMarketOpen,
  isMoreStaffNeeded,
  isMoreManagerNeeded,
}) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="Result" data-dark-mode={isDarkMode}>
      <h2>
        {/* You can use ternary operator to dynamically render div content */}
        Market Status: <span>{isMarketOpen ? "OPEN" : "CLOSED"}</span>
      </h2>
      <h4>{isMoreStaffNeeded ? "Not enough staff" : ""}</h4>
      <h4>{isMoreManagerNeeded ? "Not enough managers" : ""}</h4>
    </div>
  );
};
