import { useLocalStorage } from "./useLocalStorage";
import "./theme.css";

export const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const themeClickHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={themeClickHandler}>Change Theme</button>
      </div>
    </div>
  );
};
