pipeline {
    agent any

    environment {
        APP_NAME = "my-app"
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/anandu-github/my-cicd.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
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
                docker stop my-app || true
                docker rm my-app || true
                docker run -d -p 80:3000 --name my-app my-app
                '''
            }
        }
    }
}
