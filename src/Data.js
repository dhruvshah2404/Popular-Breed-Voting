window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const Dogs = [
    {
      id: 1,
      breedName: 'Husky',
      subBreedName: 'Siberan-Husky',
      votes: generateVoteCount(),
      dogImage: "https://images.fineartamerica.com/images-medium-large-5/square-pug-banner-art.jpg",
      UserImage: 'https://i.pinimg.com/originals/32/be/bb/32bebb917ab933c5ba4ee7832f3036a0.jpg',
    },
    {
      id: 2,
      breedName: 'Husky',
      subBreedName: 'Siberan-Husky',
      votes: generateVoteCount(),
      dogImage: "https://images.fineartamerica.com/images-medium-large-5/square-pug-banner-art.jpg",
      UserImage: 'https://i.pinimg.com/originals/32/be/bb/32bebb917ab933c5ba4ee7832f3036a0.jpg',
    },
    {
      id: 3,
      breedName: 'Husky',
      subBreedName: 'Siberan-Husky',
      votes: generateVoteCount(),
      dogImage: "https://images.fineartamerica.com/images-medium-large-5/square-pug-banner-art.jpg",
      UserImage: 'https://i.pinimg.com/originals/32/be/bb/32bebb917ab933c5ba4ee7832f3036a0.jpg',
    },
    {
      id: 4,
      breedName: 'Husky',
      subBreedName: 'Siberan-Husky',
      votes: generateVoteCount(),
      dogImage: "https://images.fineartamerica.com/images-medium-large-5/square-pug-banner-art.jpg",
      UserImage: 'https://i.pinimg.com/originals/32/be/bb/32bebb917ab933c5ba4ee7832f3036a0.jpg',
    },
  ];

  return { dogs: Dogs };

}());
