const { Model } = require('objection');
const knex = require('@/src/server/bootstrap/database');

Model.knex(knex);

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    const Borrow = require('@/src/models/borrow');
    return {
      borrows: {
        relation: Model.HasManyRelation,
        modelClass: Borrow,
        join: {
          from: 'users.id',
          to: 'borrows.user_id'
        }
      }
    };
  }
}

module.exports = User;
