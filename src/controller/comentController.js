const Comentario = require('../model/comentario');

const comentarioController = {
    createComentario: async (req, res) => {
        try {
            const novoComentario = new Comentario(req.body);
            const comentarioSalvo = await novoComentario.save();
            res.status(201).json(comentarioSalvo);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar comentário' });
        }
    },

    getAllComentarios: async (req, res) => {
        try {
            const comentarios = await Comentario.find();
            res.json(comentarios);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar comentários' });
        }
    },

    getComentarioById: async (req, res) => {
        try {
            const comentario = await Comentario.findById(req.params.id);
            if (!comentario) {
                return res.status(404).json({ error: 'Comentário não encontrado' });
            }
            res.json(comentario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar comentário por ID' });
        }
    },

    updateComentario: async (req, res) => {
        const { id } = req.params;
        try {
            const comentarioAtualizado = await Comentario.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            if (!comentarioAtualizado) {
                return res.status(404).json({ error: 'Comentário não encontrado' });
            }
            res.json(comentarioAtualizado);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao atualizar o Comentário' });
        }
    },

    deleteComentario: async (req, res) => {
        const { id } = req.params;
        try {
            const comentarioDeletado = await Comentario.findByIdAndDelete(id);
            if (!comentarioDeletado) {
                return res.status(404).json({ error: 'Comentário não encontrado' });
            }
            res.json({ message: 'Comentário excluído com sucesso' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao excluir Comentário' });
        }
    }
};

module.exports = comentarioController;