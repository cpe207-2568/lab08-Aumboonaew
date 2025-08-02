import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskInput from "./components/TaskInput";
import TaskCard from "./components/TaskCard";
import Footer from "./components/Footer";
import type { TaskCardProps } from "./libs/types";

function App() {
  const tasks: TaskCardProps[] = [
    {
      id: 1,
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: 2,
      title: "Write code",
      description: "Finish project for class",
      isDone: true,
    },
    {
      id: 3,
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: false,
    },
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />

      <div className="d-flex flex-grow-1">
        <Sidebar userName="aumboon" type="admin" />

        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <TaskInput />

            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                isDone={task.isDone}
              />
            ))}
          </main>
        </div>
      </div>

      <Footer year="2025" fullName="Aumboon Naewsuk" studentId="640612197" />
    </div>
  );
}

export default App;
