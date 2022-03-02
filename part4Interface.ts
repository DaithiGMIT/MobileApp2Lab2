//Part4 Interface

export interface part4Interface{
    tasks: Array<string>;
    addTask(x: string): number;
    listAllTasks();
    deleteTask(x: string): number;
    }