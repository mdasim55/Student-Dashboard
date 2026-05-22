const students = [
  {
    id: 1,
    name: "Alex",
    course: "React",
    status: "Present"
  },
  {
    id: 2,
    name: "John",
    course: "Java",
    status: "Absent"
  },
  {
    id: 3,
    name: "Sam",
    course: "SQL",
    status: "Present"
  },
  {
    id: 4,
    name: "Emma",
    course: "TypeScript",
    status: "Present"
  },
  {
    id: 5,
    name: "David",
    course: "Node.js",
    status: "Absent"
  },
  {
    id: 6,
    name: "Sophia",
    course: "Python",
    status: "Present"
  },
  {
    id: 7,
    name: "Michael",
    course: "MongoDB",
    status: "Present"
  }
];

function StudentTable() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Recent Students
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Course</th>
            <th className="text-left p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.course}</td>
              <td className="p-2">{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;