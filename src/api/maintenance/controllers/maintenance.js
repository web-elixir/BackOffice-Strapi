'use strict';

/**
 * maintenance controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
    async findAll(ctx) {
        const maintenances = await strapi.db.query("api::maintenance.maintenance").findMany();
        ctx.body = maintenances;
    },

    async findOne(ctx) {
        const id = ctx.params.id;
        const maintenances = await strapi.db.query("api::maintenance.maintenance").findOne({ where: { id } });
        ctx.body = maintenances;
    },

    async create(ctx) {
        try {
            console.log("🔍 Données reçues :", ctx.request.body);

            const { Status, Message, Begin, End } = ctx.request.body.data;

            if (Status == null || !Message || !Begin || !End) {
                console.error("⚠️ Données manquantes !");
                return ctx.badRequest("Tous les champs sont obligatoires");
            }

            const newEntry = await strapi.service("api::maintenance.maintenance").create({
                data: { Status, Message, Begin, End }
            });

            return newEntry;
        } catch (error) {
            ctx.throw(500, error);
        }
    }
}
