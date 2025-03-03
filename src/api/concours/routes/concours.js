'use strict';

/**
 * concours router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/concours/active",
      handler: "concours.findActive",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/concours",
      handler: "concours.findAll",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/concours/:id",
      handler: "concours.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

