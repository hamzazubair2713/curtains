import React, { useState } from "react";
import {
  AddIcon,
  Answer,
  MainWrapper,
  Number,
  QuestionAnswer,
  QuestionNumber,
  QuestionWrapper,
  RemoveIcon,
  ShowAnswer,
  StyledQA,
} from "./QA.styles";
import Link from "next/link";

const QA = ({ data }) => {
  const [toggle, setToggle] = useState(null);
  const handelClick = (index) => {
    // setToggle(index);
    if (toggle === index) {
      setToggle(null);
    } else {
      setToggle(index);
    }
  };
  return (
    <div className="container">
      <StyledQA>
        {data.map((elem, ind) => (
          <MainWrapper key={ind}>
            <QuestionWrapper
              onClick={() => handelClick(ind)}
              className={toggle === ind ? "expanded" : ""}
            >
              <QuestionNumber onClick={() => handelClick(ind)}>
                <QuestionAnswer $color={toggle == ind}>
                  <h2>{elem.question}</h2>
                </QuestionAnswer>
              </QuestionNumber>

              <ShowAnswer>
                {toggle == ind ? (
                  <RemoveIcon onClick={() => handelClick(ind)} />
                ) : (
                  <AddIcon onClick={() => handelClick(ind)} />
                )}
              </ShowAnswer>
            </QuestionWrapper>
            <Answer
              $height={toggle == ind ? "2000px" : "0"}
              $padding={toggle == ind}
            >
              {elem.answer?.map((elem, ind) => (
                <p key={ind}>{elem}</p>
              ))}
            </Answer>
          </MainWrapper>
        ))}
      </StyledQA>
    </div>
  );
};

export default QA;
