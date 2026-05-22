import Navbar from "./components/Navbar";
import Card from "./components/Card";
import StudentTable from "./components/StudentTable";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Total Students"
            value="7"
          />

          <Card
            title="Courses"
            value="7"
          />

          <Card
            title="Attendance"
            value="92%"
          />
        </div>

        <StudentTable />
      </div>
    </div>
  );
}

export default App;