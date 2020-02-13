export interface ContactProps {
  id: number;
  firstName: string;
  lastName: string;
  rel: string;
  numbers: NumberProps[];
}

export interface NumberProps {
  type: string;
  number: string;
}