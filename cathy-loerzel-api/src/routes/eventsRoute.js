// Import Dependencies
const router = require('express').Router();

// Import Middleware for controller and errors
const controller = require('../controllers/eventsController')
const methodNotAllowed = require('../errors/methodNotAllowed');

// Route Definitions
router
  .route('/')
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);
router
  .route('/:event_id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

// Export module
module.exports = router