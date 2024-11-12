export type Expense = {
    id: number;
    name: string;
    cost: number;
}; 

export type ExpenseWithoutId = Omit<Expense, 'id'>;