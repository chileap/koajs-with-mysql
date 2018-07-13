# koajs-with-mysql
Testing Project with Koajs and MySQL2

# Working on database
```
mysql -u root -p
mysql> mysql Create Database $Database_Name;
mysql> exit;
```

# Migration Database
```
npm run create:model Todo -- --name Todo --attributes title:string,description:text,status:string
npm run db:migrate
```

If you want to rollback database <br />
`npm run db:rollback`

If you want to add column of database <br />
`npm run create:migration -- --name add-column-to-todo`

# Run Project
```
npm install
npm start
```
