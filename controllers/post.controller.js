const postModel = require('../models/post.models');

module.exports.getPosts = async(req, res )=>{
    const posts = await postModel.find();
    res.status(200).json(posts);
};

module.exports.setPosts = async(req, res)=>{
    // res.json({message:"ca fonctionne!"});
    if (!req.body.message) {
        return res.status(400).json({
            message:"merci d'ajouter un message"
        })
      }
const post = await postModel.create({
    message:req.body.message,
    title:req.body.title,
    description:req.body.description,
    content:req.body.content,
    author:req.body.author,   
});
 res.status(200).json(post);
};
  
module.exports.editPost = async (req, res)=>{

const post = await postModel.findById(req.params.id)
if (!post) {
   return res.status(400).json({message:"ce post n'existe pas"});  
}
const updatePost = await postModel.findById(post, req.body,{
    new:true,
})
res.status(200).json(updatePost);
};

module.exports.deletePost = async(req, res)=>{
    const post = await postModel.findById(req.params.id);
    if (!post) {
       return res.status(400).json( { message:"aucun post trouvé" });   
    }
    await post.deleteOne();
   return res.status(200).json( { message:" message supprimé:" + req.params.id});
};

module.exports.likePost = async(req,res) => {
    try {
        await postModel.findByIdUpdate(
            req.params.id,
            {$addToset:{ likers:req.body.userID}},
            { new:true}
        );
    } catch (error) {
        res.status(400).json(err);
        
    }
};
