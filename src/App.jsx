import React from "react";
const App = () => {
  return (
    <main>
      <div className={'pattern'}/>

      <div className={'wrapper'}>
        <header>
            <img src='/hero.png' alt={"Hero banner"}/>
          <h1>
            Find <span className={'gradient'}>Movies</span> You’ll Love Without the Hassle
          </h1>
        </header>
      </div>
    </main>
  )
}

export default App
