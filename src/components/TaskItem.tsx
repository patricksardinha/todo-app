"use client";

import type { Task } from "@/lib/types";

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <li className="flex items-center gap-3 border-b border-slate-200 px-3 py-3 last:border-b-0">
      <input
        id={`task-${task.id}`}
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="h-4 w-4 cursor-pointer rounded border-slate-300 text-slate-900 focus:ring-slate-500"
      />
      <label
        htmlFor={`task-${task.id}`}
        className={`flex-1 cursor-pointer text-sm ${
          task.completed ? "text-slate-400 line-through" : "text-slate-900"
        }`}
      >
        {task.title}
      </label>
      <button
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete task: ${task.title}`}
        className="rounded-md px-2 py-1 text-xs text-slate-400 transition hover:bg-red-50 hover:text-red-600"
      >
        Delete
      </button>
    </li>
  );
}
