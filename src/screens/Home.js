import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
const {height, width} = Dimensions.get('screen');
const list = [
  {label: 'sort by Rating', value: '1'},
  {label: 'sort by Discount', value: '2'},
  {label: 'sort by Price', value: '3'},
];
const dataProduct = [
  {
    id: 1,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 2,

    title: 'iPhone X',

    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',

    price: 899,

    discountPercentage: 17.94,

    rating: 4.44,

    stock: 34,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/2/1.jpg',

      'https://i.dummyjson.com/data/products/2/2.jpg',

      'https://i.dummyjson.com/data/products/2/3.jpg',

      'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    ],
  },
  {
    id: 3,

    title: 'Samsung Universe 9',

    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",

    price: 1249,

    discountPercentage: 15.46,

    rating: 4.09,

    stock: 36,

    brand: 'Samsung',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',

    images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
  },

  {
    id: 4,

    title: 'OPPOF19',

    description: 'OPPO F19 is officially announced on April 2021.',

    price: 280,

    discountPercentage: 17.91,

    rating: 4.3,

    stock: 123,

    brand: 'OPPO',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/4/1.jpg',

      'https://i.dummyjson.com/data/products/4/2.jpg',

      'https://i.dummyjson.com/data/products/4/3.jpg',

      'https://i.dummyjson.com/data/products/4/4.jpg',

      'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    ],
  },

  {
    id: 5,

    title: 'Huawei P30',

    description:
      'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',

    price: 499,

    discountPercentage: 10.58,

    rating: 4.09,

    stock: 32,

    brand: 'Huawei',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/5/1.jpg',

      'https://i.dummyjson.com/data/products/5/2.jpg',

      'https://i.dummyjson.com/data/products/5/3.jpg',
    ],
  },

  {
    id: 6,

    title: 'MacBook Pro',

    description:
      'MacBook Pro 2021 with mini-LED display may launch between September, November',

    price: 1749,

    discountPercentage: 11.02,

    rating: 4.57,

    stock: 83,

    brand: 'Apple',

    category: 'laptops',

    thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',

    images: [
      'https://i.dummyjson.com/data/products/6/1.png',

      'https://i.dummyjson.com/data/products/6/2.jpg',

      'https://i.dummyjson.com/data/products/6/3.png',

      'https://i.dummyjson.com/data/products/6/4.jpg',
    ],
  },

  {
    id: 7,

    title: 'Samsung Galaxy Book',

    description:
      'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',

    price: 1499,

    discountPercentage: 4.15,

    rating: 4.25,

    stock: 50,

    brand: 'Samsung',

    category: 'laptops',

    thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/7/1.jpg',

      'https://i.dummyjson.com/data/products/7/2.jpg',

      'https://i.dummyjson.com/data/products/7/3.jpg',

      'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
    ],
  },
  {
    id: 8,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 9,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 10,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 11,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 12,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 13,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 14,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 15,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 16,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 17,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 19,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 20,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 21,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 22,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 23,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 24,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 25,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 26,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 27,

    title: 'iPhone X',

    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',

    price: 899,

    discountPercentage: 17.94,

    rating: 4.44,

    stock: 34,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/2/1.jpg',

      'https://i.dummyjson.com/data/products/2/2.jpg',

      'https://i.dummyjson.com/data/products/2/3.jpg',

      'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    ],
  },
  {
    id: 28,

    title: 'Samsung Universe 9',

    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",

    price: 1249,

    discountPercentage: 15.46,

    rating: 4.09,

    stock: 36,

    brand: 'Samsung',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',

    images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
  },

  {
    id: 29,

    title: 'OPPOF19',

    description: 'OPPO F19 is officially announced on April 2021.',

    price: 280,

    discountPercentage: 17.91,

    rating: 4.3,

    stock: 123,

    brand: 'OPPO',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/4/1.jpg',

      'https://i.dummyjson.com/data/products/4/2.jpg',

      'https://i.dummyjson.com/data/products/4/3.jpg',

      'https://i.dummyjson.com/data/products/4/4.jpg',

      'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    ],
  },

  {
    id:30,

    title: 'Huawei P30',

    description:
      'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',

    price: 499,

    discountPercentage: 10.58,

    rating: 4.09,

    stock: 32,

    brand: 'Huawei',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/5/1.jpg',

      'https://i.dummyjson.com/data/products/5/2.jpg',

      'https://i.dummyjson.com/data/products/5/3.jpg',
    ],
  },

  {
    id: 31,

    title: 'MacBook Pro',

    description:
      'MacBook Pro 2021 with mini-LED display may launch between September, November',

    price: 1749,

    discountPercentage: 11.02,

    rating: 4.57,

    stock: 83,

    brand: 'Apple',

    category: 'laptops',

    thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',

    images: [
      'https://i.dummyjson.com/data/products/6/1.png',

      'https://i.dummyjson.com/data/products/6/2.jpg',

      'https://i.dummyjson.com/data/products/6/3.png',

      'https://i.dummyjson.com/data/products/6/4.jpg',
    ],
  },

  {
    id: 32,

    title: 'Samsung Galaxy Book',

    description:
      'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',

    price: 1499,

    discountPercentage: 4.15,

    rating: 4.25,

    stock: 50,

    brand: 'Samsung',

    category: 'laptops',

    thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/7/1.jpg',

      'https://i.dummyjson.com/data/products/7/2.jpg',

      'https://i.dummyjson.com/data/products/7/3.jpg',

      'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
    ],
  },
  {
    id: 33,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 34,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 35,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 36,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 37,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 38,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 41,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 42,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 43,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 44,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 45,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 46,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 47,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 48,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 58,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 49,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 50,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 51,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 52,

    title: 'iPhone X',

    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',

    price: 899,

    discountPercentage: 17.94,

    rating: 4.44,

    stock: 34,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/2/1.jpg',

      'https://i.dummyjson.com/data/products/2/2.jpg',

      'https://i.dummyjson.com/data/products/2/3.jpg',

      'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    ],
  },
  {
    id: 53,

    title: 'Samsung Universe 9',

    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",

    price: 1249,

    discountPercentage: 15.46,

    rating: 4.09,

    stock: 36,

    brand: 'Samsung',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',

    images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
  },

  {
    id: 54,

    title: 'OPPOF19',

    description: 'OPPO F19 is officially announced on April 2021.',

    price: 280,

    discountPercentage: 17.91,

    rating: 4.3,

    stock: 123,

    brand: 'OPPO',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/4/1.jpg',

      'https://i.dummyjson.com/data/products/4/2.jpg',

      'https://i.dummyjson.com/data/products/4/3.jpg',

      'https://i.dummyjson.com/data/products/4/4.jpg',

      'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    ],
  },

  {
    id: 55,

    title: 'Huawei P30',

    description:
      'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',

    price: 499,

    discountPercentage: 10.58,

    rating: 4.09,

    stock: 32,

    brand: 'Huawei',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/5/1.jpg',

      'https://i.dummyjson.com/data/products/5/2.jpg',

      'https://i.dummyjson.com/data/products/5/3.jpg',
    ],
  },

  {
    id: 56,

    title: 'MacBook Pro',

    description:
      'MacBook Pro 2021 with mini-LED display may launch between September, November',

    price: 1749,

    discountPercentage: 11.02,

    rating: 4.57,

    stock: 83,

    brand: 'Apple',

    category: 'laptops',

    thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',

    images: [
      'https://i.dummyjson.com/data/products/6/1.png',

      'https://i.dummyjson.com/data/products/6/2.jpg',

      'https://i.dummyjson.com/data/products/6/3.png',

      'https://i.dummyjson.com/data/products/6/4.jpg',
    ],
  },

  {
    id: 57,

    title: 'Samsung Galaxy Book',

    description:
      'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',

    price: 1499,

    discountPercentage: 4.15,

    rating: 4.25,

    stock: 50,

    brand: 'Samsung',

    category: 'laptops',

    thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/7/1.jpg',

      'https://i.dummyjson.com/data/products/7/2.jpg',

      'https://i.dummyjson.com/data/products/7/3.jpg',

      'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
    ],
  },
  {
    id: 58,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id:59,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 60,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 61,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 62,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 63,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 64,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 65,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 66,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 67,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 69,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 70,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 71,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 72,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 73,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 74,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 75,
    title: 'iPhone 9',

    description: 'An apple mobile which is nothing like apple',

    price: 549,

    discountPercentage: 12.96,

    rating: 4.69,

    stock: 94,

    brand: 'Apple',

    category: 'smartphones',

    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',

    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',

      'https://i.dummyjson.com/data/products/1/2.jpg',

      'https://i.dummyjson.com/data/products/1/3.jpg',

      'https://i.dummyjson.com/data/products/1/4.jpg',

      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
];

const Home = ({route}) => {
  console.log(route.params.data[20].category, 'params====>');
  const [data, setData] = useState(route?.params?.data);

  const renderItem = ({item}) => {
    // console.log(item);
    return (
      <View
        key={item.id}
        style={{
          width: width * 0.5,
          paddingHorizontal: 10,
          marginVertical: 10,
        }}>
        <Image
          style={{height: 120, width: width * 0.4, marginVertical: 5}}
          source={{uri: item.images[0]}}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 12,
            fontWeight: '800',
            color: 'green',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '200',
            color: '#000',
          }}>
          {item.description}
        </Text>
        {item.stock < 50 ? (
          <Text style={{color: 'red', fontSize: 12, fontWeight: '600'}}>
            hurry! only a few items left
          </Text>
        ) : null}

        <Text
          style={{
            fontSize: 12,
            fontWeight: '800',
            color: '#000',
          }}>{`discount:${item.discountPercentage}%`}</Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#000',
          }}>{`price:${item.price}`}</Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '800',
            color: '#000',
          }}>{`Rating:${item.rating}`}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, paddingTop: 10}}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            color: '#000',
            fontWeight: '800',
            textTransform: 'capitalize',
          }}>
          {route.params.category}
        </Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={list}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Select item'}
          onChange={item => {
            console.log(item);
            // setValue(item.value);
            // setIsFocus(false);
          }}
        />
        <FlatList
          data={dataProduct}
          numColumns={2}
          initialNumToRender={10}
          renderItem={item => {
            console.log('string====>', item.item);
            return renderItem(item);
            // if (item.item.category === 'groceries') {
            //   return renderItem(item);
            // }
          }}
          showsVerticalScrollIndicator={false}
        />
        {/*<ScrollView>
          {data.map(item => {
            console.log(item);
            return renderItem(item);
          })}
        </ScrollView>*/}
      </View>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    margin: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 12,
    color: 'grey',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
