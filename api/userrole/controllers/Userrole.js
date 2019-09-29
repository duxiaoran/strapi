'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
  find: async ctx=>{
    console.log(ctx.state.user, 9999);
    if (ctx.query._q) {
      return strapi.services.userrole.search(ctx.query);
    }
    return strapi.services.userrole.find(ctx.query);
  },
};
