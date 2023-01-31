# User List


## Task

Create an application for writing users to a database (firebase). Each created user must be displayed on the screen.
The required input fields for the form are as follows: first and last name, phone, email, and date of birth. You need to add minimal validation. It is also necessary to implement filtering and pagination

## Implementation

The application implements all required inputs and two additional ones - an optional field "job" and a mandatory "gender". These fields are used to filter the results. One page can have up to 4 users.

This app uses the following third-party libraries These dependencies are written in the package.json file

    "antd": "^5.0.7",
    "firebase": "^9.15.0",
    "react-input-mask": "^2.0.4",
    "react-uuid": "^2.0.0",
    
During my acquaintance with React some time ago, I encountered a problem - the API request worked only locally. Therefore, I checked the correctness of the logic through Docker from the very beginning.

Unfortunately, I was unable to implement the user filter. But I'm sure I'll be able to handle it with more time.

I wasn't looking for a perfect design. The main thing was to reproduce the logic of the application

## App problems

1) I have double rendering when submitting the form. You can see that the form inputs turn red for a second but then return to their desired state. I understood that this behavior is caused by an asynchronous request to the database. But I don't know how to solve it yet

2) Date validation of the birth input field is not ideal, as I would like. I have not been able to implement checking for the previous digit, so you can get the true result for the string "39-18-2487"

3) There is also an issue with the input field for gender. The default value is "male", you can see this when you first run it. But if you change this gender and create a user, then when you update the form, the selection will look the same, although the value for the record will change to the default value

## About build and deploy

Link to the done website
https://newage-users.tetiana-chykalova.click

##### If you need to work with the code, write npm install in your terminal, then all the necessary dependencies will be added for you locally

    npm install

### The application is hosted using Docker, Nginx, and AWS EC2, ECR, Route53. Security certificate added using Certbot.
##### If it is necessary to update the application, stop the "daemon" and perform the following actions:

Build a new static file using the docker build

    docker build -t <<tag>> .
    
Push a local Docker representation using the docker push

    docker push <<tag>>

##### Next, use the key to go to the service and execute the following commands on behalf of the root

Download the latest version of the application using the docker pull

    sudo docker pull <<tag>>

Run the new version as a "daemon"

    sudo docker run -d -p <<port>> <<tag>>


## About me

### You can find out more about my experience and skills at the link
https://tetiana-chykalova.click/
