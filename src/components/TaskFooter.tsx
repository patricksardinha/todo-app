"use client";

import type { Filter } from "@/lib/types";
import { TaskFilter } from "./TaskFilter";

type Props = {
  activeCount: number;
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
};

export function TaskFooter({ activeCount, filter, onFilterChange }: Props) {
  return (
    <div className="flex items-center justify-between border-t border-slate-200 px-3 py-2 text-xs text-slate-500">
      <span>
        {activeCount} {activeCount === 1 ? "item" : "items"} left
      </span>
      <TaskFilter value={filter} onChange={onFilterChange} />
    </div>
  );
}
