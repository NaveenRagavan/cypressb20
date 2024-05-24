Feature: verify login functionality

    Scenario: verify login with valid credentials
        Given Launch the application
        When user enter the username "Admin" and password "admin123"
        And user clicks on the login button
        Then user should be navigate to dashboard page

    Scenario: verify login with valid username and invalid password
        Given Launch the application
        When user enter the username "Admin" and password "eytudw"
        And user clicks on the login button
        Then user should get login error

    Scenario: verify login with invalid username and valid password
        Given Launch the application
        When user enter the username "tryeu" and password "admin123"
        And user clicks on the login button
        Then user should get login error

    Scenario: verify login with invalid username and invalid password
        Given Launch the application
        When user enter the username "eynjsjn" and password "eytudw"
        And user clicks on the login button
        Then user should get login error