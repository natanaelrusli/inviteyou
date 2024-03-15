import { useSearchParams } from "react-router-dom";

const ConfirmationPage = () => {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("name");
  const rsvp = searchParams.get("rsvp");

  return (
    <div>
      <h1>Thank you {guestName}</h1>
      {rsvp === "true" ? (
        <p>We will be expecting you!</p>
      ) : (
        <p>We will not be expecting you :(</p>
      )}
    </div>
  );
};

export default ConfirmationPage;
