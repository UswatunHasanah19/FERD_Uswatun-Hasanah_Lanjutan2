import React, {useState} from "react"; 

const Clock = () => {
    const [date, setDate] = useState(new Date())

function tick() {
    setDate(new Date())
      }
setInterval(() => tick(), 1000)

return (
    <div className="App">
      <h1>Realtime CLOCK</h1>
      <hr />
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;