import Router from 'koa-router';
import todos from '../controllers/todos';

const router = Router({
  prefix: '/todos'
});

router.get('/new', todos.newTodo);
router.post('/', todos.checkParamsBody, todos.create);
router.get('/:id', todos.show);
router.get('/:id/edit', todos.edit);
router.put('/:id', todos.checkParamsBody, todos.update);
router.get('/:id/delete', todos.deleteTodo);

// for require auto in index.js
module.exports = router;
