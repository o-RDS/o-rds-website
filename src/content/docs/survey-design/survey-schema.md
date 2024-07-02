---
title: Survey Schema
sidebar:
    order: 1
---

# Understanding the Survey Schema

## The Basics

The schema for surveys provide a clear and consitent structure for all surveys. It includes all necessary items to run the survey. The following is the schema for o-RDS surveys:

| Field             | Type            | Description                                                                        | Default Value                                                                     |
|-------------------|-----------------|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| id                | String          | The unique ID for the survey                                                      | A unique string generated using uuidv4                                            |
| title             | String          | The title of a survey                                                              | "Untitled Survey"                                                                 |
| admins            | List of Strings | A list of emails of the persons who have access to the survey                      | []                                                                                |
| live              | Boolean         | The current publication state of the survey                                        | false                                                                             |
| completionPayout  | Number          | The amount that is paid out for a participant who completes the survey            | 0.0                                                                               |
| refPayout         | Number          | The amount paid out to a participant who successfully referred another participant | 0.0                                                                               |
| maxRefs           | Number          | The maximum amount of successful referrals a participant can make                  | 0                                                                                 |
| maxRefIncentives  | Number          | The maximum amount of times a participant can be paid for successful referrals     | 0                                                                                 |
| lastUpdated       | Date Object     | The date of the last time the survey was updated                                   | {}                                                                                |
| researcherMessage | String          | The message for a researcher to provide as thanks                                  | ""                                                                                |
| endSurveyMessage  | String          | The message presented at the end of the survey                                     | "Thank you for taking our survey"                                                 |
| informedConsent   | Object          | The informed consent message and requirements                                      | {message: "You must consent to this survey", consentRequirements: ""}              |
| contactInfo       | Object          | Contact information for use in live surveys                                        | {phone: "", email: "", mail: ""}                                                  |
| questionOrder     | List of Strings | Provides the survey with an order for each of the questions                        | [""]                                                                              |
| questions         | Object          | Contains all questions and their individual configurations                         | Refer to [here](/survey-design/questions) for more information on the structure of questions |

