'use strict';

/**
 * course router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes : [
        {
            method: "GET",
            path: "/courses",
            handler: "course.findAll",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "GET",
            path: "/courses/:id",
            handler: "course.findOne",
            config: {
                policies: [],
                middlewares: [],
            },
        }
    ]
}
