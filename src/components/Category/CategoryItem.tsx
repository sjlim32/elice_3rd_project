import { useEffect, useRef, useState } from 'react';
import { CategoryItemContainer } from './category-styled';

interface Props {
  category: {
    id: string;
    name: string;
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
