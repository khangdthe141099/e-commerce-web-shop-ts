import React from 'react'

function CommingSoon() {

  let arrTest = [
    {
      sale: {
        isSale: true,
        percent: 10,
      },
      rating: 4,
      _id: '61f1b94d1a2b7d6fc3d63492',
      title: 'Apple Watch Series 6 Soft Silicone',
      desc: 'An Apple-designed dynamic driver, powered by a custom amplifier, renders music in exceptionally detailed sound quality — so you revel in every tone, from deep, rich bass to crisp, clean highs.Covered in a special acoustic mesh, an inset microphone in each earbud minimizes wind noise when you’re on a call — so your voice is always heard loud and clear',
      img: 'https://i.pinimg.com/564x/97/f5/3e/97f53e94f6eaf944057eea589497b993.jpg',
      categories: ['apple', 'watch'],
      size: '',
      color: '',
      price: 150,
      inStock: true,
      view: 24,
      createdAt: '2022-01-26T21:12:45.755Z',
      updatedAt: '2022-01-26T21:12:45.755Z',
      __v: 0,
      quantity: 1,
      userId: '62c1077064b2efb5b62cf5b0',
    },
    {
      sale: {
        isSale: false,
        percent: 0,
      },
      rating: 4,
      _id: '61f1a88a1a2b7d6fc3d63469',
      title: 'Iphone 13 Promax Green Yellow',
      desc: 'An Apple-designed dynamic driver, powered by a custom amplifier, renders music in exceptionally detailed sound quality — so you revel in every tone, from deep, rich bass to crisp, clean highs.Covered in a special acoustic mesh, an inset microphone in each earbud minimizes wind noise when you’re on a call — so your voice is always heard loud and clear',
      img: 'https://i.pinimg.com/564x/bd/e4/52/bde4525b4d6a2b8f677fd22ae0588627.jpg',
      categories: ['apple', 'iphone'],
      size: '',
      color: '',
      price: 130,
      inStock: true,
      view: 23,
      createdAt: '2022-01-26T20:01:14.273Z',
      updatedAt: '2022-01-26T20:01:14.273Z',
      __v: 0,
      quantity: 1,
      userId: '62c1077064b2efb5b62cf5b0',
    },
    {
      sale: {
        isSale: false,
        percent: 0,
      },
      rating: 4,
      _id: '61f1a8ea1a2b7d6fc3d63473',
      title: 'Iphone 13 Promax Limited',
      desc: 'An Apple-designed dynamic driver, powered by a custom amplifier, renders music in exceptionally detailed sound quality — so you revel in every tone, from deep, rich bass to crisp, clean highs.Covered in a special acoustic mesh, an inset microphone in each earbud minimizes wind noise when you’re on a call — so your voice is always heard loud and clear',
      img: 'https://i.pinimg.com/564x/f0/56/0f/f0560f2d39dfc54c5d5e3aebec735145.jpg',
      categories: ['apple', 'iphone'],
      size: '',
      color: '',
      price: 150,
      inStock: true,
      view: 30,
      createdAt: '2022-01-26T20:02:50.692Z',
      updatedAt: '2022-01-26T20:02:50.692Z',
      __v: 0,
      quantity: 1,
      userId: '62c1077064b2efb5b62cf5b0',
    },
    {
      sale: {
        isSale: false,
        percent: 0,
      },
      rating: 4,
      _id: '61f1a9551a2b7d6fc3d63484',
      title: 'Iphone 13 Promax Mint Green',
      desc: 'An Apple-designed dynamic driver, powered by a custom amplifier, renders music in exceptionally detailed sound quality — so you revel in every tone, from deep, rich bass to crisp, clean highs.Covered in a special acoustic mesh, an inset microphone in each earbud minimizes wind noise when you’re on a call — so your voice is always heard loud and clear',
      img: 'https://i.pinimg.com/564x/e8/28/ca/e828ca6e26fda227355091110eada90c.jpg',
      categories: ['apple', 'iphone'],
      size: 'M',
      color: 'Blue',
      price: 135,
      inStock: true,
      view: 30,
      createdAt: '2022-01-26T20:04:37.178Z',
      updatedAt: '2022-01-26T20:04:37.178Z',
      __v: 0,
      quantity: 2,
      userId: '62c1077064b2efb5b62cf5b0',
    },
  ];

  const newArr = arrTest.find(product => {
    return (
      product._id === '61f1a9551a2b7d6fc3d63484' &&
      product.size === 'M' &&
      product.color === 'Blue'
    );
  });

  console.log('arrTest', arrTest)
  console.log('newArr', newArr)

  const index = arrTest.findIndex((product) => product._id === newArr._id)

  arrTest.splice(index, 1)

  console.log(arrTest)

  // console.log('hihi', arrTest.splice(index, 1))

  // console.log(arrTest)

  //  arrTest.reduce((acc, product) => {
  //   if(product._id !== '61f1a9551a2b7d6fc3d63484' &&
  //   product.size !== 'M' &&
  //   product.color !== 'Blue'){
  //     acc.push(product)
  //   }

  //   // eslint-disable-next-line no-const-assign
  //   return arrTest = acc
  // }, [])

  // console.log('hi', arrTest)

  

  return (
    <h1>Comming soon...!</h1>
  )
}

export default CommingSoon