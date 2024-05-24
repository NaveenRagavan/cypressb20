Feature: verify addemployee functionality

    Scenario: verify add employee with mandatory details
        Given Launch the application
        When user enter the username "Admin" and password "admin123"
        And user clicks on the login button
        And user should be navigate to dashboard page
        And user clicks on PIM
        And user clicks on addemployee submenu
        And user enter the firstname "Naveen" and lastname "V"
        And user clicks on save button
        Then user should get successfully saved conformation message

        Scenario: verify mandatory fields in addemployee
        Given Launch the application
        When user enter the username "Admin" and password "admin123"
        And user clicks on the login button
        And user should be navigate to dashboard page
        And user clicks on PIM
        And user clicks on addemployee submenu 
        And user clicks on save button
        Then user should get errormessage for firstname and lastname

