import { useEffect, useRef, useState } from 'react';
import { CategoryModalContainer } from './category-styled';

interface Props {
  categoryItem?: { id: string; name: string };
  onModalOpenedChange: (isOpened: boolean) => void;
}

const CategoryModal = (props: Props) => {
  const categoryNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('id, name', props.categoryItem);

    if (props.categoryItem && categoryNameRef.current) {
      categoryNameRef.current.value = props.categoryItem.name;
    }
  }, [props]);

  const closeModal = () => {
    props.onModalOpenedChange(false);
  };

  const editCategoryName = () => {
    console.log('edit', props.categoryItem?.id, categoryNameRef.current?.value);
    closeModal();
  };

  return (
    <CategoryModalContainer>
      <button type="button" onClick={closeModal}>
        닫기
      </button>
      <div>
        <input type="text" ref={categoryNameRef} />
      </div>
      <button type="button" onClick={editCategoryName}>
        완료
      </button>
    </CategoryModalContainer>
  );
};

export default CategoryModal;
