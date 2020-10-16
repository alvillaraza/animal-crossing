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
      { answer: "Timmy", isCorrect: false },
      { answer: "Tommy", isCorrect: false },
      { answer: "Tammy", isCorrect: true },
      { answer: "Tom", isCorrect: false },
    ],
  },
  {image: q2,
    question:
      "Not only are some of Crazy Redd's paintings fake, but they're haunted too! What does the girl in the haunted Wistful Painting do?",
      answers: [
        { answer: "She winks at you", isCorrect: false },
        { answer: "She picks her nose", isCorrect: false },
        { answer: "Her earring falls off", isCorrect: false },
        { answer: "She closes her eyes", isCorrect: true },
      ],
  },
  {image: q3,
    question: "Which of these bugs is NOT available to catch in Animal Crossing: New Horizons?",
    answers: [
      { answer: "Titan Beetle", isCorrect: true },
      { answer: "Rice Grasshopper", isCorrect: false },
      { answer: "Wasp", isCorrect: false },
      { answer: "Giant Waterbug", isCorrect: false },
    ],
  },
  {image: q4,
    question: "Bunny Day has been and gone this year, but what’s the name of the rabbit who runs it?",
    answers: [
      { answer: "Bumper", isCorrect: false },
      { answer: "Thumper", isCorrect: false },
      { answer: "Tipper", isCorrect: false },
      { answer: "Zipper", isCorrect: true },
    ],
    
  },
  {image: q5,
    question: "Which of the following is NOT a fruit you can grow in New Horizons?",
    answers: [
      { answer: "Coconuts", isCorrect: false },
      { answer: "Cherries", isCorrect: false },
      { answer: "Kiwis", isCorrect: true },
      { answer: "Pears", isCorrect: false },
    ],
  },
  {image: q6,
    question: "What's the name of the turnip seller who visits your island on Sunday mornings?",
    answers: [
      { answer: "Daisy Mae", isCorrect: true },
      { answer: "Mary Sue", isCorrect: false },
      { answer: "Sonny Jim", isCorrect: false },
      { answer: "Tina Turnip", isCorrect: false },
    ],
  },
  {image: q7,
    question: "In total, how many fish are there to catch in Animal Crossing: New Horizons?",
    answers: [
      { answer: "75", isCorrect: true },
      { answer: "80", isCorrect: true },
      { answer: "90", isCorrect: false },
      { answer: "100", isCorrect: false },
    ],
  }
];

export default QuizData;
