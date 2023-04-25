import { useEffect, useState } from 'react'
import {
  WritePostContainer,
  WriteFormContainer,
  SubmitButtonContainer,
  InputsContainer,
  SummaryWrapper,
} from './write-post-styled'
import { useRouter } from 'next/router'

interface Props {
  isEdit: Boolean
}

const WritePost = ({ isEdit }: Props) => {
  const [writeInputs, setWriteInputs] = useState({
    title: '',
    content: '',
    summary: '',
  })

  const router = useRouter()
  const { title, content, summary } = writeInputs

  useEffect(() => {
    console.log('edit', isEdit)
    if (isEdit) {
      setWriteInputs({
        title: 'hi',
        content: 'hihi',
        summary: 'ddd',
      })
    }
  }, [isEdit])

  useEffect(() => {
    const { id } = router.query
    console.log('id', id)
  }, [router])

  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setWriteInputs({
      ...writeInputs,
      [name]: value,
    })
  }

  const resetInputs = () => {
    setWriteInputs({
      title: '',
      content: '',
      summary: '',
    })
  }

  const handleSubmit = () => {
    const { title, content, summary } = writeInputs
    console.log('저장', title, content, summary)
    resetInputs()
  }

  const handleDelete = () => {
    console.log('삭제')
    resetInputs()
  }

  const getSummary = () => {
    const summary = '요약'
    setWriteInputs({
      ...writeInputs,
      summary,
    })
  }

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
            value={title}
            onChange={onChangeInputs}
            type="text"
            required
          />
          <input
            name="content"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={onChangeInputs}
            type="text"
            required
          />
          <SummaryWrapper>
            <span onClick={getSummary}>요약하기</span>
            <input
              name="summary"
              value={summary}
              onChange={onChangeInputs}
              type="text"
            />
          </SummaryWrapper>
        </InputsContainer>
      </WriteFormContainer>
    </WritePostContainer>
  )
}

export default WritePost
