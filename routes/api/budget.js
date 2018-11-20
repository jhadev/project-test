const router = require('express').Router();
const budgetController = require('../../controllers/budgetController');

// Matches with "/api/budget"
router
  .route('/')
  .get(budgetController.findAll)
  .post(budgetController.create);

// Matches with "/api/budget/:id"
router
  .route('/id/:id')
  .get(budgetController.findById)
  .put(budgetController.update)
  .delete(budgetController.remove);

// Matches with "/api/budget/category/:category"
router
  .route('/category/:category')
  .get(budgetController.findAllByCategory)

router
  .route('/month')
  .get(budgetController.monthField)

module.exports = router;
