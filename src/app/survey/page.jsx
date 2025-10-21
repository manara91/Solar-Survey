"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from "@/elements/Button/Button";

import QuestionOne from '../components/Questions/QuestionOne'; 
import QuestionTwo from '../components/Questions/QuestionTwo'; 
import QuestionThree from '../components/Questions/QuestionThree'; 
import QuestionFour from '../components/Questions/QuestionFour'; 
import QuestionFive from '../components/Questions/QuestionFive'; 



export default function SurveyPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const router = useRouter();

const goToNextQuestion = () => {
    if (currentQuestion < 5) { // افترض أن لديك 5 أسئلة
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // إذا كان هذا هو السؤال الأخير (السؤال 5)، نقوم بالتنقل إلى صفحة النتيجة
      // router.push('/results'); 
      console.log("انهاء الاستبيان!");
    }
  };

  const renderCurrentQuestion = () => {
    switch (currentQuestion) {
      case 1:
        return <QuestionOne />;
      case 2:
        return <QuestionTwo />;

          case 3:
        return <QuestionThree />;

          case 4:
        return <QuestionFour />;

          case 5:
        return <QuestionFive />;
      
      default:
        return <div>شكراً لإكمال الاستبيان!</div>;
    }
  };


  return (
    <div className="survey-container">

      {renderCurrentQuestion()}
          


      <Button
        text="Nächste Frage" 
        handleClick={goToNextQuestion}
        ></Button>

     
    </div>
  );
}