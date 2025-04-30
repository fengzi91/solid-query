import { query } from '@solidjs/router'

const todos = [
  { id: 1, title: 'Learn SolidJS', completed: true },
  { id: 2, title: 'Learn React', completed: false },
  { id: 3, title: 'Learn Vue', completed: false },
  { id: 4, title: 'Learn Angular', completed: true },
  { id: 5, title: 'Learn Svelte', completed: false },
  { id: 6, title: 'Learn NextJS', completed: false },
]
export const getTodos = query(async (type: 'all' | 'active' | 'completed') => {
  'use server'
  await new Promise((resolve) => setTimeout(resolve, 1000))
  if (type === 'all') {
    return todos
  }
  if (type === 'active') {
    return todos.filter((todo) => !todo.completed)
  }
  return todos.filter((todo) => todo.completed)
}, 'todos')
