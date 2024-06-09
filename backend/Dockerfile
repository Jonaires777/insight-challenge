FROM maven:3.8.5-openjdk-21 AS base

FROM base AS deps

WORKDIR /app

COPY .mvn .mvn
COPY pom.xml mvnw ./

RUN mvn --batch-mode dependency:go-offline dependency:resolve-plugins

FROM base AS build

WORKDIR /app

COPY --from=deps /root/.m2 /root/.m2

COPY . .

RUN mvn clean install -DskipTests

FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

EXPOSE 8080

COPY --from=build /app/target/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar" ]