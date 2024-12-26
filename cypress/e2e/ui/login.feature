Feature: Login to the application

  Scenario: User logs in successfully with valid credentials
    Given I visit the login page
    When I enter valid credentials
    Then I should see the homepage
