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
// EditorForwardRef.displayName = 'Editor';

interface Props {
  isEdit?: Boolean;
}

const WritePost = ({ isEdit }: Props) => {
  const [editContent, setEditContent] = useState<string>('');
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<TinyMCEEditor | null>(null);

  const router = useRouter();

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
    const content = contentRef.current?.getContent();
    const contentText = contentRef.current?.getBody().textContent;

    if (!title) {
      return titleRef.current?.focus();
    }
    if (!content) {
      return contentRef.current?.focus();
    }

    console.log('title : ', title);
    console.log('content : ', content);
    console.log('text : ', contentText);
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
                contentRef.current = editor; // eslint-disable-line
              }}
              initialValue={editContent || ''}
              init={{
                height: '100%',
                placeholder: '내용을 입력하세요',
                font_family_formats: 'Noto Sans KR',
                plugins: 'lists link image paste code wordcount',
                menubar: 'insert | format | tools',
                toolbar:
                  'undo redo | blocks | formatselect | bold italic |  image code | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent ',
              }}
            />
          </div>
        </InputsContainer>
      </WriteFormContainer>
    </WritePostContainer>
  );
};

export default WritePost;
