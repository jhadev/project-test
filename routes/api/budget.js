const router = require('express').Router();
const budgetController = require('../../controllers/budgetController');

// Matches with "/api/budget"
router
  .route('/')
  .get(budgetController.findAll)
  .post(budgetController.create);

<<<<<<< HEAD
// Matches with "/api/budget/id/:id"
=======
// Matches with "/api/budget/:id"
>>>>>>> 27ee7d9cc636b47f24efede859bb91e9a9675906
router
  .route('/id/:id')
  .get(budgetController.findById)
  .put(budgetController.update)
  .delete(budgetController.remove);

// Matches with "/api/budget/category/:category"
router
  .route('/category/:category')
<<<<<<< HEAD
  .get(budgetController.findAllByCategory);
=======
  .get(budgetController.findAllByCategory)

router
  .route('/month')
  .get(budgetController.monthField)

router
  .route('/sumbyincome')
  .get(budgetController.sumByIncome)

router
  .route('/sumbymonth')
  .get(budgetController.sumByMonth)

router
  .route('/sumbycategory')
  .get(budgetController.sumByCategory)


>>>>>>> 27ee7d9cc636b47f24efede859bb91e9a9675906

module.exports = router;
