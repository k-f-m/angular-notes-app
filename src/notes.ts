// Represent a note object with an ID, title, and text
export interface Note {
  id: number;
  title: string;
  text: string;
}

// Define an array of sample note objects
export const NOTES: Note[] = [
  {
    id: 1,
    title: 'Creative Ideas',
    text: 'Brainstorming session: ...',
  },
  {
    id: 2,
    title: 'Shopping List',
    text: 'Groceries to buy: apples, pasta, laundry detergent, and toothpaste',
  },
];
