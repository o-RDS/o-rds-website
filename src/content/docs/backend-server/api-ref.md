---
title: API Reference
sidebar:
    order: 3
---

# APIs

## Administrator Authentication

`POST` **/api/register** - register an admin for o-RDS

| Response Code | Description           |
|---------------|-----------------------|
| 201           | User Created          |
| 400           | Missing Fields        |
| 409           | User Already Created  |
| 500           | Internal Server Error |

***

`POST` **/api/login** - login to o-RDS

| Response Code | Description           |
|---------------|-----------------------|
| 200           | Login Successful      |
| 404           | Email and password combination invalid|
| 500           | Internal Server Error |


## Survey Routes

`GET` **/api/survey/{surveyID}** - retrieve a survey configuration

***surveyID*** - The unique identifier for a survey ID

| Response Code | Description           |
|---------------|-----------------------|
| 200           | Survey Retrieved      |
| 404           | Survey Doesn't Exist  |
| 500           | Internal Server Error |  

 ***       

`GET` **/api/surveys** - retrieve all surveys

| Response Code | Message             |
|---------------|---------------------|
| 200           | Surveys Found       |
| 403           | Unauthorized Access |
| 404           | User does not exist |

***

`POST` **/api/survey/{surveyID}** - Update or create a survey with the provided ID

***surveyID*** - The unique identifier for a survey ID

Body

| Response Code | Message                       |
|---------------|-------------------------------|
| 201           | Survey created or overwritten |
| 403           | Unauthorized Access           |
| 500           | Internal server error         |

***

`DELETE` **/api/survey/{surveyID}** - Delete a survey with the provided ID

***surveyID*** - The unique identifier for a survey ID

| Response Code | Message                       |
|---------------|-------------------------------|
| 200           | Survey Deleted                |
| 403           | Unauthorized Access           |
| 404           | Survey does not exist         |
| 500           | Internal server error         |


## Response Routes

`GET` **/api/survey/{surveyID}/repsonse/{alias}** - Retrieves the response of a specific person

***surveyID*** - The unique identifier for a survey ID

***alias*** - A survey takers unique, nonidentifiable number

| Response Code | Message                       |
|---------------|-------------------------------|
| 200           | Response found                |
| 404           | Response doesn't exist        |
| 500           | Internal server error         |

***

`GET` **/api/survey/{surveyID}/responses** - Retrieves all responses for a survey

| Response Code | Message                       |
|---------------|-------------------------------|
| 200           | Responses found               |
| 403           | Unauthorized Access           |
| 404           | Survey doesn't exist          |
| 500           | Internal server error         |

***

`POST` **/api/response



## Incentive Routes

## Tremendous Routes

## Twilio Routes

## Database (Firebase)

