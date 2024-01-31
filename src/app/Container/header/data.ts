const imageFileNames: string[] = [
    '060e3cf13886404c35a24723f7a7f4bd.jpg_300x0q75.webp',
    '0cc2a4368569c4b2a94903688fe47ff1.jpg_300x0q75.webp',
    '0f97fcf14b959699c9dc4b6c9cb084a7.jpg_300x0q75.webp',
    '0fe36f0aa34514d5d7168544ed7956ce.jpg_300x0q75.webp',
    '110381155ffa7301038fb7e74c72c2b4.jpg_300x0q75.webp',
    '1229f32a8e79be2d3307f744551c081f.jpg_300x0q75.webp',
    '143faed2b90a5c039fa4d5548272d2af.jpg_300x0q75.webp',
    '14a3f2d691989124d41b4826bfd914f0.jpg_300x0q75.webp',
    '1b8e1ff09d3a02bfe51249d7dc1ef280.jpg_300x0q75.webp',
    '1f360394f645f2348970be0e7d685629.jpg_300x0q75.webp',
    '25e492d9737f7c51b1a460a24b32f4b6.jpg_300x0q75.webp',
    '2b6818cd491f0ce0e47c122f5dfd2751.jpg_300x0q75.webp',
    '3522aa1749c5c443f860a452bc7bd48c.jpg_300x0q75.webp',
    '413c5b3c0b8c10511647dd44c314c984.jpg_300x0q75.webp',
    '4212724498eab83e5be21de0ab1f07d7.jpg_300x0q75.webp',
    '431b55480f395fbee797ef1b8344ac02.jpg_300x0q75.webp',
    '51fa5e1d2338ab36007b4e3d7b37d5cd.jpg_300x0q75.webp',
    '5759844147ead5b5bc51cd52a9c13c56.jpg_300x0q75.webp',
    '58e9d2441f96ee1f63222d1a55d7d276.jpg_300x0q75.webp',
    '5a825ac6fc9654fc01e0efac7a80365b.png_300x0q75.webp',
    '6be4b4bc42d2f9c3b3c6a4608cb1800e.jpg_300x0q75.webp',
    '963b402742adcf536aaa5dc22007d65f.jpg_300x0q75.webp',
    '963cf03e23b6e2430ef23b2b0afbd32e.jpg_300x0q75.webp',
    'a7ddd05d229787690bc62b1bfb5547f5.jpg_300x0q75.webp',
    'aff6c22bbb6f9af3349a4eaa3f495a8b.jpg_300x0q75.webp',
    'b36bf3345c5b18c68b56609a82be867c.jpg_300x0q75.webp',
    'c38b100788f97e5fecd968b7adffb425.jpg_300x0q75.webp',
    'cc26fbdfcc132c1959556387c5164201.jpg_300x0q75.webp',
    'ce6f047e2a7f41a6b5a9d8a55b609fd3.jpg_300x0q75.webp',
    'd2b5ef069288318e6f4ac5bf14a0afc4.jpg_300x0q75.webp',
    'e40a5bab0ccb12e68eeb687e28850b9f.jpg_300x0q75.webp',
    'ea9351092272afa7e2011deb26bb0aaa.png_300x0q75.webp',
    'ec1aac9a60fad45f4f63e7cd4848378e.jpg_300x0q75.webp',
    'f02b2d9229df3b259f0323479cddf520.png_300x0q75.webp',
    'f0cf0e01a54573d3728cd0063438c685.png_300x0q75.webp',
    'f3e974e85ea21aa310eead48a1ee8442.jpg_300x0q75.webp',
    'f74f37c0028366cc5b07ba924ee36503.jpg_300x0q75.webp',
  ];
  
  const laptopsData: {  id: number; name: string; imageSrc: string; price: number; description: string }[][] = [];
  const itemsPerRow = 4;
 
  for (let i = 0; i < imageFileNames.length; i++) {
    const laptop = {
        id: i+1,
      name: `Laptop ${i + 1}`,
      imageSrc: `/assets/images/laptops/${imageFileNames[i]}`,
      price: generateRandomPrice(),
      description: generateRandomDescription(),
    };
  
    if (i % itemsPerRow === 0) {
      // Start a new row
      laptopsData.push([laptop]);
    } else {
      // Add to the current row
      laptopsData[laptopsData.length - 1].push(laptop);
    }
  }
  
  function generateRandomPrice(): number {
    return Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
  }
  
  function generateRandomDescription(): string {
    const descriptions = [
      'Powerful performance for all your tasks.',
      'Sleek and stylish design.',
      'High-resolution display for stunning visuals.',
      'Long-lasting battery life.',
      'Advanced features for productivity.',
    ];
  
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  }
  
  export { laptopsData };
  