pipeline {
    agent any

    environment {
        APP_NAME = "my-app"
    }

    tools {
        nodejs 'node-18'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker rmi $APP_NAME .'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $APP_NAME .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop $APP_NAME || true
                docker rm $APP_NAME || true
                docker run -d -p 80:3000 --name $APP_NAME $APP_NAME
                '''
            }
        }
    }
}
