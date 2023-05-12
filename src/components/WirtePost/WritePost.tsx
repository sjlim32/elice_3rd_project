import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  WritePostContainer,
  WriteFormContainer,
  SubmitButtonContainer,
  InputsContainer,
  TitleInput,
  SubmitButton,
  DeleteButton,
  SelectAndButtonsContainer,
  CategorySelectWrapper,
  SummaryContainer,
  SummaryButtonWrapper,
  SuggestImage,
  SummaryTextarea,
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

interface Option {
  id: string;
  value: string;
}

const WritePost = ({ isEdit }: Props) => {
  const [editContent, setEditContent] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<TinyMCEEditor | null>(null);
  const summaryRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const options: Option[] = [
    { id: '1', value: 'option1option1option1option1' },
    { id: '2', value: 'option2' },
    { id: '3', value: 'option3' },
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selected = options.find(option => option.value === selectedValue);
    setSelectedOption(selected || null);
  };

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
    const summary = summaryRef.current?.value;

    const contentText = contentRef.current?.getBody().textContent;

    if (!title) {
      alert('제목을 입력하세요');
      titleRef.current?.focus();
      return;
    }
    if (!content) {
      alert('내용을 입력하세요');
      contentRef.current?.focus();
      return;
    }

    console.log('text : ', contentText);
    console.log('title : ', title);
    console.log('content : ', content);
    console.log('summary : ', summary);
    console.log('option : ', selectedOption);
  };

  const handleDelete = () => {
    console.log('삭제');
  };

  const handleSummary = () => {
    summaryRef.current && (summaryRef.current.value = '요약추천입니다아아아아');
  };

  return (
    <WritePostContainer>
      <WriteFormContainer>
        <SelectAndButtonsContainer>
          <CategorySelectWrapper>
            <select
              value={selectedOption?.value || ''}
              onChange={handleSelectChange}
            >
              <option value="" className="defaultSelect">
                카테고리 선택
              </option>
              {options.map(option => (
                <option key={option.id} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </CategorySelectWrapper>
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
        </SelectAndButtonsContainer>
        <InputsContainer>
          <TitleInput
            name="title"
            placeholder="제목을 입력하세요"
            type="text"
            ref={titleRef}
          />
          <SummaryContainer>
            <SummaryButtonWrapper>
              <SuggestImage
                src="/images/lightbulb.svg"
                alt="한 줄 요약 추천받기"
                width="25"
                height="25"
              />
              <button type="button" onClick={handleSummary}>
                한 줄 요약 추천받기
              </button>
            </SummaryButtonWrapper>
            <SummaryTextarea
              ref={summaryRef}
              placeholder="한 줄 요약을 추천받아보세요"
            />
          </SummaryContainer>
          <div style={{ height: '600px' }}>
            <EditorForwardRef
              onInit={(evt, editor) => {
                contentRef.current = editor;
              }}
              initialValue={editContent || ''}
              init={{
                height: '100%',
                placeholder: '내용을 입력하세요',
                font_family_formats: 'Noto Sans KR',
                plugins:
                  'lists link paste codesample emoticons wordcount image',
                menubar: 'insert | format | tools',
                toolbar:
                  'undo redo | blocks | formatselect | bold italic | emoticons codesample image | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent ',
                image_title: false,
              }}
            />
          </div>
        </InputsContainer>
      </WriteFormContainer>
    </WritePostContainer>
  );
};

export default WritePost;
