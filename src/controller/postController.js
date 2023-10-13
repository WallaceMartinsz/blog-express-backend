const Schema = require('../model/posts.js'); 

const postController = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await Schema.find();
      res.json(posts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao buscar posts' });
    }
  },

  getPostById: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Schema.findById(id);
      if (!post) {
        return res.status(404).json({ error: 'Post não encontrado' });
      }
      res.json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao buscar post por ID' });
    }
  },


  createPost: async (req, res) => {
    try {
      const novoPost = new Schema(req.body);
      const postSalvo = await novoPost.save();
      res.status(201).json(postSalvo);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao criar post' });
    }
  },

  updatePost: async (req, res) => {
    const { id } = req.params;
    try {
      const postAtualizado = await Schema.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!postAtualizado) {
        return res.status(404).json({ error: 'Post não encontrado' });
      }
      res.json(postAtualizado);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao atualizar post' });
    }
  },


  deletePost: async (req, res) => {
    const { id } = req.params;
    try {
      const postDeletado = await Schema.findByIdAndDelete(id);
      if (!postDeletado) {
        return res.status(404).json({ error: 'Post não encontrado' });
      }
      res.json({ message: 'Post excluído com sucesso' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao excluir post' });
    }
  },
};

module.exports = postController;
