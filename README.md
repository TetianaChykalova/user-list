# User List

## About app

This app uses the following third-party libraries These dependencies are written in the package.json file

    "antd": "^5.0.7",
    "firebase": "^9.15.0",
    "react-input-mask": "^2.0.4",
    "react-uuid": "^2.0.0",
    
During my acquaintance with React some time ago, I encountered a problem - the API request worked only locally. Therefore, I checked the correctness of the logic through Docker from the very beginning.

Unfortunately, I was unable to implement the user filter. But I'm sure I'll be able to handle it with more time.

## About build and deploy

##### If you need to work with the code, write npm install in your terminal, then all the necessary dependencies will be added for you locally

    npm install

All form fields are mandatory. The fields for entering the phone number and email have additional validation. I would really like to add validation to the field for entering the date of birth, but unfortunately, it is not there yet

### The application is hosted using Docker, Nginx, and AWS EC2, ECR, Route53. Security certificate added using Certbot.
##### If it is necessary to update the application, stop the "daemon" and perform the following actions:

Build a new static file using the docker build

    docker build -t <<tag>> .
    
Push a local Docker representation using the docker push

    docker push <<tag>>

##### Next, use the key to go to the service and execute the following commands on behalf of the root

Download the latest version of the application using the docker pull

    sudo docker pull <<tag>>

Run the new version as a "daemon" (in the example, the port used during the first setup is specified)

    sudo docker run -d -p <<port>> <<tag>>
    
## About candidate
### You can find out more about the candidate's experience and skills at the link
https://tetiana-chykalova.click/
