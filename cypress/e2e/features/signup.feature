Scenario: New user
    Given The user opens the singup page
    When The user sign up with valid credentials
    Then The user should see a success message
    And The user should be able to log in with the new account

Scenario: Validar campos requeridos
    Given I open the signup page
    When I try to sign up without filling all required fields
    Then I should see validation errors

Scenario: Validar que no se puede crear un usuario nuevo con “username” ya existente
    Given I open the signup page
    When I try to sign up with an existing username
    Then I should see an error message about the existing username