pipeline {
    agent any

    environment {
        APP_NAME = "my-app"
        CONTAINER_PORT = "3000"
        HOST_PORT = "80"
    }

    stages {

        stage('Install Dependencies') {
            agent {
                docker {
                    image 'node:18'
                }
            }
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
                docker stop $APP_NAME || true
                docker rm $APP_NAME || true
                docker run -d -p $HOST_PORT:$CONTAINER_PORT --name $APP_NAME $APP_NAME
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed!'
        }
    }
}
