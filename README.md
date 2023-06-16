# Project Hierarchy 
## Code Directory
Contains source code of backend "Web api application" and frontend "react application"
## Publish Directory
Contains publish files of backend "Web api application" and frontend "react application" 
## Documentation Directory
Contains all documentation for ERD and deplyment steps

# How To Run Application ? 
This Project consist of 3 Main Parts (Frontend "React", Backend"C# .NET", Database "SQLserver")

## Using Docker
1- Change directory to Code/Backend directory and open cmd.\
2- Run docker command "docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d"  to created and start containers with sql server.\

## Run Locally:

### Frontend:
1- You need to change directory to be inside Publish/frontend directory.\
2- You need to run "npm install -g serve" on cmd.\
3- Then run "serve -s build".\
Now Fronend process exposed on port 3000.\

### Backend:
1- open publish/Backend/E.Commerce.WebApi directory.\
2- or run E.Commerce application.\


