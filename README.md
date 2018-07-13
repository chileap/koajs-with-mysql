# koajs-with-mysql
Testing Project with Koajs and MySQL2

# Working on database
`mysql -u root -p`
mysql> mysql Create Database $Database_Name;
mysql> exit;

# Migration Database
`npm run create:model Todo -- --name Todo --attributes title:string,description:text,status:string`
`npm run db:migrate`

if you want to rollback Database
`npm run db:rollback`

if you want to add column of database
`npm run create:migration -- --name add-column-to-todo`

# Run Project
`npm install`
`npm start`
