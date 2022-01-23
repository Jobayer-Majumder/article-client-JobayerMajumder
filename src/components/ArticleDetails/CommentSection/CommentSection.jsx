import React, { useContext } from 'react';
import { gql, useMutation } from '@apollo/client';
import useForm from '../../../hooks/useForm';
import { useNavigate, useParams } from 'react-router-dom';
import { userContext } from '../../../App';
import { useAlert } from 'react-alert';


const COMMENT_MUTATION = gql`
  mutation insertComment($userName: String!, $articleId: String!, $comment: String!) {
    insertComment(input: {userName: $userName, articleId: $articleId, comment: $comment}){
        successMessage
        errorMessage
    }
  }
`;



const CommentSection = ({ comments }) => {
    const [isUserAuthenticated] = useContext(userContext);

    const alert = useAlert()
    const { id } = useParams();
    const navigate = useNavigate();
    const { formData, handleForm, setFormData } = useForm();
    const [insertComment, { loading }] = useMutation(COMMENT_MUTATION);


    const handlePostComment = async () => {

        try {
            if(isUserAuthenticated?.email){
                await insertComment({
                    variables: {
                        userName: isUserAuthenticated?.name,
                        articleId: id,
                        comment: formData.comment
                    }
                });
                setFormData({ comment: '' })
            }else{
                alert.info('You have to login before comment')
                navigate('/login')
            }

        } catch (error) {
            alert.error(error.message)
        }
    };

    console.log(isUserAuthenticated)

    return (
        <section>
            <div className="py-8">
                <h4 className="uppercase text-center font-semibold rounded-md px-6 py-1 bg-gray-100">
                    post a comment
                </h4>
                <p className="font-semibold text-teal-500 py-4">
                    {comments.length > 0 ? `${comments.length} Comments` : '0 Comment'}
                </p>
                <form action="" onSubmit={handlePostComment}>
                    <textarea className='w-full input-brand' onChange={e => handleForm(e)} name="comment" value={formData?.comment} id="" cols="30" rows="3" placeholder='Enter your comment...' style={{ resize: 'none' }} required/>
                    <div className="flex justify-end gap-5 items-center">
                        {
                            loading ? <p className='text-teal-500 font-semibold'>Posting...</p> : null
                        }
                        <button className="button-brand my-2">
                            Post
                        </button>
                    </div>
                </form>
                {
                    comments.map((comment, index) =>
                        <div key={index} className="flex gap-4 py-3 px-3 border rounded-md my-2">
                            <div className="">
                                <img src='https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_8-512.png' className='w-10' alt="" />

                            </div>
                            <div className="">
                                <h4 className="">
                                    {comment.userName}
                                </h4>
                                <p className="text-sm font-semibold text-gray-500">
                                    {new Date(comment.createdAt).toDateString()}
                                </p>
                                <p className="">
                                    {comment.comment}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default CommentSection;