import fs from 'fs';
import models from '../models/index';

const statusValues = [
  {key: 'new', value: 'New'},
  {key: 'progress', value: 'In Progress'},
  {key: 'done', value: 'Done'}
]

const index = async (ctx, _next) => {
  let page = parseInt(ctx.query.page, 10) || 1;
  let queryTitle = ctx.query.title || ''
  let queryDescription = ctx.query.description || ''
  let queryStatus = ctx.query.status || ''
  page = page > 0 ? page : 1;
  let pageOffset = ( page - 1 ) * 10;
  const todos_query = {
    attributes: ['id', 'title', 'description', 'status', 'createdAt'],
    order: [['createdAt', 'DESC']],
    offset: pageOffset,
    limit: 10,
    where: {
      title: {
        $like: '%'+queryTitle+'%'
      },
      description: {
        $like: '%'+queryDescription+'%'
      },
      status: {
        $like: '%'+queryStatus+'%'
      }
    }
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
    queryTitle: queryTitle,
    queryDescription: queryDescription,
    queryStatus: queryStatus,
    searchFormPath: '/',
    statusValues: statusValues,
    pages: parseInt(todoCount / 10 + 1)
  };
  await ctx.render('home/index', locals);
};

export default {
  index
};
