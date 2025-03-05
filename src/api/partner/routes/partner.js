'use strict';

/**
 * partner router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes : [
        {
            method: "GET",
            path: "/partners",
            handler: "partner.findAll",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "POST",
            path: "/auth/partner-login",
            handler: "partner.login",
            config: {
              "policies": [],
            }
        },
        {
            method: "GET",
            path: "/partners/:id",
            handler: "partner.findOne",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "POST",
            path: "/partners",
            handler: "partner.create",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "PUT",
            path: "/partners/:id",
            handler: "partner.update",
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: "DELETE",
            path: "/partners/:id",
            handler: "partner.delete",
            config: {
                policies: [],
                middlewares: [],
            },
        }
    ]
}
