# Database Related Interview Questions

### **Description**

```
 Node.js | Javascript | Database | Cloud | Terraform
```


> ## Database(query) Related Interview Questions

### Q: What are MySQL database engines?

`Ans:` MySQL is a relational database management system that supports multiple storage engines, which are responsible for managing how data is stored and accessed in the database. Here are some of the most common storage engines in MySQL:

1. InnoDB - InnoDB is the default and most widely used storage engine in MySQL. It provides support for transactions, foreign keys, and row-level locking, which makes it suitable for high-concurrency applications that require data integrity.

2. MyISAM - MyISAM is another popular storage engine in MySQL. It is known for its fast read performance and full-text search capabilities. However, it does not support transactions or foreign keys, and it uses table-level locking, which can lead to contention in high-concurrency applications.

3. Memory - The Memory engine stores data in memory, providing extremely fast read and write performance. However, it does not support data persistence, and data is lost when the database is restarted.

4. CSV - The CSV engine stores data in comma-separated value files, making it easy to import and export data between MySQL and other applications. However, it does not support indexes or transactions, and it is not suitable for complex queries or large datasets.

5. Archive - The Archive engine is designed for storing large amounts of data that are infrequently accessed. It supports compression and can be used to create read-only archives of data.

There are many other storage engines available for MySQL, each with its own strengths and weaknesses. When choosing a storage engine for your application, it's important to consider your specific requirements for performance, scalability, and data integrity.

### Q: What is indexing in mysql?

`Ans:` In MySQL, indexing is a technique used to improve the performance of database queries. An index is a data structure that allows data to be quickly retrieved based on the values in one or more columns of a table.

When you create an index on a table in MySQL, the database creates a separate data structure that contains a sorted copy of the indexed column(s), along with pointers to the corresponding rows in the table. This makes it faster to search for and retrieve rows that match a particular condition or set of conditions.

Indexes can be created on one or more columns of a table, and can be either unique or non-unique. Unique indexes ensure that each value in the indexed column(s) is unique, while non-unique indexes allow duplicate values.

MySQL supports several types of indexes, including:

1. B-tree indexes - The most common type of index in MySQL, B-tree indexes store values in a balanced tree structure, allowing for fast search and retrieval.

2. Hash indexes - Hash indexes are designed for fast equality lookups, but are not as effective for range queries or sorting.

3. Full-text indexes - Full-text indexes are used to search for text in large blocks of text data, such as articles or documents.

4. Spatial indexes - Spatial indexes are used to optimize queries that involve geospatial data, such as maps or GPS coordinates.

Indexes can greatly improve the performance of database queries, especially for large tables with complex search conditions. However, they can also have drawbacks, such as increased storage requirements and slower write performance for heavily indexed tables. It's important to carefully consider your indexing strategy based on your specific application requirements.

### Q: Mysql query to create database?
`Ans:` To create a new database in MySQL, you can use the CREATE DATABASE statement followed by the name of the database you want to create. Here's the basic syntax:
```
CREATE DATABASE mydatabase;
```

### Q: Mysql query to create table?
`Ans:` To create a new table in MySQL, you can use the `CREATE TABLE` statement followed by the name of the table and a list of the columns you want to include in the table, along with their data types and any additional constraints. Here's the basic syntax:

```
CREATE TABLE table_name (
  column1 datatype constraints,
  column2 datatype constraints,
  ...
  columnN datatype constraints
);
```

For example, to create a new table called `users` with columns for `id`, `name`, and `email`, you can use the following query:

```
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
```

In this query, we've specified that the `id` column is the primary key and should automatically increment with each new row. We've also specified that the `name` and `email` columns should not allow NULL values.

You can also specify additional constraints on the columns, such as `UNIQUE`, `DEFAULT`, and `CHECK` constraints. Here's an example:

```
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) DEFAULT 0.00,
  stock INT CHECK (stock >= 0),
  sku VARCHAR(50) UNIQUE
);
```

This query creates a new table called `products` with columns for `id`, `name`, `price`, `stock`, and `sku`. The `price` column has a default value of `0.00`, the `stock` column has a check constraint to ensure it is not negative, and the `sku` column has a unique constraint to ensure that each product has a unique SKU. 

Note that to run this query, you need to have the appropriate privileges to create tables on your MySQL server. If you are using a client tool such as phpMyAdmin, you can usually create a new table using a graphical interface.

### Q: How to find second highest salary in mysql?
`Ans:` To find the second highest salary in MySQL, you can use the `ORDER BY` and `LIMIT` clauses in your query. Here's an example query:

```
SELECT salary
FROM employee
ORDER BY salary DESC
LIMIT 1, 1;
```

In this query, replace `employee` with the name of your table and `salary` with the name of your salary column.

The `ORDER BY` clause sorts the rows in descending order based on the `salary` column. The `LIMIT` clause then selects the second row (which will be the second highest salary) by skipping the first row (which will be the highest salary) and selecting the next row.

Note that if there are duplicate salaries in the table, this query will return the second highest salary after the highest salary, which may not be unique. If you want to exclude the highest salary from the results, you can modify the `LIMIT` clause to skip the first two rows and select the third row:

```
SELECT salary
FROM employee
ORDER BY salary DESC
LIMIT 2, 1;
``` 

This query will skip the first two rows (which will be the two highest salaries) and select the third row (which will be the second highest salary).

### Q: Removing redundant data from mysql
`Ans:` To remove redundant data from a particular column in a MySQL table and display the remaining unique data, you can use the `DISTINCT` keyword with the `SELECT` statement. Here's an example query:

```
SELECT DISTINCT column_name
FROM table_name;
```

In this query, replace `column_name` with the name of the column you want to remove redundant data from, and `table_name` with the name of the table.

The `DISTINCT` keyword instructs MySQL to return only distinct (unique) values in the specified column. If there are any duplicate values in the column, only one instance of each value will be returned.

For example, suppose you have a `students` table with a `class` column that contains redundant data:

```
+----+-----------+-------+
| id | name      | class |
+----+-----------+-------+
|  1 | John Doe  | 10A   |
|  2 | Jane Doe  | 9B    |
|  3 | Bob Smith | 10A   |
|  4 | Sue Jones | 9B    |
|  5 | Tom Brown | 10B   |
+----+-----------+-------+
```

To remove redundant data from the `class` column and display the unique values, you could use the following query:

```
SELECT DISTINCT class
FROM students;
```

This would return the following result:

```
+-------+
| class |
+-------+
| 10A   |
| 9B    |
| 10B   |
+-------+
```


### Q: Difference between truncate and delete in mysql?
`Ans:` In MySQL, `TRUNCATE` and `DELETE` are two different ways to remove data from a table, but there are some important differences between them.

The main differences are:

1. **Behavior**: `TRUNCATE` removes all data from a table, while `DELETE` removes only the data that matches the specified conditions in the `WHERE` clause. If you don't specify a `WHERE` clause in a `DELETE` statement, all data in the table will be deleted, but this behavior can be dangerous if you accidentally forget to include the `WHERE` clause.

2. **Speed**: `TRUNCATE` is generally faster than `DELETE` because it removes all data from the table in one operation, while `DELETE` has to check each row to see if it matches the `WHERE` clause before deleting it. However, `TRUNCATE` is also more resource-intensive than `DELETE` because it resets the auto-increment counter and drops any indexes on the table.

3. **Logging**: `TRUNCATE` doesn't log individual row deletions, so it's not possible to recover the data after a `TRUNCATE` operation. `DELETE`, on the other hand, logs each row deletion in the binary log, making it possible to recover the data using point-in-time recovery techniques.

4. **Permissions**: `TRUNCATE` requires the `DROP` privilege on the table, while `DELETE` requires the `DELETE` privilege. If you don't have the necessary privileges, you won't be able to use either command.

In summary, `TRUNCATE` is faster and simpler than `DELETE`, but it's also more dangerous because it removes all data from the table without any conditions. If you want to remove specific rows from a table, `DELETE` is the safer choice because it allows you to specify conditions for which rows to delete. However, if you want to completely remove all data from a table and don't need to recover it later, `TRUNCATE` is a good option.

### Q: Create database in mongodb?
`Ans:` To create a database in MongoDB, you can use the `use` command followed by the name of the database you want to create. Here's an example:

```
use my_database
```

In this example, `my_database` is the name of the database you want to create. If the database doesn't exist, MongoDB will create it for you.

However, the `use` command doesn't actually create any collections or documents in the database. You need to insert at least one document into a collection to create it. For example, you could insert a document into a collection named `users`:

```
db.users.insertOne({ name: "John Doe", age: 30 })
```

In this example, `users` is the name of the collection, and `{ name: "John Doe", age: 30 }` is the document you want to insert. If the `users` collection doesn't exist, MongoDB will create it for you as part of the insert operation.

Keep in mind that in MongoDB, databases and collections are created dynamically when you first write data to them. You don't need to explicitly create them beforehand.

### Q: Query to create collection in mongodb?
`Ans:` In MongoDB, a collection is automatically created when you insert a document into it. However, if you want to explicitly create a collection, you can use the `createCollection` method.

Here's an example of creating a collection named `users`:

```
db.createCollection("users")
```

In this example, `users` is the name of the collection you want to create. You can also specify additional options, such as the maximum size of the collection, the maximum number of documents in the collection, and the storage engine to use.

For example, here's how you can create a collection with a maximum size of 100 megabytes and a maximum of 1000 documents:

```
db.createCollection("users", {
  capped: true,
  size: 100000000,
  max: 1000
})
```

In this example, the `capped` option specifies that the collection is a capped collection, which has a fixed size and automatically overwrites old documents when the collection reaches its maximum size. The `size` option specifies the maximum size of the collection in bytes, and the `max` option specifies the maximum number of documents in the collection.


### Q: How to create index in mongodb?
`Ans:` In MongoDB, you can create indexes to improve the performance of your queries. Indexes can help speed up read queries, but they can also slow down write queries, so it's important to choose the right indexes for your data and workload.

To create an index in MongoDB, you can use the `createIndex` method. The `createIndex` method takes two arguments: the name of the collection to create the index on, and an object that specifies the fields to index and any options for the index.

Here's an example of creating an index on the `username` field of a collection named `users`:

```
db.users.createIndex({ username: 1 })
```

In this example, the `{ username: 1 }` object specifies that the index should be created on the `username` field, and that the values should be sorted in ascending order (`1` means ascending, `-1` means descending).

You can also specify additional options for the index, such as whether to create a unique index, a sparse index, or a text index. Here's an example of creating a unique index on the `email` field:

```
db.users.createIndex({ email: 1 }, { unique: true })
```

In this example, the `{ email: 1 }` object specifies that the index should be created on the `email` field, and the `{ unique: true }` object specifies that the index should be a unique index.

### Q: Find second highest salary in mongodb?
`Ans:` In MongoDB, you can use the `sort` and `limit` methods to find the second highest salary.

Assuming you have a collection named `employees` with a `salary` field, here's an example query to find the second highest salary:

```
db.employees.find().sort({ salary: -1 }).skip(1).limit(1)
```

In this query, we're using the `find` method to retrieve all documents in the `employees` collection, then sorting them in descending order by the `salary` field using the `sort` method. We then skip the first document (which will have the highest salary) using the `skip` method, and limit the results to one document using the `limit` method. The resulting document will have the second highest salary.

### Q: Join two collections in mongodb?
`Ans:` In MongoDB, you can use the `$lookup` aggregation pipeline stage to perform a left outer join between two collections. Here's an example query to join the `orders` and `customers` collections on the `customer_id` field:

```
db.orders.aggregate([
   {
      $lookup:
         {
           from: "customers",
           localField: "customer_id",
           foreignField: "_id",
           as: "customer"
         }
   }
])
```

In this query, we're using the `aggregate` method to perform an aggregation operation on the `orders` collection. We then use the `$lookup` pipeline stage to join the `orders` collection with the `customers` collection. The `from` option specifies the name of the collection to join with, and the `localField` and `foreignField` options specify the fields to join on. Finally, the `as` option specifies the name of the new field that will contain the joined documents.

The resulting output will contain the fields from both collections, with the joined documents under the `customer` field.

### Q: How to delete documents by query efficiently in mongo?
`Ans:` In MongoDB, you can delete documents by query using the `deleteMany` method. Here's an example query to delete all documents in the `orders` collection with a `status` of `"cancelled"`:

```
db.orders.deleteMany({ status: "cancelled" })
```

This query will delete all documents in the `orders` collection that match the `{ status: "cancelled" }` query criteria.

To delete documents efficiently, you can consider creating an index on the field you're querying on. This will allow MongoDB to quickly find the documents to be deleted and delete them without scanning the entire collection.

Additionally, if you're deleting a large number of documents, you can use the `bulkWrite` method to perform the delete operation in batches. This can help reduce the impact on system resources and improve performance. Here's an example query to delete all documents in the `orders` collection with a `status` of `"cancelled"` in batches of 1000:

```
var counter = 0;
var batchSize = 1000;

db.orders.find({ status: "cancelled" }).forEach(function(order) {
    db.orders.deleteOne({ _id: order._id });
    counter++;

    if (counter % batchSize === 0) {
        db.getLastError(); // Forces a flush of pending writes
    }
});
```

In this query, we're using a loop to iterate over all documents in the `orders` collection with a `status` of `"cancelled"`, deleting each document using the `deleteOne` method. We're also flushing pending writes to disk after every batch of 1000 deletes to ensure that the operation doesn't consume too much memory.





-------------------------------------------------

> ## Home: Node.js | Javascript 

Click [here](./README.md)

