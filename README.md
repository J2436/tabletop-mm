# Tabletop Matchmaker 

## Using Docker 
### Development
* Docker Compose (in root directory) 

  `docker-compose -f docker-compose.yml -f docker-compose.dev.yml --build -d up`
#### Individual Docker commands 
* `docker run -v \<PathToHostSrc>:\<PathToWorkDir>:ro --env-file \<PathToEnvFile> -p \<LocalPort>:\<ContainerPort> --name \<ContainerName> \<ImageName>`
### Production
* `docker-compose -f docker-compose.yml -f docker-compose.prod.yml --build -d up`
### Environment Variables
#### Backend  
* PORT = port that the server will listen on 
* MONGODB\_URI - connection string to mongoDB 
* SECRET - used by bcryptjs
