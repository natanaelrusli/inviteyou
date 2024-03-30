export interface GuestDataItf {
  name: string;
  age: number;
  phone: string;
  RSVP: boolean;
  wishes: string;
}

export interface ImageItf {
  src: string;
  title: string;
}

export interface ImageSliderItf {
  images?: ImageItf[];
}
