import React, { useContext } from "react";

import { Questions } from "../Helpers/Questions";

import { motion } from "framer-motion";

import { QuizContext } from "../Helpers/QuizContext.js";

const EndScreen = () => {
  const { Score, setScore, setGameState } = useContext(QuizContext);
  return (
    <motion.div
      className="endscreen"
      initial={{ opacity: "0", scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h1>Finished</h1>
      <h3>
        {Score} / {Questions.length}
      </h3>

      <motion.button
        onClick={() => {
          setGameState("menu");
          setScore(0);
        }}
        whileHover={{ scale: 1.1 }}
      >
        Again! 
      </motion.button>
    </motion.div>
  );
};

export default EndScreen;
