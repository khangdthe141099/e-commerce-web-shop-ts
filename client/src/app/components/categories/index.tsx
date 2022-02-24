import React from "react";
import { Container } from "./categories.elements";
import { categories } from "../../../utils/mock-data/data";
import CategoryItem from "../category-item";
import { Item } from '../product/types'

function Categories() {
  return (
    <Container>
      {categories.map((category: Item, index) => (
        <CategoryItem category={category} key={index} />
      ))}
    </Container>
  );
}

export default Categories;
