import React from 'react'
import { useNavigate } from 'react-router-dom';
import  { useSelector }  from 'react-redux';
import { useForm } from 'react-hook-form'
import Input from './Input';
import Button from './Button';
import Logo from './utils/Logo';
import { RiVideoUploadFill } from "react-icons/ri";
function UploadVideo() {
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const video = ""
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: video?.title || "",
            description: video?.description || "",
            thumbnail: video?.thumbnail || "",
            videoFile: video?.videoFile || "",
            isPublished: video?.status || "published",
        },
    });


    const submit = async (data) => {
        if (video) {
            const file = data.thumbnail[0] ? await axios.patch('') : null;

            if (file) {
                await axios.delete('');
            }

            const dbvideo = await appwriteService.updatePost(post.$id, {
                ...data,
                thumbnail: file ? file._id : undefined,
                videofile: file ? file._id : undefined
            });

            if (dbvideo) {
                // navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file._id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data,  });

                if (dbPost) {
                    // navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

  return (
    
    <div className='flex justify-center items-center w-full flex-col '>
        
        <RiVideoUploadFill className='inline-block text-red-700 size-10 max-w-[100px] '/>
        <h1 className=' font-bold shadow-red-400 shadow-lg rounded-xl text-red-800 text-center text-3xl mb-4'>
             Upload Video</h1>
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap  border-2 border-black shadow-black shadow-lg rounded-xl h-screen p-4">
    <div className="w-60 px-2">
        <Input 
            label="Title :"
            placeholder= "Title"
            className="mb-4"
            {...register("title", { required: true })}
        />
        <Input
            label ="Description:"
            placeholder="Description"
            className=""
            {...register("description", { required: true })}
            
        />
    </div>
    <div className=" px-2 flex flex-col w-full">
        <Input
            label="Thumbnail:"
            type="file"
            className="mb-4 bg-gray-950  text-white "
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("thumbnail", { required: !video })}
        />
        {video && (
            <div className="w-full mb-4">
                <img
                    src={""}
                    alt={video.title}
                    className="rounded-lg"
                />
            </div>
        )}
        <Input
            label="video:"
            type="file"
            className="mb-4 bg-gray-950  text-white"
            accept="*/video "
            {...register("video", { required: !video })}
        />
      
        <label 
  htmlFor="AcceptConditions"
  className="relative px-4 mx-4  h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
>
  <input type="checkbox" id="AcceptConditions" className="peer sr-only" 

  />

  <span
    className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6">
        
  </span>
</label>
  <h1 className='font-bold mx-2 px-3 '>Publish</h1>

        <Button type="submit" bgColor={video ? "bg-green-500" : undefined} className="w-fit m-auto ">
            {video ? "Update" : "Upload" }
        </Button>
    </div>
</form>
</div>
  )
}

export default UploadVideo