import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  WritePostContainer,
  WriteFormContainer,
  SubmitButtonContainer,
  InputsContainer,
  SummaryWrapper,
} from './write-post-styled';
import { useRouter } from 'next/router';

interface Props {
  isEdit: Boolean;
}

const WritePost = ({ isEdit }: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  useEffect(() => {
    console.log('edit', isEdit);
    if (router.isReady && isEdit) {
      const { id } = router.query;
      console.log('id', id);
      titleRef.current.value = '수정 타이틀' + id;
      contentRef.current.value = '수정 내용' + id;
      summaryRef.current.value = '수정 요약' + id;
    }
  }, [router]);

  // useEffect(() => {
  //   if (router.isReady) {
  //     const { id } = router.query;
  //     console.log('id', id);
  //   }
  // }, [router]);

  const handleSubmit = () => {
    if (!titleRef.current?.value) {
      return titleRef.current?.focus();
    }

    if (!contentRef.current?.value) {
      return contentRef.current?.focus();
    }

    const title = titleRef.current?.value;
    const content = contentRef.current?.value;
    const summary = summaryRef.current?.value;
    console.log('저장', title, content, summary);
  };

  const handleDelete = () => {
    console.log('삭제');
  };

  const getSummary = () => {
    const summary = '요약';
    if (summaryRef.current) summaryRef.current.value = summary;
  };

  return (
    <WritePostContainer>
      <WriteFormContainer>
        <SubmitButtonContainer>
          <span onClick={handleSubmit}>저장</span>
          <span onClick={handleDelete}>삭제</span>
        </SubmitButtonContainer>
        <InputsContainer>
          <input
            name="title"
            placeholder="제목을 입력하세요"
            type="text"
            ref={titleRef}
          />
          <input
            name="content"
            placeholder="내용을 입력하세요"
            type="text"
            ref={contentRef}
          />
          <SummaryWrapper>
            <span onClick={getSummary}>요약하기</span>
            <input name="summary" type="text" ref={summaryRef} />
          </SummaryWrapper>
        </InputsContainer>
      </WriteFormContainer>
    </WritePostContainer>
  );
};

export default WritePost;
