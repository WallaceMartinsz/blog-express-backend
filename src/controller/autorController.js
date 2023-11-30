const Autor = require('../model/autor');

const autorController = {
    createAutor: async (req, res) => {
        try {
            const novoAutor = new Autor(req.body);
            const autorSalvo = await novoAutor.save();
            res.status(201).json(autorSalvo);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar autor' });
        }
    },

    getAllAutores: async (req, res) => {
        try {
            const autores = await Autor.find();
            res.json(autores);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar autores' });
        }
    },

    getAutorById: async (req, res) => {
        try {
            const autor = await Autor.findById(req.params.id);
            if (!autor) {
                return res.status(404).json({ error: 'Autor não encontrado' });
            }
            res.json(autor);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar autor por ID' });
        }
    },

    updateAutor: async (req, res) => {
        const { id } = req.params;
        try {
            const autorAtualizado = await Autor.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            if (!autorAtualizado) {
                return res.status(404).json({ error: 'Autor não encontrado' });
            }
            res.json(autorAtualizado);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao atualizar o Autor' });
        }
    },

    deleteAutor: async (req, res) => {
        const { id } = req.params;
        try {
            const autorDeletado = await Autor.findByIdAndDelete(id);
            if (!autorDeletado) {
                return res.status(404).json({ error: 'Autor não encontrado' });
            }
            res.json({ message: 'Autor excluído com sucesso' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao excluir Autor' });
        }
    }
};

module.exports = autorController;
