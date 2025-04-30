import { createSignal, Suspense } from 'solid-js'
import { TodoList } from '~/components/todo-list'

export default function Home() {
  const [filter, setFilter] = createSignal<'all' | 'active' | 'completed'>('all')
  return (
    <main class="max-w-md mx-auto bg-neutral-200 min-h-screen">
      <div class="font-medium text-2xl px-4 py-2">Todo List</div>
      <div class="px-4 py-2 flex gap-2">
        <span class="font-medium text-2xl">Filter:</span>
        <button class="px-2 py-1 rounded-md" classList={{ 'bg-green-50 text-green-700': filter() === 'all', 'bg-neutral-300': filter() !== 'all' }} onClick={() => setFilter('all')}>
          All
        </button>
        <button class="px-2 py-1 rounded-md" classList={{ 'bg-green-50 text-green-700': filter() === 'active', 'bg-neutral-300': filter() !== 'active' }} onClick={() => setFilter('active')}>
          Active
        </button>
        <button class="px-2 py-1 rounded-md" classList={{ 'bg-green-50 text-green-700': filter() === 'completed', 'bg-neutral-300': filter() !== 'completed' }} onClick={() => setFilter('completed')}>
          Completed
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList type={filter()} />
      </Suspense>
    </main>
  )
}
