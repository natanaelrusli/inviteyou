import { useSearchParams } from "react-router-dom";

const ConfirmationPage = () => {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("name");

  return (
    <div>
      <h1>Thank you {guestName}</h1>
      <p>We will be expecting you!</p>
    </div>
  );
};

export default ConfirmationPage;
