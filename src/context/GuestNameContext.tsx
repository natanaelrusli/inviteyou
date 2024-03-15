import { Dispatch, SetStateAction, createContext } from "react";

interface GuestDataItf {
  name: string;
  age: number;
  phone: string;
  RSVP: boolean;
  wishes: string;
}

interface GuestContextItf {
  guest: GuestDataItf;
  setGuest: Dispatch<SetStateAction<GuestDataItf>>;
}

const initialUserState: GuestDataItf = {
  name: "",
  age: 0,
  phone: "",
  RSVP: false,
  wishes: "",
};

export const GuestContext = createContext<GuestContextItf>({
  guest: initialUserState,
  setGuest: () => {},
});
