import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import {
  WritePostContainer,
  WriteFormContainer,
  SubmitButtonContainer,
  InputsContainer,
  TitleInput,
  SubmitButton,
  DeleteButton,
} from './write-post-styled';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Editor, IAllProps as EditorProps } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

const EditorDynamic = dynamic(() => import('./Editor'), {
  ssr: false,
});

const EditorForwardRef = forwardRef(
  (props: EditorProps, ref: ForwardedRef<Editor>) => {
    return <EditorDynamic {...props} forwardedRef={ref} />;
  }
);

EditorForwardRef.displayName = 'Editor';

interface Props {
  isEdit?: Boolean;
}

const dummyCategory = ['카테고리1', '카테고리2', '카테고리3'];

const WritePost = ({ isEdit }: Props) => {
  const [editContent, setEditContent] = useState<string>('');
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<TinyMCEEditor | null>(null);

  const router = useRouter();
  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr'],
    ['ul', 'ol', 'task'],
    ['table', 'link'],
    // ['image'],
    ['code'],
    ['scrollSync'],
  ];

  useEffect(() => {
    console.log('edit', isEdit);
    if (router.isReady && isEdit) {
      const { id } = router.query;
      console.log('id', id);

      titleRef.current && (titleRef.current.value = '수정 타이틀' + id);
      setEditContent('edit');
    }
  }, [router, isEdit]);

  const handleSubmit = () => {
    const title = titleRef.current?.value;
    const content  = contentRef.current?.getContent()

    console.log('content : ', content)

    if (!titleRef.current?.value) {
      return titleRef.current?.focus();
    }

    if (content?.trim() === '') {
      return contentRef.current?.focus()
    }

    const innerHTMLText = contentRef.current?.getContent();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = innerHTMLText as string;
    const text = tempDiv.textContent;

    console.log(text);
    console.log('^^^ text');

    // const textInner = contentRef.current?.getRootElement().innerText;
    // const textOnly = contentRef.current?.getRootElement().textContent;
    // const root = contentRef.current?.getRootElement();

    // console.log('text', { textInner, textOnly, root });

    // console.log('저장', { title, content });
  };

  const handleDelete = () => {
    console.log('삭제');
  };

  return (
    <WritePostContainer>
      <WriteFormContainer>
        <SubmitButtonContainer>
          {isEdit ? (
            <SubmitButton type="button" onClick={handleSubmit}>
              완료
            </SubmitButton>
          ) : (
            <SubmitButton type="button" onClick={handleSubmit}>
              저장
            </SubmitButton>
          )}

          <DeleteButton type="button" onClick={handleDelete}>
            삭제
          </DeleteButton>
        </SubmitButtonContainer>
        <InputsContainer>
          <TitleInput
            name="title"
            placeholder="제목을 입력하세요"
            type="text"
            ref={titleRef}
          />
          <div style={{ height: '400px' }}>
            <EditorForwardRef
              onInit={(evt, editor) => {
                contentRef.current = editor // eslint-disable-line
              }}
              initialValue={editContent || ''}
              init={{
                placeholder: '플레이스홀더에요'
              }}
              // previewStyle={'tab'}
              // height="100%"
              // initialEditType="wysiwyg"
              // useCommandShortcut={false}
              // usageStatistics={false}
              // hideModeSwitch={true}
              // toolbarItems={toolbarItems}
            />
          </div>
        </InputsContainer>
      </WriteFormContainer>
    </WritePostContainer>
  );
};

export default WritePost;
