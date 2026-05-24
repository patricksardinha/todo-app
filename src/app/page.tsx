"use client";

import { TaskFooter } from "@/components/TaskFooter";
import { TaskForm } from "@/components/TaskForm";
import { TaskList } from "@/components/TaskList";
import { useTasks } from "@/lib/useTasks";

export default function HomePage() {
  const {
    filteredTasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
    activeCount,
    hydrated,
  } = useTasks();

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-900">Todo</h1>
        <p className="text-sm text-slate-500">
          A simple list. Stored in your browser.
        </p>
      </header>

      <section className="rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
        <div className="border-b border-slate-200 p-3">
          <TaskForm onAdd={addTask} />
        </div>

        {hydrated ? (
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ) : (
          <p className="px-3 py-6 text-center text-sm text-slate-400">
            Loading…
          </p>
        )}

        <TaskFooter
          activeCount={activeCount}
          filter={filter}
          onFilterChange={setFilter}
        />
      </section>
    </main>
  );
}
