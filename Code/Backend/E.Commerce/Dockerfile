#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["E.Commerce/E.Commerce.csproj", "E.Commerce/"]
RUN dotnet restore "E.Commerce/E.Commerce.csproj"
COPY . .
WORKDIR "/src/E.Commerce"
RUN dotnet build "E.Commerce.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "E.Commerce.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "E.Commerce.dll"]