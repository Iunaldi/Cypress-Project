Feature: End to end Ecommerce validation

    application regression

    Scenario: Ecommers prodcts delivery
    Given I open Ecommerce Page
    When I add items to cart
    And Validate the tottal prices
    Then select the country submit and verify Thank you

    Scenario: FIlling the form to shop
    Given I open Ecommerce Page
    When I fill the form details
    Then Validate the forms behaviour
    And select the Shop Page