import React, { useEffect, useState } from 'react'
import './NewsDisplay.css'
import newsImg from '../../assets/newsImage.png'
const NewsDisplay = ({about}) => {
    const [Articles, setArticles] = useState([]);
    const API_KEY = "e0d525f97a8142b79c43f6b96807d03a";
    useEffect(() => {
        const getNews = async () => {
            try {
                const res = await fetch(
                    `https://newsapi.org/v2/everything?q=${about}&from=2026-01-24&sortBy=publishedAt&apiKey=${API_KEY}`
                );
                const data = await res.json();
                if (!data.articles || data.articles.length === 0) {
                    throw new Error("No news found");
                }
                setArticles(data.articles.splice(0,10));
                console.log(data.article[0]);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };
        getNews();
    }, [about])
    
        
    return (    
        <div className='newsContainer'>
            {
                Articles.map((article,index) => {
                    return (
                        <div className="newsDisplay" key={index}>
                            <div className="imgContainer">
                                <img src={article.urlToImage || newsImg} alt="news Image" />
                            </div>
                            <div className="newsContent">
                                <h2 className="newsheading">{article.title || "news heading"}</h2>
                                <p className="newsDescription">{article.description || "news content"}</p>
                                <div className="infoContainer">
                                    <h3 className='source'>{article.source.name || "source "}</h3>
                                    <h3 className='author'>{article.author || "author"}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })
            }            
        </div>
    )
}

export default NewsDisplay
