export interface ContactProps {
  onClick?: any;
  id: number;
  fl: string;
  firstName: string;
  lastName: string;
  rel: string;
  numbers: NumberProps[];
}

export interface NumberProps {
  type: string;
  number: string;
}
