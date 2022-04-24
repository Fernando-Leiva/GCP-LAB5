# GCP-LAB5

Seleccionar el proyecto.
gcloud config set project gcp-lab-5

Crear la instancia en Cloud SQL \
gcloud sql instances create mysqllab5 \
    --database-version=MYSQL_5_7 --cpu=1 --memory=4GB \
    --region=us-central1 --root-password=password123 \
    --storage-type=HDD


Crear bases de datos. \
gcloud sql databases create GCP-Final-Project --instance=mysqllab5 \

Mostrar en lista las bases de datos. \
gcloud sql databases list --instance=mysqllab5

Connectate a la instancia de cloud sql \
gcloud sql connect mysqllab5 --user=root \

CREATE DATABASE MyPicz; \

USE MyPicz; \
CREATE TABLE user(name VARCHAR(255), username VARCHAR (50), password VARCHAR (100), biografia VARCHAR(250), gravatar VARCHAR(250)); \


USE MyPicz; \
CREATE TABLE picture(url VARCHAR(255), description VARCHAR (300)); \


USE MyPicz; \
CREATE TABLE album(name VARCHAR(255)); \

Create or deploy function. \
gcloud functions deploy "infoUser" --runtime nodejs16 --trigger-http --allow-unauthenticated

