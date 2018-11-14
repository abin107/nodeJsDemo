const express = require('express');
const router = express.Router();

const emp_controller = require('../controllers/emp.controller');

router.get('/test',emp_controller.test);
router.post('/add', emp_controller.emp_add);
router.get('/:id',emp_controller.emp_details);
router.put('/:id/update',emp_controller.emp_update);
router.delete('/:id/delete',emp_controller.emp_delete);
module.exports = router;