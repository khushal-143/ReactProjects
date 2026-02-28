import React, { useEffect, useState } from 'react'
import './NewsDisplay.css'
import newsImg from '../../assets/newsImage.png'
const NewsDisplay = ({ about }) => {
    const [Articles, setArticles] = useState([]);
    const API_KEY = "51beb88e1c0e4d3a8af32970f2aa1fe4";
    useEffect(() => {
        const getNews = async () => {
            try {
                const res = await fetch(`https://newsapi.org/v2/everything?q=${about}&from=2026-01-27&sortBy=publishedAt&apiKey=${API_KEY}`);
                const data = await res.json();
                if (!data.articles || data.articles.length === 0) {
                    throw new Error("No news found");
                }
                setArticles(data.articles.splice(0, 10));
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
                Articles.map((article, index) => {
                    return (
                        <>
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
                            <hr />
                        </>
                    )
                })
            }
        </div>
    )
}

export default NewsDisplay
