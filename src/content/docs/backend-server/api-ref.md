---
title: API Reference
sidebar:
  order: 3
---

# APIs

## Administrator Authentication

### `POST` &nbsp;&nbsp;&nbsp; /api/register

- Register an admin for o-RDS

| Response Code | Description           |
| ------------- | --------------------- |
| 201           | User Created          |
| 400           | Missing Fields        |
| 409           | User Already Created  |
| 500           | Internal Server Error |

---

### `POST` &nbsp;&nbsp;&nbsp; /api/login

- Login to o-RDS

| Response Code | Description                            |
| ------------- | -------------------------------------- |
| 200           | Login Successful                       |
| 404           | Email and password combination invalid |
| 500           | Internal Server Error                  |

## Survey Routes

### `GET` &nbsp;&nbsp;&nbsp; /api/survey/{surveyID}

- Retrieve a survey configuration

#### API Parameters

**_surveyID_** - The unique identifier for a survey ID

| Response Code | Description           |
| ------------- | --------------------- |
| 200           | Survey Retrieved      |
| 404           | Survey Doesn't Exist  |
| 500           | Internal Server Error |

---

### `GET` &nbsp;&nbsp;&nbsp; /api/surveys

- Retrieve all surveys

| Response Code | Message             |
| ------------- | ------------------- |
| 200           | Surveys Found       |
| 403           | Unauthorized Access |
| 404           | User does not exist |

---

### `POST` &nbsp;&nbsp;&nbsp; /api/survey/{surveyID}

- Update or create a survey with the provided ID

#### API Parameters

**_surveyID_** - The unique identifier for a survey ID

#### Required Body Fields

**_surveyData_** - Contains the survey configuration object

| Response Code | Message                       |
| ------------- | ----------------------------- |
| 201           | Survey created or overwritten |
| 403           | Unauthorized Access           |
| 500           | Internal server error         |

---

### `DELETE` &nbsp;&nbsp;&nbsp; /api/survey/{surveyID}

- Delete a survey with the provided ID

#### API Parameters

**_surveyID_** - The unique identifier for a survey ID

| Response Code | Message               |
| ------------- | --------------------- |
| 200           | Survey Deleted        |
| 403           | Unauthorized Access   |
| 404           | Survey does not exist |
| 500           | Internal server error |

## Response Routes

### `GET` &nbsp;&nbsp;&nbsp; /api/survey/{surveyID}/repsonse/{alias}

- Retrieves the response of a specific person

#### API Parameters

**_surveyID_** - The unique identifier for a survey ID

**_alias_** - A survey takers unique, nonidentifiable number

| Response Code | Message                |
| ------------- | ---------------------- |
| 200           | Response found         |
| 404           | Response doesn't exist |
| 500           | Internal server error  |

---

### `GET` &nbsp;&nbsp;&nbsp; /api/survey/{surveyID}/responses

- Retrieves all responses for a survey

#### API Parameters

**_surveyID_** - The unique identifier for a survey ID

| Response Code | Message               |
| ------------- | --------------------- |
| 200           | Responses found       |
| 403           | Unauthorized Access   |
| 404           | Survey doesn't exist  |
| 500           | Internal server error |

---

### `POST` &nbsp;&nbsp;&nbsp; /api/response

- Creates a survey response

#### Required Body Fields

**_surveyID_** - Contains the ID of a survey

**_alias_** - Contains the alias associated with the response

**_responseData_** - Contains a particpants responses

**_parentHash_** - Contains the hash of the parent to track referral chains

| Response Code | Message                         |
| ------------- | ------------------------------- |
| 200           | Responses found                 |
| 201           | Response created or overwritten |
| 403           | Unauthorized Access             |
| 404           | Survey or alias does not exist  |
| 409           | Referral link at max uses       |
| 500           | Internal server error           |

---

### `DELETE` &nbsp;&nbsp;&nbsp; api/response &nbsp;&nbsp;&nbsp;

- Deletes a response

**NOTE: CURRENTLY NOT IMPLEMENTED**

---

## Incentive Routes

### `POST` &nbsp;&nbsp;&nbsp; /api/incentive

- Creates a hash to represent a paricpant for use in referral incentives

#### Required Body Fields

**_surveyID_** - Contains the ID of a survey

| Response Code | Message                           |
| ------------- | --------------------------------- |
| 201           | Hash Created                      |
| 400           | Invalid request, missing surveyID |
| 409           | No incentive found                |
| 500           | Internal server error             |

---

### `GET` &nbsp;&nbsp;&nbsp; /api/survey/{surveyID}/incentive

- Retrieve incentive information using a hash representing a particpant's incentives

| Response Code | Message                           |
| ------------- | --------------------------------- |
| 200           | Incentive information found       |
| 400           | Invalid request, missing surveyID |
| 404           | Hash does not exist               |
| 500           | Internal server error             |

---

## Other Routes

### `POST` &nbsp;&nbsp;&nbsp; /api/alias

- Creates an alias for a specific survey using the surveyID

#### Required Body Fields

**_surveyID_** - Contains the ID of a survey

| Response Code | Message                           |
| ------------- | --------------------------------- |
| 201           | Alias created                     |
| 400           | Invalid request, missing surveyID |
| 500           | Internal server error             |

---

### `PATCH` &nbsp;&nbsp;&nbsp; /api/user-remove

- Removes a user from a survey

#### Required Body Fields

**_surveyID_** - Contains the ID of a survey

**_userID_** - Contains the ID of the user to be removed from a survey

| Response Code | Message                                    |
| ------------- | ------------------------------------------ |
| 400           | Invalid request, missing surveyID or email |
| 404           | User or survey does not exist              |
| 500           | Internal server error                      |

---

### `PATCH` &nbsp;&nbsp;&nbsp; /api/user-add

- Adds a user to a survey

#### Required Body Fields

**_surveyID_** - Contains the ID of a survey

**_userID_** - Contains the ID of the user to be removed from a survey

| Response Code | Message                                    |
| ------------- | ------------------------------------------ |
| 400           | Invalid request, missing surveyID or email |
| 404           | User or survey does not exist              |
| 500           | Internal server error                      |

## Tremendous Routes

### `GET` /api/tremendous/listCampaigns

- Retrieves all campaigns associated with the users account

| Response Code | Message               |
| ------------- | --------------------- |
| 200           | Campaigns Found       |
| 500           | Internal server error |

---

### `GET` &nbsp;&nbsp;&nbsp; /api/listFundingSources

- Retreives all funding sources associated with the users account

| Response Code | Message               |
| ------------- | --------------------- |
| 200           | Funding Sources Found |
| 500           | Internal server error |

---

### `POST` &nbsp;&nbsp;&nbsp; /api/survey/{surveyID}/sendPayment/{mode}

- Sends a payment using Tremendous' API with the provided method

#### API Parameters

**_surveyID_** - Contains the ID of a survey

**_mode_** - The method in which someone like to recieve their incentive

#### Required Body Fields

**_funding_source_id_** - Contains the id of the funding source used for this incentive payout

**_campaign_id_** - Contains the id of the campaign Tremendous will use to send the incentive payout

**_denomination_** - Contains the amount that will be paid out

**_recipient_** - An object that contains a recipient's name and email

**_method_** - Contains the method in which a recipient will recieve their payout

| Response Code | Message                |
| ------------- | ---------------------- |
| 200           | Reward paid            |
| 400           | Invalid mode           |
| 400           | Unable to claim reward |
| 500           | Internal server error  |

## Twilio Routes

### `POST` &nbsp;&nbsp;&nbsp; /api/twilio/verfication

- Verifies a phone number is real

#### Required Body Fields

**_to_** - Contains a particpant's phone number and sends their OTP code

| Response Code | Message                                                                |
| ------------- | ---------------------------------------------------------------------- |
| 200           | Survey taker registered successfully. Verification code has been sent. |
| 400           | Invalid phone number                                                   |
| 500           | Internal server error                                                  |

### `POST` &nbsp;&nbsp;&nbsp; /api/twilio/verficationCheck

- Verifies a participant's OTP code

#### Required Body Fields

**_to_** - Contains a particpant's phone number

**_code_** - Contains the code entered by a participant

| Response Code | Message                              |
| ------------- | ------------------------------------ |
| 200           | Survey taker verification successful |
| 401           | Invalid code                         |
| 404           | Survey taker not found               |
| 500           | Internal server error                |
