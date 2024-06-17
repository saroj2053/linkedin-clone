const Post = require("../models/PostModel");

exports.getPostsController = async (req, res) => {
    try {
        const posts = await Post.find({});
        if (posts) {
            res.status(200).json({
                success: true,
                message: "Successfully retrieved all posts",
                posts
            })
        } else {
            res.status(404).json({
                success: false,
                message: "No posts found!!"
            })
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong!!"
        })
    }
}