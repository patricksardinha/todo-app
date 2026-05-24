"use client";

import type { Task } from "@/lib/types";
import { TaskItem } from "./TaskItem";

type Props = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TaskList({ tasks, onToggle, onDelete }: Props) {
  if (tasks.length === 0) {
    return (
      <p className="px-3 py-6 text-center text-sm text-slate-400">
        No tasks yet.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-slate-200">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
