'use strict';

/**
 * concours controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
    async findActive(ctx) {
      const now = new Date();
      const activeConcours = await strapi.db.query("api::concours.concours").findMany({
        where: {
          begin: { $lte: now },
          end: { $gte: now },
        },
      });
      ctx.body = activeConcours;
    },
    async findAll(ctx) {
      const concours = await strapi.db.query("api::concours.concours").findMany();
      ctx.body = concours;
  },
  async findOne(ctx) {
    const id = ctx.params.id;
    const concours = await strapi.db.query("api::concours.concours").findOne({ id });
    ctx.body = concours;
  },
};
  