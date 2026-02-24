import './App.css'
import NewsDisplay from './components/NewsDisplay/NewsDisplay'
import search from './assets/search.png'
import { useState } from 'react'
function App() {
  const [newsData, setnewsData] = useState("");
  return (
    <>
      <div className="searchContainer">
        <h2>SEARCH NEWS</h2>
        <div className="searchSection">
          <img src={search} alt="" />
          <input
            type="text"
            placeholder="Search NEWS"
            value={newsData}
            onChange={(e) => setnewsData(e.target.value)}
          />
        </div>
      </div>
      <NewsDisplay about={newsData}/>
    </>
  )
}

export default App
