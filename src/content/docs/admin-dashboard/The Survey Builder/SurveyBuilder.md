---
title: The Survey Editor
sidebar: 
    order: 2
---

# Survey Builder

## Basics
o-RDS comes with a `Survey Builder` in order to create your surveys. It is a powerful tool that makes it easy to build the perfect survey for you. The `Survey Builder` contains quite a few features in order to help you achieve that. Let's dive into how the `Survey Builder` works.

***If you are a developer, documentation related to implementing new features can be found [here](survey-update.md)***

## Survey Builder Structure
The `Survey Builder` consists of 5 main parts. These parts are: the questions preview, the question settings sidebar, the survey settings, the top status bar, and the publish modal. Each of these parts serve an important role in making the `Survey Builder` run.

### The Question Preview
The first main part you will learn about is the `Question Preview` section. In this section you will see all the questions you have created as well as a button to add questions. This will give you a quick indicator as to what your survey will be like. Let's dive into the questions themselves.

#### The Questions
Currently there are 4 types of questions implemented in o-RDS. These include `Multiple Choice`, `Checkbox`, `Fill in the Blank`, and `Short Answer`. These are the 4 questions you'll see when building a survey. You can switch between what question is currently being edited by clicking on the question itself. When you hover over a question, the border with highlight in orange and then once a question is selected it will have an orange border permanently. Additionally, the question's settings will be displayed on the left. 

If you have multiple questions you can change the order of the questions. To do this, there are two arrows in the top right portion of a question. The `up` arrow moves the question up one spot, the `down` arrow moves the question down one spot. 

A button that is also in the top right of a question is the delete button. This button will remove the question from the survey forever. `If you accidently remove a question there is no way to recover it!`

### Configuration Sidebar
The `Configuration Sidebar` is where all question editing is done. There are two categories of options based on which question you have selected. All questions contain the `General` category. This category includes all options that every question will have including `Page Number`, `Required`, and the `Question Prompt`. `Page Number` changes which page a question will appear on during the survey. `Required` allows you to choose whether you want to make a question required or not. Finally, `Question Prompt` provides a place for you to add or edit your question's question. `Checkbox` questions currently don't have the ability to be required due to the current implemention, however this will be changed in the future. 

The other category that exists is the `Answers` category. This category is only available on `Checkbox` and `Multiple Choice` questions as the options included in it relate to the choices these questions possess. The answers category includes the fields `Number of Choices` and `Current Choices`. `Number of Choices` allows you to pick the number of choices you want for each question, while the `Current Choices` option allow you to edit your current choices. 

All changes to a question from the sidebar are done in realtime and are instant. 

### The Status Bar
`The Status Bar` (Shown at the top of the page, beneath the main navigation) provides a quick overview as to the status of your survey as well as providing navigation to the results page of your survey. `The Status Bar` contains the following items: `Survey Name`, `Save Button`, `Settings Button`, `Survey Status`, `Survey Results Button`, and `Publish Button`. 

### Publish Modal

When you are ready to publish your survey, you can click the publish button in the top right of the survey builder. This will bring up the publishing modal. Here you will be able to publish the survey as well as pause the survey when needed.

This modal presents a quick overview of the settings in your survey. There are two required items in order to publish a survey:

- ***Title*** - This is the title of your survey.
- ***A least one question*** - This ensures you have at least one question.

If either one of the above requirements are not met, the publish button will be grayed out and you will be unable to publish that survey.

The following are items that aren't required but are recommended:

- ***A Researcher Message*** - This is a message typically used for an informed consent.
- ***End of survey message*** - This message is helpful for thanking particpants and providing further instructions.
- ***Researcher Phone Number*** - This is used in the contact button in a live survey. Without it, particpants may have trouble contacting you with questions or concerns.
- ***Email*** - This is used in the contact button in a live survey. Without it, particpants may have trouble contacting you with questions or concerns.
- ***Mail*** - This is used in the contact button in a live survey. Without it, particpants may have trouble contacting you with questions or concerns.



