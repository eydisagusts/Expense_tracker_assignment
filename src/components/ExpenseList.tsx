import type { Expense } from "@/types";
import React, {useContext} from "react";
import { LoginContext } from "../app/context/LoginContext";

type Props = {
  expenses: Expense[];
  onDelete: (id: Expense["id"]) => void;
};

const ExpenseList = ({ expenses, onDelete }: Props) => {
  const {login} = useContext(LoginContext);

  const handleDelete = (id: Expense["id"]) => {
    if (!login) {
      alert("You must be logged in to delete an item.");
      return;
    }
    onDelete(id);
  }

  return (
    <div className="flex flex-col justify-center mt-10 w-full max-w-lg mx-auto dark:bg-gray-800">
      <h2 className="text-2xl mb-6 text-black font-bold dark:text-white">Your Expenses</h2>
      <ul className="space-y-4">
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className="flex justify-between items-center bg-white shadow-md px-6 py-4 rounded-md dark:bg-gray-500"
          >
            <div className="text-lg text-black p-3">
              <span className="text-lg font-semibold dark:text-white">{expense.name} - </span>
              <span className="text-blue-500 dark:text-blue-300">
                ${expense.cost.toFixed(2)}
              </span>
            </div>
            <button type="button"
              onClick={() => handleDelete(expense.id)}
              className={`text-white rounded-lg shadow-md p-2 px-4 font-semibold dark:border-gray-400 ${
                login ? "bg-red-500 border border-red-600 hover:bg-red-700 dark:bg-gray-700 dark:text-red-500 dark:border-gray-800 dark:hover:bg-gray-800" : "cursor-not-allowed bg-gray-500 border-gray-600"
              }`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;