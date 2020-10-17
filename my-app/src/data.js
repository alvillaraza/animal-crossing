import q1 from "./images/q1.jpg";
import q2 from "./images/q2.jpg";
import q3 from "./images/q3.jpg";
import q4 from "./images/q4.png";
import q5 from "./images/q5.jpg";
import q6 from "./images/q6.jpg";
import q7 from "./images/q7.jpg";

const QuizData = [
  {
    image: q1,
    question: "Which of the following names is NOT one of the Nook clan?",
    answers: [
      { answer: "Timmy", isCorrect: false, score: 0 },
      { answer: "Tommy", isCorrect: false, score: 0 },
      { answer: "Tammy", isCorrect: true, score: 1 },
      { answer: "Tom", isCorrect: false, score: 0 },
    ],
  },
  {image: q2,
    question:
      "Not only are some of Crazy Redd's paintings fake, but they're haunted too! What does the girl in the haunted Wistful Painting do?",
      answers: [
        { answer: "She winks at you", isCorrect: false, score: 0 },
        { answer: "She picks her nose", isCorrect: false, score: 0 },
        { answer: "Her earring falls off", isCorrect: false, score: 0 },
        { answer: "She closes her eyes", isCorrect: true, score: 1  },
      ],
  },
  {image: q3,
    question: "Which of these bugs is NOT available to catch in Animal Crossing: New Horizons?",
    answers: [
      { answer: "Titan Beetle", isCorrect: true, score: 1 },
      { answer: "Rice Grasshopper", isCorrect: false, score: 0 },
      { answer: "Wasp", isCorrect: false, score: 0 },
      { answer: "Giant Waterbug", isCorrect: false, score: 0 },
    ],
  },
  {image: q4,
    question: "Bunny Day has been and gone this year, but what’s the name of the rabbit who runs it?",
    answers: [
      { answer: "Bumper", isCorrect: false, score: 0 },
      { answer: "Thumper", isCorrect: false, score: 0 },
      { answer: "Tipper", isCorrect: false, score: 0 },
      { answer: "Zipper", isCorrect: true, score: 1 },
    ],
    
  },
  {image: q5,
    question: "Which of the following is NOT a fruit you can grow in New Horizons?",
    answers: [
      { answer: "Coconuts", isCorrect: false, score: 0 },
      { answer: "Cherries", isCorrect: false, score: 0 },
      { answer: "Kiwis", isCorrect: true, score: 1 },
      { answer: "Pears", isCorrect: false, score: 0 },
    ],
  },
  {image: q6,
    question: "What's the name of the turnip seller who visits your island on Sunday mornings?",
    answers: [
      { answer: "Daisy Mae", isCorrect: true, score: 1 },
      { answer: "Mary Sue", isCorrect: false, score: 0 },
      { answer: "Sonny Jim", isCorrect: false, score: 0 },
      { answer: "Tina Turnip", isCorrect: false, score: 0 },
    ],
  },
  {image: q7,
    question: "In total, how many fish are there to catch in Animal Crossing: New Horizons?",
    answers: [
      { answer: "75", isCorrect: false, score: 0 },
      { answer: "80", isCorrect: true, score: 1 },
      { answer: "90", isCorrect: false, score: 0 },
      { answer: "100", isCorrect: false, score: 0 },
    ],
  }
];

export default QuizData;
