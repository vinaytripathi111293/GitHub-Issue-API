STEPS TO SETUP GITHUB ISSUE CREATION API 
======================================== 

#1. cd githubScript
 
#2. replace .env file content with your credentials

#3. npm install

#4. npm run start

REQUEST
=======

Import this CURL in POSTMAN to test:

curl --location --request POST 'http://localhost:3000/createIssue' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title":"issue 1",
    "body": "This is issue 1"
}'


