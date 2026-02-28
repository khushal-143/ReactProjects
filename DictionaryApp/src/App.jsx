import './App.css'
import { useEffect, useState } from 'react';
import search from './assets/search.png'
import WordCard from './components/WordCard/WordCard';

function App() {
  const [word, setWord] = useState("");
  const [wordInfo, setwordInfo] = useState(null);

  useEffect(() => {
    const getMeaning = async () => {
      try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await res.json();
        console.log(data[0]);
        setwordInfo({
          name: data[0].word,
          audio: data[0].phonetics[1].audio,
          text: data[0].phonetics[0].text,
          definition: data[0].meanings[0].definitions[0].definition,
          example:data[0].meanings[0].definitions[0].example
        })
      }
      catch (err) {
        console.log(err);
      }
    }
    getMeaning();
  },[word])
  
  return (
    <>
      <div className="searchContainer">
        <h2>SEARCH MEANING</h2>
        <div className="searchSection">
          <img src={search} alt="" />
          <input
            type="text"
            placeholder="Search Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
      </div>
      <WordCard key={word.name} word={ wordInfo || ''} />
    </>
  )
}

export default App
