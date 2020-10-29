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
    question: "What are the Nook family's names?",
    answers: [
      { answer: "Tammy, Tim, and Tony", isCorrect: false, score: 0 },
      { answer: "Tommy, Toony, and Toon", isCorrect: false, score: 0 },
      { answer: "Tom, Tommy, and Timmy", isCorrect: true, score: 1 },
      { answer: "Tom, Tilly, and Tam", isCorrect: false, score: 0 },
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
    question: "Which of the following is NOT an island visitor on New Horizons?",
    answers: [
      { answer: "Wisp", isCorrect: false, score: 0 },
      { answer: "Redd", isCorrect: false, score: 0 },
      { answer: "CJ", isCorrect: false, score: 0 },
      { answer: "Tipper", isCorrect: true, score: 1 },
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
    question: "What day of the week does Daisy Mae visit the island?",
    answers: [
      { answer: "Sunday", isCorrect: true, score: 1 },
      { answer: "Monday", isCorrect: false, score: 0 },
      { answer: "Wednesday", isCorrect: false, score: 0 },
      { answer: "Saturday", isCorrect: false, score: 0 },
    ],
  },
  {image: q7,
    question: "Which of the following is a DIY set that becomes available during the spring season?",
    answers: [
      { answer: "Mermaid DIY", isCorrect: false, score: 0 },
      { answer: "Bamboo DIY", isCorrect: true, score: 1 },
      { answer: "Mushroom DIY", isCorrect: false, score: 0 },
      { answer: "Pumpkin DIY", isCorrect: false, score: 0 },
    ],
  }
];

export default QuizData;
