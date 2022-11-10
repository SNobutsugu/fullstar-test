--ユーザーの作成
CREATE USER spa_test_user;
--DBの作成
CREATE DATABASE spa_test_db;
--ユーザーにDBの権限をまとめて付与
GRANT ALL PRIVILEGES ON DATABASE spa_test_db TO spa_test_user;
--DBを切り替え
\c spa_test_db
--テーブルを作成
CREATE TABLE book (
  id integer, 
  name varchar(30)
);
--テーブルにデータを挿入
INSERT INTO book VALUES (1,'The Very Hungry Caterpillar');
