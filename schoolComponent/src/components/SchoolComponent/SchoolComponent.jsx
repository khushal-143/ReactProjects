import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import bot from '../../assets/bot.png'
import "./SchoolComponent.css";

const initialQues = [
  {
    question: "How Do I Apply for Admission ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aspernatur.",
  },
  {
    question: "Are Scholarships or Financial Aids Available ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aspernatur.",
  },
  {
    question: "Is there an admission test or interview ?",
    answer:
      "For early classes, admission is usually based on basic interaction with the child and parents. The process is kept simple and child-friendly.",
  },
  {
    question: "Are Scholarships or Financial Aids Available ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aspernatur.",
  },
];

const moreQue = [
  {
    question: "Is transport facility available?",
    answer:
      "Yes, transport is available for selected routes across the city.",
  },
];

const SchoolComponent = () => {
  const [ques, setQues] = useState(initialQues);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMoreBtn, setShowMoreBtn] = useState(true);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleMoreQues = () => {
    setQues((prevFaqs) => [...prevFaqs, ...moreQue]);
    setShowMoreBtn(false);
  };

  return (

    // Questions and Answers Container 

    <div className="QNASection">
      <h3>
        FREQUENTLY A<span>SKED QUESTIONS</span>
      </h3>

      {/* Qustions */}

      <div className="questionSection">
        {ques.map((item, index) => (
          <div key={index}
            className={`Question ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAnswer(index)}>
            <div className="QuestionContainer">
              <p>{item.question}</p>
              <RiArrowDropDownLine
                className="dropdownArrow"
                style={{
                  transform:activeIndex === index? "rotate(180deg)": "rotate(0deg)",transition: "0.3s ease",
                }}
              />
            </div>

            {/* Answers */}

            <p className={`answers ${activeIndex === index ? "showAnswer" : ""}`}>
              {item.answer}
            </p>
          </div>
        ))}

        {/* More Questions Display */}

        {showMoreBtn && (
          <div className="moreQue">
            <button onClick={toggleMoreQues}>
              SEE MORE QUESTIONS -
            </button>
          </div>
        )}
      </div>

      {/* Bot Image */}

      <img className='botImg' src={bot} alt="bot Image" />
    </div>
  );
};

export default SchoolComponent;