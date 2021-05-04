export interface ITodosStore {
  todos: ITodo[]
  setTodos: (todos: ITodo[]) => void
  pushTodo: (todo: ITodo) => void
  getTodos: () => Promise<ITodo[]>
  createTodo: (todo: ITodo) => Promise<ITodo>
  deleteTodo: (todo: ITodo) => Promise<unknown>
  // setTodoComplete: (opts: { id: string; data: unknown }) => Promise<unknown>
}

export interface ITodo {
  id?: string
  text: string
  timeCreated: Date
  isComplete?: boolean
}
