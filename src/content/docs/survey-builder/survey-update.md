---
title: The Survey Updater
sidebar: 
    order: 3
---

# Understanding how the surveys are updated

## Survey configuration

Each survey has its own configuration file. The survey builder and live survey both use this to build and edit surveys. The survey builder utilizes React context and a reducer in order to easily update portions of the survey. Without the reducer you would have to write specific code for each setting to be change and then pass it up through several components just to ensure the survey builder is updating in realtime and the configuration is being accurately updated. This documentation describes the best practices for utilizing the updater.

## Understanding the Updater

### The basics

As previously mentioned, the updater utilizes React built in context and reducer hooks. The combination of these two allow the survey to easily be updated from anywhere in the survey builder, but also simplifies code as one main function (the reducer) handles updating the configuration. The context also allows the survey preview to be updated without each component needing to be passed a function that it then calls to update items at the top of the component tree. 

Virtually any changes made in the editor utilize the combination of these two hooks. The reducer contains two parts, the dispatch function and the actual reducer function. 

### The Reducer



### The Dispatcher Function

In any component that modifies the a survey's configuration you will find a function dedicated to that change. Within that function will be a dispatch function. This dispatch function takes any changes that you give it and passes it to the reducer function. When creating functions that utilize this function we reccommend that you make the changes to a local copy of the survey configuration, then use that in the dispatch. 

Something to note is that

