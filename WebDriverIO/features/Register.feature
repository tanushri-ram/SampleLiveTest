Feature: Register on the website

Background: 
Given User is on website landing page

Scenario: Create account for a new user

When User clicks on Signin link
And User enters email address
And User enters personal information

Then Registration should be successful