import { motion } from "framer-motion";
import React, { useContext, useRef } from "react";
import { Questions } from "../Helpers/Questions";
import { QuizContext } from "../Helpers/QuizContext";

const MainMenu = (props) => {
  const { setGameState, setError, Error } = useContext(QuizContext);

  const nameInput = useRef();

  const HandleQuiz = () => {
    if (nameInput.current.value !== "") {
      setGameState("quiz");
      setError(false);
    } else {
      setError(true);
    }
  };

  const consom = () => {
    let data = localStorage.getItem("score");
    return data ? JSON.parse(data) + " / " + Questions.length : "";
  };

  return (
    <motion.div className="mainmenu" initial={{ y: -250 }} animate={{ y: 0 }}>
      <label> Enter your Name</label>
      <input
        type="text"
        name=""
        id=""
        placeholder="Ex. john smith"
        ref={nameInput}
        style={Error ? { border: "1px solid red" } : {}}
      />
      <motion.button onClick={HandleQuiz} whileHover={{ scale: 1.1 }}>
        {" "}
        Start Quiz
      </motion.button>

      <div className="lastone">
        <h3>Last one :</h3>

        <span>{consom()}</span>
      </div>
    </motion.div>
  );
};

export default MainMenu;
