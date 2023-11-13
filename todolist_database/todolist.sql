create table users
(
    users_id int auto_increment
        primary key,
    username varchar(50) null,
    password varchar(50) null
);


create table todos
(
    id          int auto_increment
        primary key,
    title       varchar(255) null,
    description text         null,
    userId      int          null,
    completed   tinyint(1)   null,
    createdAt   datetime     not null,
    updatedAt   datetime     not null
);
