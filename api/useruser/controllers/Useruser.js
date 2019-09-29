'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
  token: async (ctx) => {  
    console.log(ctx.state.user, 1000000);    
    return ctx.state.user;
  },
};
