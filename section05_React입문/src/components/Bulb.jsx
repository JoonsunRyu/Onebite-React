import {useState} from 'react';

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  // let light = "OFF";  이렇게 하면 변수 값은 바뀌지만, 화면에 다시 렌더링되지 않음 (state 사용하는 이유)
  console.log(light);

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button
          onClick = {() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
    </div>
  );
};

export default Bulb;