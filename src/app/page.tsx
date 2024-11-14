'use client';
import React, { useEffect, useState } from 'react';
import type { Expense, ExpenseWithoutId } from '@/types';
import { getExpenses, deleteExpense, createExpense } from './services/api';
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import LoginButton from '@/components/LoginButton';
import { LoginProvider } from './context/LoginContext';
import DarkModeButton from '@/components/DarkModeButton';
import { DarkModeProvider } from './context/DarkModeContext';

const HomePage = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (e) {
        console.log('Error: ', e);
      }
    };
    fetchExpenses();
  }, []);

  const handleAddExpense = async (expense: ExpenseWithoutId) => {
    try {
      const response = await createExpense(expense);
      setExpenses([...expenses, response.expense]);
    } catch (e) {
      console.error('Error adding expense: ', e);
    }
  };

  const handleDeleteExpense = async (id: Expense['id']) => {
    try {
      await deleteExpense(id);
      setExpenses(expenses.filter((expense) => expense.id !== id));
    } catch (e) {
      console.log('Error deleting expense: ', e);
    }
  };

  return (
    <DarkModeProvider>
    <LoginProvider>
        <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen relative dark:bg-gray-800">
            <h1 className="text-5xl font-bold text-blue-600 mb-8 dark:text-blue-400">Expense Tracker</h1>
            <div className="absolute top-0 right-36 mt-6 ml-96">
                <LoginButton />
            </div>
            <div className=' absolute top-0 right-0 mt-6 mr-6'>
              <DarkModeButton />
            </div>
            <div className="w-full max-w-2xl">
                <AddExpenseForm onAddExpense={handleAddExpense} />
                <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
            </div>
        </div>
    </LoginProvider>
    </DarkModeProvider>
);
};

export default HomePage;
