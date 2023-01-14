# Pipeline process.

- it containe  orbs , jobs and workflows.
## orbs.
- need to app and deployment are :-
> node
> elastic beanstalk
> aws-cli

## jobs.
- it containe Two jobs
### build.
- it build the project with the following `steps command`.
> Install Front-End Dependencies.
> Install API Dependencies.
> Front-End Build.
> API Build.

### deploy.
- it deploy the project on the server with the following `steps command`.
> Front-End Deploy.
> api Deploy.


## workflows.
- it contain one job that order the Pipeline.
> first it must build successfully to continue.
> then it wait for human approval to deploy.
