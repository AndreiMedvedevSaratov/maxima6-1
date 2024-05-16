import { useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const TestCommentsDetails = () => {
  const { id, slug } = useParams();

  console.log(id, slug);

  const user = useSelector((state) => state.users.user);
  console.log(user);

  const navigate = useNavigate();
  console.log("navigate", navigate);

  const searchParams = useSearchParams();
  console.log(searchParams);

  return (
    <div>
      <h2>Comment Detail</h2>
      <p>Comment ID: {id}</p>
      <p>User Name: {user.name}</p>
      <button onClick={() => navigate(`/users/`)}>Go to Users</button>
    </div>
  );
};

export default TestCommentsDetails;
