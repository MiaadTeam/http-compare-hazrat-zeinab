# run me in  /apps/prisma-postgres/src:
# hurl --variables-file .env ./http/country/create.hurl

POST http://localhost:{{SERVER_PORT}}/prisma/country/create
Content-Type:application/json

{
	"name":"persia",
	"population":90000,
	"abb":"PR"
}
