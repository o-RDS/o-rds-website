---
title: Setup Checklist
sidebar:
    order: 2
---

# Setting Up o-RDS

## 1. Forking the repositories

To start using o-RDS first start by forking both the [client](https://github.com/o-RDS/o-rds-web-app) and the [proxy server](https://github.com/o-RDS/o-rds-server) repositories. Forking the repositories allows the maintainers of o-RDS to ensure only quality code is being accepted into the o-RDS codebase. Once you have forked the repositories, clone them for use on your local machine. Ensure you have npm installed and then navigate to the project's  root directory. Type ```npm i``` to install all dependencies required for this project. Your projects should now be on your machine but there is still a couple more steps before it is ready to run. 

## 2. Setting Up the Proxy Server & Database

o-RDS comes with a built-in proxy server. All you need to do is add your API keys for use with Twilio and Tremendous, create and connect your database, and ensure all routes in the client lead to the server. Please note: o-RDS comes with Firebase integration. If you decide to use another No-SQL database you may have to reconfigure some APIs in order for them to work. The guide to setting up the proxy server can be found [here](/backend-server/proxy-server).

## 3. Deploying the applications

While o-RDS can be run entirely from local computers, it functions best when deployed online. In order to acheive this pick your provider of choice and follow the instructions provided by them. The o-RDS Team use Firebase to host the client and Railway to host the proxy server. We also reccomend purchasing a domain for your client. 

## 4. Contributing to o-RDS

o-RDS is an open-source project which means we invite anyone who makes improvements to contribute to the project! The project contains a `testing` branch. If you have develpoed something you would like to add to o-RDS please create a pull request to that branch and a maintainer will review. If the code added is demmed acceptable, the request will be approved. 
