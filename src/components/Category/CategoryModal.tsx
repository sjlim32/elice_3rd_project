import { useEffect, useRef, useState } from 'react';
import { CategoryModalContainer } from './category-styled';
import { categoryType } from '@/types/category';
import * as API from '@/utils/api';

interface Props {
  categoryItem?: categoryType;
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


  interface jsonType {
      "userId": number,
      "id": number,
      "title": string,
      "completed": boolean
  }
  const apiTest = async () : Promise<jsonType> => {
    const response = await API.get<jsonType>('/posts');
    return response.data
  }
  const testAPI = async() => {
    const result = await apiTest()
    console.log('test', result, typeof result)
  }

 

  const closeModal = () => {
    props.onModalOpenedChange(false);
  };

  const addCategory = () => {
    console.log('add', categoryNameRef.current?.value);
  };

  const editCategoryName = () => {
    console.log('edit', props.categoryItem?.id, categoryNameRef.current?.value);
  };

  return (
    <CategoryModalContainer>
      <button type="button" onClick={closeModal}>
        닫기
      </button>
      <button type='button' onClick={testAPI}> test</button>
      <div>
        <input type="text" ref={categoryNameRef} />
      </div>
      {props.categoryItem ? (
        <button type="button" onClick={editCategoryName}>
          완료
        </button>
      ) : (
        <button type="button" onClick={addCategory}>
          추가
        </button>
      )}
    </CategoryModalContainer>
  );
};

export default CategoryModal;
