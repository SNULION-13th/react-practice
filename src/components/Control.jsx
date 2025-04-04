import { useDarkMode } from "../contexts";

export const Control = ({
  onIncrementButtonClick,
  onDecrementButtonClick,
  children,
}) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="Control" data-dark-mode={isDarkMode}>
      <div>
        {children}
        <div>
          <button onClick={onIncrementButtonClick}>Increment</button>
          <button onClick={onDecrementButtonClick}>Decrement</button>
        </div>
      </div>
    </div>
  );
};
