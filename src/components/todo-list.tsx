import { createAsync } from '@solidjs/router'
import { Component, For } from 'solid-js'
import { getTodos } from '~/server/data'

export const TodoList: Component<{ type: 'all' | 'active' | 'completed' }> = (props) => {
  const todos = createAsync(() => getTodos(props.type))
  return (
    <div class="p-1 flex flex-col gap-1">
      <For each={todos.latest}>{(todo) => <div class="bg-neutral-50 p-2 rounded-md">{todo.title}</div>}</For>
    </div>
  )
}
