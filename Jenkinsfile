pipeline {
    agent any

    environment {
        BASE_URL = 'https://addisproduction-production.up.railway.app'
        password = credentials('adis-password')
        username = credentials('adis-username')
    }


    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'echo CI=%CI%'
                bat 'npx playwright test'
            }
        }

    }

post {
    always {
        archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true

        publishHTML([
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright HTML Report',
            keepAll: true,
            alwaysLinkToLastBuild: true,
            allowMissing: true
        ])
    }
}
}