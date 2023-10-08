"use client";

// Defining a type
type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items=center">
      {/* check box */}
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        // line through and dim text color when checked
        className="cursor-pointer peer-checked:line-through
      peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
