import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="m-5 p-5">
      <h1 className="font-bold text-2xl">Home</h1>
      <ul>
        <Link to="/carousel" className="underline text-blue-600">
          <li className="mb-2 mt-2">Carousel</li>
        </Link>
        <Link to="/chat" className="underline text-blue-600">
          <li className="mb-2 mt-2">Chat</li>
        </Link>
        <Link to="/countdowntimer" className="underline text-blue-600">
          <li className="mb-2 mt-2">CountdownTimer</li>
        </Link>
        <Link to="/draganddrop" className="underline text-blue-600">
          <li className="mb-2 mt-2">Drag&Drop</li>
        </Link>
        <Link to="/dropdown" className="underline text-blue-600">
          <li className="mb-2 mt-2">Dropdown</li>
        </Link>
        <Link to="/formvalidation" className="underline text-blue-600">
          <li className="mb-2 mt-2">FormValidation</li>
        </Link>
        <Link to="/infinityscroll" className="underline text-blue-600">
          <li className="mb-2 mt-2">InfinityScroll</li>
        </Link>
        <Link to="/loginform" className="underline text-blue-600">
          <li className="mb-2 mt-2">LoginForm</li>
        </Link>
        <Link to="/modal" className="underline text-blue-600">
          <li className="mb-2 mt-2">Modal</li>
        </Link>
        <Link to="/pagination" className="underline text-blue-600">
          <li className="mb-2 mt-2">Pagination</li>
        </Link>
        <Link to="/quiz" className="underline text-blue-600">
          <li className="mb-2 mt-2">Quiz</li>
        </Link>
        <Link to="/reduxstore" className="underline text-blue-600">
          <li className="mb-2 mt-2">ReduxStore</li>
        </Link>
        <Link to="/responsivelayout" className="underline text-blue-600">
          <li className="mb-2 mt-2">ResponsiveLayout</li>
        </Link>
        <Link to="/todo" className="underline text-blue-600">
          <li className="mb-2 mt-2">Todo</li>
        </Link>
        <Link to="/weather" className="underline text-blue-600">
          <li className="mb-2 mt-2">Weather</li>
        </Link>
      </ul>
    </div>
  );
};

export default Home;
