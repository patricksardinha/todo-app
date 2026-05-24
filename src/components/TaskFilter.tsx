"use client";

import type { Filter } from "@/lib/types";

type Props = {
  value: Filter;
  onChange: (filter: Filter) => void;
};

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];

export function TaskFilter({ value, onChange }: Props) {
  return (
    <div className="flex gap-1" role="group" aria-label="Filter tasks">
      {FILTERS.map((f) => {
        const isActive = f.value === value;
        return (
          <button
            key={f.value}
            type="button"
            onClick={() => onChange(f.value)}
            aria-pressed={isActive}
            className={`rounded-md px-3 py-1 text-xs font-medium transition ${
              isActive
                ? "bg-slate-900 text-white"
                : "text-slate-500 hover:bg-slate-200"
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
