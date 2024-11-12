'use client';
import React, { useEffect, useState } from 'react';
import type { Expense, ExpenseWithoutId } from '@/types';
import { getExpenses, deleteExpense, createExpense } from './services/api';
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";

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
    <div className='flex flex-col items-center p-6 bg-gray-50 min-h-screen'>
      <h1 className='text-5xl font-bold text-blue-600 mb-8'>Expense Tracker</h1>
      <div className='w-full max-2-lg'>
        <AddExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
      </div>
    </div>
  )
}

export default HomePage;
