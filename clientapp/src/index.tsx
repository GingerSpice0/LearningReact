import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

document.title = "ddfdf";

const intervalDelay_ms = 200;

let counter = 1;
const intervalFunction = () => {
  document.title = "Hi " + counter;
  counter = counter + 1;
  // TODO:
  //    - Make the country count by 5
  //    - Change the title text to be something like:  Count is ([count_value])
  //          eg:   Count is (25)
  //    - Extra:  Use an 'if' statement to reset the count to zero when it gets over 100
};
setInterval(intervalFunction, intervalDelay_ms);
