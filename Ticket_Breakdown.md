# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1 ->

Server - DB

Facility can save their own custom id for an Agent.

Update Agent model to have a property to hold the custom id which will be String. The propery can be empty. Default value of the property should be empty string. - 2d
Describe steps / Create custom script to migrate the existing DB records to the updated Agent model - 1d

Acceptance criteria ->
    When a record of an agent with a custom id is added to the db it should be saved in the db as provided.
    When a record of an agent without a custom id is added to the db the default value should be assigned to the custom id property before saving in the db.
    When a record of an agent with custom id is requested from the db it should provide the agent record with custom id.
    When a record of an agent without custom id is requested from the db it should provide the agent record with the default custom id value.
    When a custom id is updated for an existing agent db should hold the updated custom id value



### Ticket 2 -> 

Server

Update getShiftsByFacility to return Agent info with custom id. - 1d

Acceptance criteria ->
    If an agent is provided a custom id it should return with the provided custom id.
    If an agent is no provided a custom id it should return with the default value of custom id.



### Ticket 3 -> 

Server

Update generateReport function to use the Agent custom id instead of internal DB id when provided. - 1d

Acceptance criteria ->
    When a facility uses custom id the report should have custom ids for agents instead of the internal db id.
    When a facility not uses custom id the report should have internal DB ids for agents.


### Ticket 4 ->

FE - UI

Agent data adding UI should include a field to where user can enter custom ID for Agent - 2d

Acceptance criteria ->
    When a custom id is provided it should be included in the request
    