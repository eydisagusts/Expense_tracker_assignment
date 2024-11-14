import type React from 'react';
import { useState, useContext } from 'react';
import type { ExpenseWithoutId } from '@/types';
import { LoginContext } from '@/app/context/LoginContext';

type Props = {
    onAddExpense: (expense: ExpenseWithoutId) => Promise<void>;
};

const AddExpenseForm = ({ onAddExpense }: Props) => {
const [name, setName] = useState('');
const [cost, setCost] = useState('');
const { login } = useContext(LoginContext);

const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (name && cost) {
        onAddExpense({ name, cost: Number.parseFloat(cost) });
        setName('');
        setCost('');
    } if (!login) {
        alert('You must be logged in to add an expense.');
    }
};

return (
    <form
    onSubmit={handleSubmit}
    className='flex flex-col justify-center mt-10 bg-white shadow-lg rounded-lg p-6 border border-gray-200 w-full max-w-lg mx-auto dark:bg-gray-500 dark:border-gray-800'
    >
        <h2 className='text-2xl mb-4 font-bold text-black dark:text-white'>Add New Expense</h2>
        <div className='space-y-4'>
            <input
            type='text'
            placeholder='Expense Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-3 text-black border border-gray-200 rounded-lg focus: dark:bg-gray-300 dark:placeholder:text-black'
            />
            <input 
            type='number'
            placeholder='Cost'
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className='w-full p-3 text-black border border-gray-200 rounded-lg focus: dark:bg-gray-300 dark:placeholder:text-black'
            />
            <button
            type='submit'
            className={`w-full py-3 bg-blue-600 text-white font-semibold rounded-lg ${login ? "hover:bg-blue-700 dark:hover:bg-gray-900" : "cursor-not-allowed bg-gray-500 dark:bg-gray-400"} dark:bg-gray-800 dark:text-blue-500`}
            >
                Add Expense
            </button>
        </div>
    </form>
);
};

export default AddExpenseForm;