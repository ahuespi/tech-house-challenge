import React from 'react'
import TasksList from "@/app/mis-tareas/page";

export default function Home() {
  return (
    <div className="px-4 py-8 m-auto max-w-lg">
      <h2 className="text-neutral-60 text-xl font-bold ">Mis tareas</h2>
      <TasksList />
    </div>
  );
};

