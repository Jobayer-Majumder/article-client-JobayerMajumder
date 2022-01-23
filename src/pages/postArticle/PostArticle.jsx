import { gql, useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { useAlert } from 'react-alert';
import { userContext } from '../../App';
import useForm from '../../hooks/useForm';
import TagsInput from './TagsInput';


const CREATE_ARTICLE_MUTATION = gql`
  mutation createArticle($title: String!, $description: String!, $tags: [String]!, $authorName: String!, $authorEmail: String!) {
    createArticle(input: {title: $title, description: $description, tags: $tags, authorName: $authorName, authorEmail: $authorEmail}){
        title
    }
  }
`;



const PostArticle = () => {
    const alert = useAlert();
    const { formData, handleForm, setFormData } = useForm();
    const [isUserAuthenticated] = useContext(userContext);
    const [inputTags] = React.useState(['javascript']);
    const [createArticle, { data, loading, error }] = useMutation(CREATE_ARTICLE_MUTATION);


    const handlePostArticle = async () => {
        try {
            if (formData?.title && formData?.description && inputTags?.length > 0) {
                await createArticle({
                    variables: {
                        title: formData.title,
                        description: formData.description,
                        tags: inputTags,
                        authorName: isUserAuthenticated.name,
                        authorEmail: isUserAuthenticated.email
                    }
                })
                setFormData({title: "", description: ""});
                alert.success("Article posted successfully")
            } else {
                alert.info('Fill-up before submit');
            }
        } catch (error) {
            alert.error(error.message)
        }
    }

    return (
        <>
            <section className="py-12">
                <div className="heading text-center font-bold text-2xl m-5 text-gray-800 uppercase">Post new article</div>

                <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                    <input onChange={e => handleForm(e)} value={formData?.title} className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" name='title' placeholder="Title" type="text" required />
                    <TagsInput value={inputTags}/>
                    <textarea onChange={e => handleForm(e)} value={formData?.description} className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" name='description' placeholder="Describe everything about this post here" required />

                    <div className="icons flex text-gray-500 m-2">
                        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                        <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                    </div>
                    <button onClick={handlePostArticle} className="button-brand ml-2">Post</button>
                </div>
            </section>
        </>
    );
};

export default PostArticle;
