\echo 'Delete and recreate fridgely db?'
\prompt 'Return for yes or control-C to cancel > ' 

DROP DATABASE fridgely;
CREATE DATABASE fridgely;
\connect fridgely

\i fridgely-schema.sql
\i fridgely-seed.sql

\echo 'Delete and recreate jobly_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE fridgely_test;
CREATE DATABASE fridgely_test;
\connect fridgely_test

\i fridgely-schema.sql
