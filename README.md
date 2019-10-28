
Step 1: Getting Docker
    Download Docker for desktop

Step 2: Installing docker

Open docker setup to install
Configure Docker in your project.

Once docker is installed, then

    go to project folder you wanna dockerise,
    Create file in a main root of your project with “Dockerfile” without extension
    Define Environment within docker configuration file

#Development
----> touch Dockerfile

FROM nginx:alpine
COPY /build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



Run Command >>>>>> docker build . -t image_name

image_name can be any name of your choice

Check Image
We have to check if the docker image is successfully built.

docker images

Run Command >>>>>> docker run -p 8000:80 image_name
