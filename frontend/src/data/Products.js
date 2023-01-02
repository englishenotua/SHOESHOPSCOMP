const products = [
  {
    _id: '1',
    name: 'Puma',
    image:
      'https://res.cloudinary.com/dt8rnqppu/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1665838324/cld-sample-5.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting in',
    price: 792,
    countInStock: 10,
    rating: 1,
    numReviews: 2,
  },
  {
    _id: '2',
    name: 'Adidas',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_zBjxoq-mRSbbjOIJJ80TMXrDfsi3tqz1g&usqp=CAU',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting in',
    price: 890,
    countInStock: 3,
    rating: 4,
    numReviews: 10,
  },
  {
    _id: '3',
    name: 'Nike',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMGmcfYbBeNNoKygnq-qpJ0JHBp2x0cJXWtw&usqp=CAU',
    description: 'Гарні стильні туфлі на каблуці з крокодилячоЇ шкіри',
    price: 329,
    countInStock: 10,
    rating: 5,
    numReviews: 16,
  },
  {
    _id: '4',
    name: 'Reebock',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYXJIYJMu8UFpq1DQuUsKU89s2z-qOfDF1zQPrzcF1Q&s',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting in',
    price: 503,
    countInStock: 3,
    rating: 3,
    numReviews: 4,
  },
  {
    _id: '5',
    name: 'Crossfit',
    image:
      'https://www.mariomuzi.com.ua/resize/img/import_files/2a2a95ed5-9316-11ec-a84a-40b076dc3b97_b3f42_5b7ce6bead6075b362aebdf86bdbe149_b3f42_resize_free_241_280.jpeg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting in',
    price: 89,
    countInStock: 8,
    rating: 2,
    numReviews: 6,
  },
  {
    _id: '6',
    name: 'Bloombow',
    image:
      'data:image/jpeg;base64,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',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting in',
    price: 189,
    countInStock: 15,
    rating: 4,
    numReviews: 7,
  },
  {
    _id: '7',
    name: 'Sneeker',
    image: 'https://intertop.ua/load/ZW6967/412x550/MAIN.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting in',
    price: 399,
    countInStock: 11,
    rating: 5,
    numReviews: 18,
  },
  {
    _id: '8',
    name: 'Inbom',
    image: 'https://intertop.ua/load/PY1459/412x550/MAIN.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting in',
    price: 294,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
];

export default products;
