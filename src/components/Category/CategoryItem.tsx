import { useEffect, useRef, useState } from 'react';
import { CategoryItemContainer } from './category-styled';

interface Props {
  category: {
    id: string;
    name: string;
  };
  onCategoryItemChange: (item: Props['category']) => void;
  onModalOpenedChange: (isOpened: boolean) => void;
}

const CategoryItem = (props: Props) => {
  const editCategory = () => {
    console.log(`${props.category.id} 편집`);
    props.onModalOpenedChange(true);
    props.onCategoryItemChange(props.category);
  };

  const deleteCategory = () => {
    console.log(`${props.category.id} 삭제`);
  };

  useEffect(() => {
    console.log('cat', props.category);
  }, []);

  return (
    <CategoryItemContainer>
      <p>{props.category.name}</p>
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
