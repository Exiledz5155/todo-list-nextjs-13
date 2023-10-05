// Defining a type
type TodoItemProps = {
  id: string;
  title: string;
  complete: ConstrainBoolean;
};

export function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li className="flex gap-1 items=center">
      <input id={id} type="checkbox" className="cursor-pointer" />
      <label htmlFor={id} className="peer-checked:line-through">
        {title}
      </label>
    </li>
  );
}
