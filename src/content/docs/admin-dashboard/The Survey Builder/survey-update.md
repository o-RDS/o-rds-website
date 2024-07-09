---
title: The Survey Updater
sidebar:
  order: 4
---

# Understanding how the surveys are updated

## Survey configuration

Each survey has its own configuration file. The survey builder and live survey both use this to build and edit surveys. The survey builder utilizes React context and a reducer in order to easily update portions of the survey. Without the reducer, you would have to write specific code for each setting to be changed and then pass it up through several components just to ensure the survey builder is updating in realtime and the configuration is being accurately updated. This documentation describes the best practices for utilizing the updater.

## Understanding the Updater

### The basics

As previously mentioned, the updater utilizes React built in context and reducer hooks. The combination of these two allow the survey to easily be updated from anywhere in the survey builder, but also simplifies code as one main function (the reducer) handles updating the configuration. The context also allows the survey preview to be updated without each component needing to be passed a function that it then calls to update items at the top of the component tree.

Virtually any changes made in the editor utilize the combination of these two hooks. The reducer contains two parts, the dispatch function and the actual reducer function.

### The Context

The context is wrapped around the reducer so that the reducer and survey configuration can be accessed anywhere in the survey builder. This eliminates the need for many functions to keep track of changes in the survey builder.

### The Reducer

The reducer function is built-in to React. It is effectively React's native implementation of something like Redux, so if you have experience in Redux the reducer should be easy to pick up. The reducer has two parameters: `tasks` and `action`. `Tasks` is the current updated value the reducer is utilizing. In this case it will be the survey configuration. The `action` parameter contains the values passed to the reducer through a dispatch function. The action parameter is an object and contains a `type` property. Based on the `type` property the reducer will determine the necessary action.

#### Adding additional cases for the reducer

If you add new areas where the survey configuration will be updated within the survey builder, you must add a new case in the reducer. In order to do this just follow standard conventions for a switch statement. Current practice is to assign a local variable to `tasks`, perform your update using that variable, then return the updated values. The reducer requires an object to be returned in the following format:

`{
survey: tasks['survey'],
question: tasks['question'],
change: false,
error: "",
}`

A couple things to note regarding the fields:

**_Survey_**: This field represents the complete survey configuration. You should make this field have the value of the most updated survey configuration. If a particular action didn't result in the configuration being altered, you can set this to tasks['survey']. If the updated survey configuration was passed in such as in the `initialize` action, then set equal to the `action.survey` value. Finally, if you use a local variable to update the survey, set the field equal to `<yourVariable>['survey']`.

**_Question_**: This field represents the question you are currently editing. You should make this field have the value of the question you have most recently edited. If a particular action didn't result in the question you are currently editing to be changed you can set this to tasks['question']. Otherwise, you should pass the index of the newest question you are editing. This field is only changed when a question is added, selected or deleted all of which are covered with currently implemented cases so you should not have to ever worry about this field.

**_Change_**: This field indicates whether any changes have taken place since it was last saved. It is best to not pass this in through a dispatch and instead set it to `true` or `false` when returning the object from the reducer.

**_Error_**: This represents an error message. You can either choose to pass in a value or you can just dispatch the type and handle it within the reducer.

### The Dispatch Function

In any component that modifies a survey's configuration you will find a function dedicated to that change. Within that function will be a dispatch function. This dispatch function takes any changes that you give it and passes it to the reducer function. When creating functions that utilize this function we recommend that you make the changes to a local copy of the survey configuration, then use that in the dispatch.

There is only one required value in the object that you pass using the dispatch function: `type`. `Type` is required for the reducer to know what action should be completed. Without it you will get errors. Otherwise you can name any other fields you would like to dispatch.

For more information about how the reducer works in conjunction with context, React provides great documentation [here](https://react.dev/learn/scaling-up-with-reducer-and-context).
