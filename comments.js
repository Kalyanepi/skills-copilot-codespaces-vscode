// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create routes
router.get('/', commentController.getComments);
router.get('/:id', commentController.getComment);
router.post('/', commentController.createComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

// Export routes
module.exports = router;