import express from 'express'

import { getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
const router = express.Router()

//http://localhost:5000/posts

router.route('/')
    .get(getPost)
    .post(createPost)
router.route('/:id')
    .patch(updatePost)
    .delete(deletePost)
router.route('/:id/likePost')
    .patch(likePost)


export default router