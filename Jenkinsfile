pipeline {
    agent any
    tools { nodejs "node" }
    stages {
        stage('Build') {
            steps {
                git 'https://github.com/ajakka/bdai-events.git'
                sh 'npm i'
            }
        }
    }
}