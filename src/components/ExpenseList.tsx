import type { Expense } from "@/types";
import React from "react";

type Props = {
  expenses: Expense[];
  onDelete: (id: Expense["id"]) => void;
};

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <div className="flex flex-col justify-center mt-10 w-full max-w-lg mx-auto">
      <h2 className="text-2xl mb-6 text-black font-bold">Your Expenses</h2>
      <ul className="space-y-4">
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className="flex justify-between items-center bg-white shadow-md px-6 py-4 rounded-md"
          >
            <div className="text-lg text-black p-3">
              <span className="text-lg font-semibold">{expense.name} - </span>
              <span className="text-blue-500">
                ${expense.cost.toFixed(2)}
              </span>
            </div>
            <button type="button"
              onClick={() => onDelete(expense.id)}
              className="text-red-500 border border-red-400 rounded-lg p-2 px-4 font-semibold"
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