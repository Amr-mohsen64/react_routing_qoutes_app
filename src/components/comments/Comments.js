import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import NewCommentForm from './NewCommentForm';
import { getAllComments } from '../../lib/api';
import classes from './Comments.module.css';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList'

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const parmas = useParams()

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments)

  useEffect(() => {
    sendRequest(parmas.quoteId)
  }, [parmas.quoteId, sendRequest])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    
  },[])

  let comments;
  if (status === 'pending') {
    comments = <div className='centered'>
      <LoadingSpinner />
    </div>
  }

  if (status === 'completed' && (loadedComments || loadedComments.length > 0)) {
    comments = <div className='centered'>
      <CommentsList comments={loadedComments} />
    </div>
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className='centered'>no comments where added yet</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={parmas.quoteId} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
