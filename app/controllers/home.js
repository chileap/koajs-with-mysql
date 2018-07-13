import fs from 'fs';
import models from '../models/index';

const index = async (ctx, _next) => {
  let page = parseInt(ctx.query.page, 10) || 1;
  page = page > 0 ? page : 1;
  let pageOffset = ( page - 1 ) * 10;
  const todos_query = {
    attributes: ['id', 'title', 'description', 'status', 'createdAt'],
    order: [['createdAt', 'DESC']],
    offset: pageOffset,
    limit: 10,
  };
  const [todoCount, todos] = await Promise.all([
    models.Todo.count(),
    models.Todo.findAll(todos_query)
  ]);
  const locals = {
    title: 'Home',
    nav: 'index',
    todos: todos,
    baseUrl: '/',
    currentPage: page,
    pages: parseInt(todoCount / 10 + 1)
  };
  await ctx.render('home/index', locals);
};

export default {
  index
};
