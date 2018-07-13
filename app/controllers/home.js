import fs from 'fs';

const index = async (ctx, _next) => {
  await ctx.render('home/index');
};

export default {
  index
};
