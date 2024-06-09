FROM eclipse-temurin:21-jdk-jammy AS base

FROM base AS deps

WORKDIR /app

COPY .mvn .mvn
COPY pom.xml mvnw ./

RUN bash mvnw --batch-mode dependency:go-offline dependency:resolve-plugins

FROM base AS build

WORKDIR /app

COPY --from=deps /root/.m2 /root/.m2

COPY . .

RUN bash mvnw clean install -DskipTests

FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

EXPOSE 8080

COPY --from=build /app/target/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar" ]