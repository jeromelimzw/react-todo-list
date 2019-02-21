const randGen = () => {
  return Math.round(Math.random() * 10000000000);
};

const todos = [
  {
    name: "buy milk",
    isCompleted: true,
    id: randGen()
  },
  { name: "buy eggs", isCompleted: false, id: randGen() },
  { name: "learn mongoDB", isCompleted: false, id: randGen() },
  { name: "learn react", isCompleted: false, id: randGen() },
  { name: "learn javascript", isCompleted: true, id: randGen() },
  { name: "buy cheese", isCompleted: false, id: randGen() },
  { name: "buy orange juice", isCompleted: false, id: randGen() },
  { name: "learn angular", isCompleted: false, id: randGen() },
  { name: "learn vue", isCompleted: false, id: randGen() }
];

export default todos;
