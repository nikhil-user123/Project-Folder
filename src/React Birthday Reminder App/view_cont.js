import React, { useState } from "react";
import data from "./data";
import List from './List'

function App() {
  return (
    <main>
      <section className="containerr">
        {/* Create a h3 element below*/}
        <h3>0 birthdays today</h3>
        <List />
        {/* import and add list component here from list.jsx*/}
      </section>
    </main>
  );
}

export default App;
