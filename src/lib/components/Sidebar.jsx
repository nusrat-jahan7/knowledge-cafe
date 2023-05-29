/* eslint-disable react/prop-types */
const Sidebar = ({ count}) => {
//   const [titles, setTitles] = useState([]);

  return (
    <div className="mt-5 sticky top-20 ms-3">
      <div>
        <button className="btn btn-outline font-bold text-violet-600">
          Spent time on read : {count} min
        </button>
      </div>
      <div className="mt-5 p-3 bg-violet-100 rounded text-xl font-bold">
        <h1>Bookmarked Blogs : 0</h1>
      </div>
      {/* <div>
        {titles.map((title, index) => (
          <p key={index}>{title}</p>
        ))}
      </div> */}
    </div>
  );
};

export default Sidebar;
