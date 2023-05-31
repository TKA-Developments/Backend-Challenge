/* MODIFY AS NEEDED */
CREATE TABLE "users" (
  "user_id" serial PRIMARY KEY NOT NULL,
  "email" varchar(50) NOT NULL,
  "name" varchar(50) NOT NULL,
  "dateCreated" date NOT NULL
);

CREATE TABLE "books" (
  "book_id" serial PRIMARY KEY NOT NULL,
  "title" varchar(200) NOT NULL,
  "author" varchar(50) NOT NULL,
  "publicationDate" date,
  "publisher" varchar(200),
);

/* 
BONUS

CREATE TABLE "user_favorites" (
  "user_favorites_id" PRIMARY KEY NOT NULL,
  "user_id" serial PRIMARY KEY NOT NULL,
  "book_id" serial PRIMARY KEY NOT NULL,
);

CREATE TABLE "borrowed_books" (
  "user_id" serial PRIMARY KEY NOT NULL,
  "book_id" serial PRIMARY KEY NOT NULL,
  "dateCreated" date NOT NULL
);

ALTER TABLE "user_favorites" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "user_favorites" ADD FOREIGN KEY ("book_id") REFERENCES "books" ("book_id");

ALTER TABLE "books" ADD "available" boolean;
*/
