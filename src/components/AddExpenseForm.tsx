import type React from 'react';
import { useState } from 'react';
import type { ExpenseWithoutId } from '@/types';

type Props = {
    onAddExpense: (expense: ExpenseWithoutId) => Promise<void>;
};

const AddExpenseForm = ({ onAddExpense }: Props) => {
const [name, setName] = useState('');
const [cost, setCost] = useState('');

const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (name && cost) {
        onAddExpense({ name, cost: Number.parseFloat(cost) });
        setName('');
        setCost('');
    }
};

return (
    <form
    onSubmit={handleSubmit}
    className='flex flex-col justify-center mt-10 bg-white shadow-lg rounded-lg p-6 border border-gray-200 w-full max-w-lg mx-auto'
    >
        <h2 className='text-2xl mb-4 font-bold text-black'>Add New Expense</h2>
        <div className='space-y-4'>
            <input
            type='text'
            placeholder='Expense Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-3 text-black border border-gray-200 rounded-lg focus: '
            />
            <input 
            type='number'
            placeholder='Cost'
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className='w-full p-3 text-black border border-gray-200 rounded-lg focus: '
            />
            <button
            type='submit'
            className='w-full py-3 bg-blue-600 text-white font-semibold rounded-lg'
            >
                Add Expense
            </button>
        </div>
    </form>
);
};

export default AddExpenseForm;