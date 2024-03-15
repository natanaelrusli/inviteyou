import { useContext } from "react";
import { GuestContext } from "../context/GuestNameContext";

const ConfirmationPage = () => {
  const { guest } = useContext(GuestContext);

  return (
    <div>
      <h1>Thank you {guest.name}</h1>
    </div>
  );
};

export default ConfirmationPage;
