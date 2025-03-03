'use strict';

/**
 * category router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes : [
        {
            method: "GET",
            path: "/categories",
            handler: "category.findAll",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "GET",
            path: "/categories/:id",
            handler: "category.findOne",
            config: {
                policies: [],
                middlewares: [],
            },
        }
    ]
}
