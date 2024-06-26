---
title: Setup
sidebar:
    order: 2
---

# Setting Up o-RDS

## Forking the repositories

To start using o-RDS first start by forking both the [client](https://github.com/o-RDS/o-rds-web-app) and the [proxy server](https://github.com/o-RDS/o-rds-server) repositories. Forking the repositories allows the maintainers of o-RDS to ensure only quality code is being accepted into the o-RDS codebase. Once you have forked the repositories, clone them for use on your local machine. Ensure you have npm installed and then navigate to the project directories. Type ```npm i``` to install all dependencies required for this project. Your projects should now be on your machine but there is still a couple more steps before it is ready to run. o-RDS makes use of several third party services to enable its functionality. For security purposes we utilized Twilio and to distribute rewards we utilized Tremendous. Both of these services require API keys to run. You can follow a guide [here](./api-keys.md). Additionally, o-RDS has Firebase integrated by default. You will also need to create a Firebase project and generate keys to use if you wish. Once you have completed those steps run `npm run start` for both projects and it should be up and running. The next step is hosting the server and client.

## Deploying the applications

While o-RDS can be run entirely from local computers, it functions best when deployed online. In order to acheive this pick your provider of choice and follow the instructions provided by them. The o-RDS Team use Firebase to host the client and Railway to host the proxy server. We also reccomend purchasing a domain for your client. 

## Contributing to o-RDS

o-RDS is an open-source project which means we invite anyone who makes improvements to contribute to the project! The project contains a `testing` branch. If you have develpoed something you would like to add to o-RDS please create a pull request to that branch and a maintainer will review. If the code added is demmed acceptable, the request will be approved. 
