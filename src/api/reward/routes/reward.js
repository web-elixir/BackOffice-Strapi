'use strict';

/**
 * reward router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes : [
        {
            method: "GET",
            path: "/rewards",
            handler: "reward.findAll",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "GET",
            path: "/rewards/:id",
            handler: "reward.findOne",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "PATCH",
            path: "/rewards/:id",
            handler: "reward.update",
            config: {
                policies: [],
                middlewares: [],
            },
        }
    ],
}
