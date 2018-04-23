\i sql/test_uninstall.sql;

create database universe;
-- connect to the universe :P
\connect universe;


-- everything gets created with postgres user
\i sql/structure.sql
\i sql/data.sql
-- but here we change the owner with vdegenne
\i sql/post_data.sql


-- anyways, for the test we just create a fake user so we can publicly use a password
create user testdbuser with password 'password';
alter database universe owner to testdbuser;
alter table atoms owner to testdbuser;
alter table elements owner to testdbuser;
alter table compositions owner to testdbuser;
