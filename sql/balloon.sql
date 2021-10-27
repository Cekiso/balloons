create table valid_colors(
	id serial not null primary key,
	popularcolor varchar(50) not null
	
);

create table invalid_colors(
	id serial not null primary key,
	notpopular varchar(50) not null

);
insert into valid_colors (popularcolor) values (red);
insert into valid_colors (popularcolor) values (blue);
insert into valid_colors (popularcolor) values (yellow);
insert into valid_colors (popularcolor) values (orange);

