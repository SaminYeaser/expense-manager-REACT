import ExpenseItem from "./components/Expenses/ExpenseItems";
import Card from "./components/UI/Card";
import "./App.css";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <Card className="expenses">
      <h1>Hello, I am Samin</h1>
      <ExpenseItem
        title={expense[0].title}
        date={expense[0].date}
        amount={expense[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        date={expense[1].date}
        amount={expense[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        date={expense[2].date}
        amount={expense[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        date={expense[3].date}
        amount={expense[3].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default App;
