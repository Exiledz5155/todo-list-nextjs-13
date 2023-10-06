import Link from "next/link";
import { TodoItem } from "../components/TodoItem";
import prisma from "../db";

function getTodos() {
  return prisma.todo.findMany();
}

// Next js allows us to directly call server instead of using fetch or query
// So we can make Home async
export default async function Home() {
  // array
  const todos = await getTodos();
  // prisma.todo.create({ data: { title: "tests", complete: false } });

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1">Todos</h1>
        {/* Create a link button with outline and hover */}
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded
         hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      {/* Unordered list */}
      <ul className="pl-4">
        {/* Call todos const and render list (li) items showing the todo title from prisma */}
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
