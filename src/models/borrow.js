const { Model } = require('objection');
const knex = require('@/src/server/bootstrap/database');

Model.knex(knex);

class Borrow extends Model {
  static get tableName() {
    return 'borrows';
  }

  static get relationMappings() {
    const User = require('@/src/models/User');
    const Book = require('@/src/models/Book');
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'borrows.user_id',
          to: 'users.id',
        },
      },
      book: {
        relation: Model.BelongsToOneRelation,
        modelClass: Book,
        join: {
          from: 'borrows.book_id',
          to: 'books.id',
        },
      },
    };
  }
}

module.exports = Borrow;
