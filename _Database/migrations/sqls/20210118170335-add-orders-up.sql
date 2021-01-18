CREATE TYPE mood AS ENUM ('active', 'complete');

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    product_id int4 DEFAULT 0,
    quantity int,
    user_id int4 DEFAULT 0,
    status mood NOT NULL,

    FOREIGN KEY (product_id) REFERENCES product(id) ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE
);