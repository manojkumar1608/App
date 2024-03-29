import mongoose from "mongoose"
import { Comment } from "../models/comment.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { Video } from "../models/video.model.js"

const getVideoComments = asyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const { videoId } = req.params
    const { page = 1, limit = 10 } = req.query
    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "This video id is not valid")
    }

    // find video in database 
    const video = await Video.findById(videoId)
    if (!video) {
        throw new ApiError(404, "video not found");
    }

    // match and finds all the comments
    const aggregateComments = await Comment.aggregate([
        {
            $match: {
                video: new mongoose.Types.ObjectId(videoId)
            }
        }
    ])

    Comment.aggregatePaginate(aggregateComments, {
        page,
        limit
    })
        .then((result) => {
            return res.status(201).json(
                new ApiResponse(200, result, "VideoComments fetched  successfully!!"))

            })
            .catch((error) => {
                throw new ApiError(500, "something went wrong while fetching video Comments", error)
            })
})

const addComment = asyncHandler(async (req, res) => {
    // TODO: add a comment to a video
    const { videoId } = req.params
    const { content } = req.body
    if( !content || content?.trim()===""){
        throw new ApiError(400, "comment is required")
    }

    if(!isValidObjectId(videoId)){
        throw new ApiError(400, "This video id is not valid")
    }

    const videoComment = await Comment.create({
        content,
        video: videoId,
        owner: req.user._id
    })

    if(!videoComment){
        throw new ApiError(500, "something went wrong while creating video comment")
    }

    // return responce
    return res.status(201).json(
        new ApiResponse(200, videoComment, "video comment created successfully!!")
    );
})


const updateComment = asyncHandler(async (req, res) => {
    // TODO: update a comment
    const { newContent } = req.body 
    const { commentId } = req.params

    if(!newContent || newContent?.trim()===""){
        throw new ApiError(400, "content is required")
    }

    if(!isValidObjectId(commentId)){
        throw new ApiError(400, "This video id is not valid")
    }

    const comment = await Comment.findById(commentId)

    if (!comment) {
        throw new ApiError(404, "comment not found!");
    }

    if (comment.owner.toString() !== req.user._id.toString()) {
        throw new ApiError(403, "You don't have permission to update this comment!");
    }

    const updateComment = await Comment.findByIdAndUpdate(
        commentId,
        {
            $set:{
                content: newContent
            }
        },
        {
            new: true
        }
    )

    if(!updateComment){
        throw new ApiError(500, "something went wrong while updating comment")
    }

    // return responce
   return res.status(201).json(
    new ApiResponse(200, updateComment, "comment updated successfully!!"))
})


const deleteComment = asyncHandler(async (req, res) => {
    // TODO: delete a comment 
        const { commentId } = req.params
    
        if(!isValidObjectId(commentId)){
            throw new ApiError(400, "This video id is not valid")
        }
    
        const comment = await Comment.findById(commentId)
    
        if (!comment) {
            throw new ApiError(404, "comment not found!");
        }
    
        if (comment.owner.toString() !== req.user._id.toString()) {
            throw new ApiError(403, "You don't have permission to delete this comment!");
        }
    
        const deleteComment = await Comment.deleteOne(commentId)
    
        if(!deleteComment){
            throw new ApiError(500, "something went wrong while deleting comment")
        }
    
        // return responce
        return res.status(201).json(
            new ApiResponse(200, deleteComment, "comment deleted successfully!!"))
    })
    


export {
    getVideoComments,
    addComment,
    updateComment,
    deleteComment
}
