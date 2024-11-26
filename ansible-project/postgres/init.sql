CREATE DATABASE mongodb;

\c mongodb;

CREATE TABLE todo(
    app_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);