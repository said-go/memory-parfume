const photoFiles = [
  'perfume-01.jpg',
  'perfume-02.jpg',
  'perfume-03.jpg',
  'perfume-04.jpg',
  'perfume-05.jpg',
  'perfume-06.jpg',
  'perfume-07.jpg',
  'perfume-08.jpg',
  'perfume-09.jpg',
  'perfume-10.jpg',
  'perfume-11.jpg',
  'perfume-12.jpg',
  'perfume-13.jpg',
  'perfume-14.jpg',
  'perfume-15.jpg',
  'perfume-16.jpg'
];

export function getProductPhotos(product) {
  const numericId = Number(product.id.replace(/\D/g, '')) || 1;
  const start = (numericId - 1) % photoFiles.length;
  return [0, 1, 2].map((offset) => `${import.meta.env.BASE_URL}perfumes/${photoFiles[(start + offset) % photoFiles.length]}`);
}
