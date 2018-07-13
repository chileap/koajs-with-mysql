import models from '../models/index';

const show = async (ctx, _next) => {
  const todo = await models.Todo.findById(ctx.params.id);
  if(todo == null){
    ctx.redirect('/');
    return;
  }
  const locals = {
    nav: 'todo',
    title: todo.title,
    description: todo.description,
    todo: todo,
  };
  await ctx.render('todos/show', locals);
};

const newTodo = async (ctx, _next) => {
  const locals = {
    nav: 'newTodo',
    todo: {},
    todoFormPath: '/todos',
    csrf: ctx.csrf
  };
  console.log(ctx)
  await ctx.render('todos/new', locals);
};

const create = async (ctx, _next) => {
  try {
    console.log(ctx.state.todoParams)
    const todo = await models.Todo.createTodo(ctx.state.todoParams);
    ctx.flashMessage.notice = 'Create Todo Successfully!';
    ctx.redirect('/');
  } catch (error) {
    const locals = {
      nav: 'todoNew',
      todo: ctx.state.todoParams,
      todoFormPath: '/todos',
    };
    ctx.flashMessage.warning = error.message;
    await ctx.render('todos/new', locals);
  }
};

const edit = async (ctx, _next) => {
  const todo = await models.Todo.findById(ctx.params.id);
  const locals = {
    title: 'Edit',
    nav: 'todo',
    todo: todo,
    todoFormPath: `/todos/${todo.id}`,
    csrf: ctx.csrf
  };
  await ctx.render('todos/edit', locals);
};

const update = async (ctx, _next) => {
  let todo = await models.Todo.findById(ctx.params.id);
  try {
    todo = await todo.update(ctx.state.todoParams);
    ctx.flashMessage.notice = 'Update todo Successfully!';
    ctx.redirect('/todos/' + todo.id);
  } catch (error) {
    todo = { ...ctx.state.todoParams, id: todo.id };
    const locals = {
      title: 'Edit',
      nav: 'todo',
      todoFormPath: `/todos/${todo.id}`,
      todo
    };
    ctx.flashMessage.warning = error.message;
    await ctx.render('todos/edit', locals);
  }
};

const deleteTodo = async (ctx, _next) => {
  let todo = await models.Todo.findById(ctx.params.id);
  try {
    await todo.destroy()
    ctx.flashMessage.notice = 'Delete todo Successfully!';
    ctx.redirect('/');
  } catch (error) {
    ctx.flashMessage.warning = error.message;
    await ctx.render('/');
  }
};

const checkParamsBody = async (ctx, next) => {
  const body = ctx.request.body;
  console.log('body request ' + body)
  if (!(body.title && body.status && body.description)) {
    const locals = {
      nav: 'todoNew',
      message: 'params error'
    };
    if(ctx.params.id){
      await ctx.render('todos/edit', locals);
    } else {
      await ctx.render('todos/new', locals);
    }
    return;
  }
  ctx.state.todoParams = {
    title: body.title,
    description: body.description,
    status: body.status,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  await next();
};


export default {
  newTodo,
  checkParamsBody,
  create,
  show,
  edit,
  update,
  deleteTodo
};
