import { useRef, useState } from 'react';
import { CategoryContainer } from './category-styled';
import CategoryItem from './CategoryItem';
import CategoryModal from './CategoryModal';

interface dummy {
  id: string;
  name: string;
}

const Category = () => {
  const [dummyCategory, setDummyCategory] = useState<dummy[]>([
    { id: '1', name: '카테고리1' },
    { id: '2', name: '카테고리2' },
    { id: '3', name: '카테고리3' },
  ]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [categoryItem, setCategoryItem] = useState<dummy>({ id: '', name: '' });

  const handleCategoryItem = (item: dummy) => {
    setCategoryItem(item);
  };

  const handleModalOpened = (isOpened: boolean) => {
    setIsModalOpened(isOpened);
  };

  const categoryRef = useRef<HTMLInputElement>(null);

  const addCategory = () => {
    categoryRef.current?.value &&
      setDummyCategory([
        ...dummyCategory,
        {
          id: String(Math.random()),
          name: categoryRef.current?.value,
        },
      ]);

    console.log(dummyCategory);
  };

  return (
    <CategoryContainer>
      <div>
        <h1>카테고리 설정</h1>
        <div>
          <input type="text" ref={categoryRef} />
          <button type="button" onClick={addCategory}>
            추가
          </button>
        </div>
        <div>
          {dummyCategory &&
            dummyCategory.length > 0 &&
            dummyCategory.map(item => {
              return (
                <CategoryItem
                  category={item}
                  key={item.id}
                  onCategoryItemChange={handleCategoryItem}
                  onModalOpenedChange={handleModalOpened}
                />
              );
            })}
        </div>
      </div>
      {isModalOpened ? (
        <div>
          <CategoryModal
            categoryItem={categoryItem}
            onModalOpenedChange={handleModalOpened}
          />
        </div>
      ) : null}
    </CategoryContainer>
  );
};

export default Category;
