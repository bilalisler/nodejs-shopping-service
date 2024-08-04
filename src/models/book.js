const { Model } = require('objection');
const knex = require('@/src/server/bootstrap/database');

Model.knex(knex);

class Book extends Model {
  static get tableName() {
    return 'books';
  }

  static get relationMappings() {
    const Borrow = require('@/src/models/borrow');
    return {
      borrows: {
        relation: Model.HasManyRelation,
        modelClass: Borrow,
        join: {
          from: 'books.id',
          to: 'borrows.book_id'
        }
      }
    };
  }
}

module.exports = Book;
