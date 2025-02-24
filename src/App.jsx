import React, {useState} from "react";
import Search from "./components/Search.jsx";
const App = () => {
    const [search, setSearch] = useState('');



    return (
    <main>
      <div className={'pattern'}/>

      <div className={'wrapper'}>
        <header>
            <img src='/hero.png' alt={"Hero banner"}/>
          <h1>
            Find <span className={'gradient'}>Movies</span> You’ll Love Without the Hassle
          </h1>

            <Search search={search} setSearch={setSearch}/>
        </header>

          <div className={'text-white'}>{search}</div>
      </div>
    </main>
  )
}

export default App
