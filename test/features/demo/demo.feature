Feature: Demo Feature
  Feature to demonstrate the usage of Cucumber

  @demo
  Scenario Outline: Demo Scenario
    Given Google page is opened
    # When I search for <SearchItem>
    # Then Click on the first search result
    # Then URL should match with <ExpectedURL>

    Examples:
      | TestID    | SearchItem | ExpectedURL           |
      | DEMO_TC01 | WDIO       | https://webdriveer.io |
