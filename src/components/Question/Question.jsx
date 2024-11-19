import React from "react";
import { QuestionHead } from "./Question.styles";
import QA from "./QA";
const questionDataArray = [
  {
    question: "How much does curtain and window installation cost in Dubai?",
    answer: [
      "The cost of curtains and blinds installation can vary depending on factors such as the size and the type of curtains, but investing in quality installation services is a worthwhile investment.",
    ],
  },
  {
    question: "How much does curtain and window installation cost in Dubai?",
    answer: [
      "The cost of curtains and blinds installation can vary depending on factors such as the size and the type of curtains, but investing in quality installation services is a worthwhile investment.",
    ],
  },
];
const Question = ({ bg, data = questionDataArray }) => {
  return (
    <>
      <QuestionHead>
        <h3>Frequetly Asked Questions</h3>
      </QuestionHead>
      <QA data={data} />
    </>
  );
};

export default Question;
