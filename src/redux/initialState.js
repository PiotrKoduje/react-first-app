const initialState = {
  columns: [
    {
      id: 1,
      listId: '1',
      title: 'Books',
      icon: 'book',
    },
    {
      id: 2,
      listId: '1',
      title: 'Movies',
      icon: 'film',
    },
    {
      id: 3,
      listId: '1',
      title: 'Games',
      icon: 'gamepad',
    },
    {
      id: 4,
      listId: '2',
      title: 'Jazz',
      icon: 'music',
    },
    {
      id: 5,
      listId: '2',
      title: 'Classical',
      icon: 'music',
    },
    {
      id: 6,
      listId: '2',
      title: 'Film',
      icon: 'music',
    }
  ],

  cards: [
    { id: 1, columnId: 1, title: 'This is Going to Hurt', isFavorite: false },
    { id: 2, columnId: 1, title: 'Interpreter of Maladies', isFavorite: false },
    { id: 3, columnId: 2, title: 'Harry Potter', isFavorite: false },
    { id: 4, columnId: 2, title: 'Star Wars', isFavorite: false },
    { id: 5, columnId: 3, title: 'The Witcher', isFavorite: false },
    { id: 6, columnId: 3, title: 'Skyrim', isFavorite: false },
    { id: 7, columnId: 4, title: 'Smells Like Teen Spirit - Możdzer, Danielsson, Fresco', isFavorite: false },
    { id: 8, columnId: 4, title: 'Somewhere Over The Rainbow - Rupert Austin', isFavorite: false },
    { id: 9, columnId: 5, title: 'Fantaisie-Impromptu - F. Chopin', isFavorite: false },
    { id: 10, columnId: 5, title: 'Clair de Lune - Debussy', isFavorite: false },
    { id: 11, columnId: 6, title: 'Tennessee - Hans Zimmer', isFavorite: false },
    { id: 12, columnId: 6, title: 'Dexter\'s Tune - Randy Newman', isFavorite: false }
  ],

  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out'
    },
   {
      id: '2',
      title: 'Music',
      description: 'The best of'
   }
  ],

  searchString: ''
  
};
  
export default initialState;