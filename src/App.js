import React from 'react';


class App extends React.Component {
  render() {
    let { inp1, inp2, inp3 } = this.refs
    return (
      <div>
        <input ref={node => {
          inp1 = node
        }} type="text" /> <br /><p></p>
        <input ref={node => {
          inp2 = node
        }} type="text" /><br /><p></p>
        <input ref={node => {
          inp3 = node
        }} type="text" />  <br /><p></p>
        <button onClick={() => {
          console.log(inp1.value, inp2.value, inp3);
          inp3.value = (Number(inp1.value) + Number(inp2.value))
        }}> Calc </button>

      </div>
    );
  }
}

export default App;