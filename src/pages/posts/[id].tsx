import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import * as api from '@/utils/api';
import React, { useEffect, useState } from 'react';
import auth from '@/components/common/auth';
import { useRouter } from 'next/router';

const Title = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 0.7em 0;
  font-size: 3rem;
  font-weight: bold;
`;

const Author = styled.div`
  width: 40%;
  margin: 0 auto;
  font-size: 1rem;
`;

const Post = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 3em 0;
`;

const CommentInputForm = styled.form`
  width: 40%;
  margin: 1em auto;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 6em;
  background-color: #f1f3f5;
  border-radius: 0.5em;
  border: None;
`;

const CommentAuthor = styled.div`
  width: 40%;
  margin: 1em auto;
  font-size: 0.8rem;
`;

const Comment = styled.div`
  width: 40%;
  margin: 1em auto;
  font-size: 1rem;
`;

const UpdateComment = styled.input`
  border: None;
  border-bottom: 1px solid black;
`;

interface CommentFormValue {
  content: string;
}

interface PostDetail {
  Category: string;
  CategoryId: number;
  Comments: {
    User: { nickname: string };
    content: string;
    createdAt: Date;
    id: number;
  }[];
  User: { nickname: string };
  UserId: string;
  content: string;
  createdAt: Date;
  deletedAt: Date;
  id: number;
  summary: string;
  title: string;
  updatedAt: Date;
  userId: string;
  views: number;
}

export default function Posts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormValue>();

  const user = auth.currentUser || null;
  const router = useRouter();
  const [Id, setId] = useState<string>('');
  const [Postdata, setPostdata] = useState<PostDetail>({});

  useEffect(() => {
    if (router.isReady) {
      const id = String(router.query.id);
      setId(id);
      getPost(id);
      console.log(user);
    }
  }, [router]);

  const getPost = async (id: string) => {
    const response = await api.get(`/posts/${id}`);
    console.log(response.data?.data);
    setPostdata(response.data?.data);
  };

  const onCommentSubmitHandler: SubmitHandler<
    CommentFormValue
  > = async data => {
    try {
      await api.post(`/comments/${Id}`, data);
      // window.location.replace("/msg")
    } catch (error: any) {
      alert(error);
    }
  };

  const deleteComment = async (commentId: number) => {
    try {
      await api.delete(`/comments/${commentId}`);
      // window.location.replace("/msg")
    } catch (error: any) {
      alert(error);
    }
  };

  // const updateComment = async (commentId, data)=>{
  //   try {
  //       await api.patch(`/comments/${data.commentId}`, data);
  //       // window.location.replace("/msg")
  //   } catch (error : any) {
  //       alert(error);
  //   }
  // };

  return (
    <>
      <Title>{Postdata.title}</Title>
      <Author>
        {Postdata.User?.nickname} ·{' '}
        <span style={{ color: 'gray', fontSize: '0.7rem' }}>
          {new Date(Postdata.createdAt).toString().substring(0, 21)}
        </span>
      </Author>
      <Post>{Postdata.content}</Post>

      <CommentInputForm onSubmit={handleSubmit(onCommentSubmitHandler)}>
        <div style={{ padding: '1em 0', fontSize: '0.7rem' }}>
          {Postdata.Comments?.length} comments
        </div>
        <CommentInput
          {...register('content', {
            required: true,
            minLength: 1,
            maxLength: 200,
          })}
        />
        <button>Send</button>
      </CommentInputForm>

      {Postdata.Comments?.map(comment => {
        return (
          <div key={comment.id}>
            <CommentAuthor>
              {comment.User.nickname}
              <div
                style={{ color: 'gray', padding: '1em 0', fontSize: '0.5rem' }}
              >
                {new Date(comment.createdAt).toString().substring(0, 21)}
                {user?.displayName == comment.User.nickname ? (
                  <>
                    <span style={{ color: 'blue' }}> · 수정 · </span>
                    <span
                      onClick={() => deleteComment(comment.id)}
                      style={{ color: 'red' }}
                    >
                      삭제
                    </span>
                  </>
                ) : null}
              </div>
            </CommentAuthor>
            {user?.displayName == comment.User.nickname ? (
              <Comment>
                <UpdateComment placeholder={comment.content}></UpdateComment>
              </Comment>
            ) : (
              <Comment>{comment.content}</Comment>
            )}
          </div>
        );
      })}
    </>
  );
}
