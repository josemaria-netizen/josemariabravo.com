// Hand-maintained reading list, used when config.goodreadsUserId is null.
// Once the Goodreads user ID is set, the reading page pulls shelves from
// Goodreads RSS at build time and this list becomes a fallback.
export interface Book {
  title: string;
  author: string;
  note?: string;
  current?: boolean;
}

export const books: Book[] = [
  // Placeholder entries — replace with the real list or wire up Goodreads.
  {
    title: "Your currently-reading book goes here",
    author: "Author Name",
    current: true,
  },
  {
    title: "A book that shaped how you work",
    author: "Author Name",
    note: "One-line take on why it mattered.",
  },
];
