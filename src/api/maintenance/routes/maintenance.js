'use strict';

/**
 * maintenance router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes : [
        {
            method: "GET",
            path: "/maintenances",
            handler: "maintenance.findAll",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "GET",
            path: "/maintenances/:id",
            handler: "maintenance.findOne",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "POST",
            path: "/maintenances",
            handler: "maintenance.create",
            config: {
                policies: [],
                middlewares: [],
            },
        }
    ]
}
