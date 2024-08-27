import Popup from "reactjs-popup";

const GridView = ({ students }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {students.map((student) => (
        <div key={student.id} className="bg-white shadow-md rounded p-4">
          <h2 className="text-lg">{student.name}</h2>
          <p className="text-gray-600">{student.email}</p>
          <p className="text-gray-600">{student.phone}</p>
          <Popup
            modal
            closeOnDocumentClick
            trigger={
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
            }
            position="right center"
          >
            <div className="p-5">
              <img
                src={student.image}
                className="mb-3"
                width={100}
                alt={student.name}
              />
              <h2 className="text-lg">{student.name}</h2>
              <p className="text-gray-600">
                <strong>Agre:</strong> {student.age}
              </p>
              <p className="text-gray-600">
                <strong>Gender:</strong> {student.gender}
              </p>
              <address className="not-italic text-gray-600">
                <div>
                  <strong>Address:</strong>{" "}
                  {`${student.address.street} ${student.address.city} ${student.address.country}`}
                </div>
              </address>
              <div className="text-gray-600">
                <strong>Courses:</strong>
                {student.courses.map((course) => (
                  <span> {course}</span>
                ))}
              </div>
              <div className="text-gray-600 mb-3">
                <strong>GAP:</strong> {student.gpa}
              </div>
              <button className="mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
                Edit
              </button>
              <button className="mr-2 bg-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Flag
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </Popup>
        </div>
      ))}
    </div>
  );
};

export default GridView;
