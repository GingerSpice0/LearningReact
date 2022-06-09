import "./App.css";

function App() {
  let myString = "Hello";

  const handleMouseMove = (event: React.MouseEvent) => {
    const displayHere = document.getElementById("bombastic") as HTMLDivElement;
    displayHere.innerText = `Mouse: ${event.clientX}, ${event.clientY}`;
    let colorValue = event.clientX;
    if (colorValue > 255) {
      colorValue = 255;
    }
    // 01
    // 0123456789ABCDEF
    // 8 -> 8
    // 10 -> A
    // 15 -> F  ->  1111
    // 16 -> 10
    // 32 -> 20
    // 31 -> 1F
    // 33 -> 21
    // 64 -> 40
    // 63 -> 3F
    // 61 -> 3D
    // 256 -> 100 -> 100000000
    // 255 -> FF  ->  11111111
    //        100 -> 99  FF0000
    const colorString = colorValue.toString(16).padStart(2, "0");
    displayHere.style.background = `#${colorString}0000`;

    // TODO:
    //    make it fade from green to black instead of red
    //    make it fade from blue to black
    //    Trick:  make it fade from purple to black
    //    Trick:  make it fade from white to black
  };

  return (
    <div className="App">
      <div className="FooDiv1" style={{ fontFamily: "verdana" }}>
        {myString}
      </div>
      <div className="PlayArea" onMouseMove={handleMouseMove}>
        <div id="bombastic">hahahah</div>
      </div>
    </div>
  );
}

export default App;
