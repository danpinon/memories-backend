import express from 'express'

import { getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
import auth from '../middleware/auth.js'

const router = express.Router()

//http://localhost:5000/posts

router.route('/')
    .get(getPost)
    .post(auth, createPost)
router.route('/:id')
    .patch(auth, updatePost)
    .delete(auth, deletePost)
router.route('/:id/likePost')
    .patch(auth, likePost)


export default router