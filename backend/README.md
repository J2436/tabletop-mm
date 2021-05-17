# Tabletop Matchmaker Backend

## Initializing Docker container
### Development
#### Docker Compose (in root directory) 
docker-compose -f docker-compose.yml -f docker-compose.dev.yml --build -d up
#### Individual docker commands 
docker run -v <PathToHostSrc>:<PathToWorkDir>:ro --env-file <PathToEnvFile> -p <LocalPort>:<ContainerPort> --name <ContainerName> <ImageName>

### Environment Variables
* PORT = port that the server will listen on 
* MONGODB\_URI - connection string to mongoDB 
* SECRET - used by bcryptjs
