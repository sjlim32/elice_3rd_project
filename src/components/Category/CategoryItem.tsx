import { useEffect, useRef, useState } from 'react';
import { CategoryItemContainer } from './category-styled';

const dummyCategory = ['카테고리1', '카테고리2', '카테고리3'];

interface Props {
  category: {
    id: Number;
    name: String;
  };
}

const CategoryItem = ({ category }: Props) => {
  const editCategory = () => {
    console.log(`${category.id} 편집`);
  };

  const deleteCategory = () => {
    console.log(`${category.id} 삭제`);
  };

  useEffect(() => {
    console.log('cat', category);
  }, []);

  return (
    <CategoryItemContainer>
      <p>{category.name}</p>
      <div>
        <button type="button" onClick={editCategory}>
          편집
        </button>
        <button type="button" onClick={deleteCategory}>
          삭제
        </button>
      </div>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
