import React, { useState } from 'react';
import data from './data';
function App() {
  const[count, setCount] = useState(0);
  const[text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    let numberCount = parseInt(count);

    if(count <= 0){
      numberCount = 1;
    }
    if(count >= data.length) {
      numberCount = data.length;
    }
    setText(data.slice(0, numberCount));
  }

  return (
    <section className="section-center">
      <h2>Random Text Generator</h2>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="generateCount">Numbers of Paragraph</label>
        <input type="number" id="generateCount" value={count} onChange={(e) => setCount(e.target.value)} />
        <button type="submit" className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
    )
}

export default App;
