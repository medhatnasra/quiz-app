import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/Questions";

import { QuizContext } from "../Helpers/QuizContext.js";
import { motion } from "framer-motion";

const Quiz = () => {
  const { Score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setcurrQuestion] = useState(0);
  const [Answer, setAnswer] = useState("");

  const Handlenext = () => {
    setAnswer("");
    if (Questions[currQuestion].asnwer == Answer) {
      setScore(Score + 1);
    }

    setcurrQuestion(currQuestion + 1);
  };

  const Finish = () => {
    localStorage.setItem("score", Score);

    if (Questions[currQuestion].asnwer == Answer) {
      setScore(Score + 1);
      localStorage.setItem("score", Score);
    }
    setGameState("end");
  };
  return (
    <motion.div
      className="quiz"
      initial={{ x: "100vh", scale: 0 }}
      animate={{ x: "0", scale: 1 }}
    >
      <h2>{Questions[currQuestion].prompt}</h2>
      <div className="btn-container">
        <motion.button
          onClick={() => {
            setAnswer("optionA");
          }}
          whileHover={{ scale: 1.1, fontWeight: 700 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.13 }}
        >
          {Questions[currQuestion].optionA}
        </motion.button>
        <motion.button
          onClick={() => {
            setAnswer("optionB");
          }}
          whileHover={{ scale: 1.1, fontWeight: 700 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
        >
          {Questions[currQuestion].optionB}
        </motion.button>
        <motion.button
          onClick={() => {
            setAnswer("optionC");
          }}
          whileHover={{ scale: 1.1, fontWeight: 700 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.17 }}
        >
          {Questions[currQuestion].optionC}
        </motion.button>
        <motion.button
          onClick={() => {
            setAnswer("optionD");
          }}
          whileHover={{ scale: 1.1, fontWeight: 700 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.19 }}
        >
          {Questions[currQuestion].optionD}
        </motion.button>
      </div>
      <p className="pagin">
        {currQuestion + 1} / {Questions.length}
      </p>

      {currQuestion === Questions.length - 1 ? (
        <motion.button
          onClick={Finish}
          className="btn-finish"
          whileHover={{ scale: 1.1 }}
        >
          Finsh
        </motion.button>
      ) : (
        <motion.button
          onClick={Handlenext}
          className="btn-next"
          whileHover={{ scale: 1.1 }}
        >
          Next
        </motion.button>
      )}
    </motion.div>
  );
};

export default Quiz;
