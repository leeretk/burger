### Schema

USE nvvsvlzge0g0b4yb;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT 0,
    createdAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP, 
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) 
VALUES ('Bacon Cheeseburger','0'), 
 ('Mushroom Swiss Cheeseburger','1'), 
 ('Beefy Cheesy Sliders','0') 