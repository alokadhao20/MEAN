// special commands which allow the user to delete existing document returned.
//  When using these methods, the operation takes a write lock for the duration of the operation in order to ensure the modification is atomic.
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  const col = db.collection('findAndModify');
  // Insert a single document
  col.insert([{a:1}, {a:2}, {a:2}], function(err, r) {
    assert.equal(null, err);
    assert.equal(3, r.result.n);

      // Remove and return a document
      col.findOneAndDelete({a:2}, function(err, r) {
          console.log("result - ", r)
        assert.equal(null, err);
        assert.ok(r.value.b == null);
        client.close();
      });
    });
  });

