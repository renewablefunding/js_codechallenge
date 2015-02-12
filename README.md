Renewable Funding: jsCodeChallenge
=================================

Hi there! We're ecstatic that you're interested in working for Renewable Funding's dev team. To get a better idea of your current development skills, we'd like for you to complete a code challenge - build an application according to a set of requirements. The actual business requirements are listed further down, but here are the general tech requirements:

1. Create a single-page web application.
1. Make sure your app is runnable on Mac OS X or Linux.
1. Do not require any for-pay software.
1. Include instructions for setting up and running your application locally.

We currently use Angular, Jasmine, Bootstrap, RequireJS but you may use any libraries or frameworks you wish.

Feel free to email us at [devteam@renewfund.com](devteam@renewfund.com) if you have any questions.

## Submission Instructions

1. Clone this repository.
1. Create (and switch to) a new branch in your local repository:

 ```bash
 git checkout -b new-branch-name
 ```

1. Complete the project as described below within your local repository.
1. Create patches from your commits, and place them in a directory:

 ```bash
 git format-patch master -o submission_patches
 ```

1. Create a .zip file with the contents of the patches directory:

 ```bash
 zip -r submission_patches.zip submission_patches
 ```

1. Email the .zip file to [devteam@renewfund.com](devteam@renewfund.com), and put the position you are applying for in the email's subject.

If you have any questions about this submission process, feel free to email us.

#### Why can't I just fork, and submit a pull request?

Unfortunately, Github no longer allows you to fork a public repo and make it private, so your submission would be visible to the entire world. We'd love to keep this fair and not give the last responders a possible unfair advantage (since they'd be able to see all prior submissions); hence the patch method.

## Project Description

Renewable Funding has decided to enter the lucrative market of apparent-solar-time analysis.

It's a no brainer given the availability of APIs like these:

* http://sunrise-sunset.org/api 
* https://developers.google.com/maps/documentation/geocoding/#geocoding
* https://msdn.microsoft.com/en-us/library/ff701714.aspx

We want a user to be able to use our site as follows:

1. Enter an address and a date range (default to the past seven days).  
1. See table-like presentation of sunrise time, sunset time, and day length. Each row would be a day in the requested range.
1. A user can sort the table by any of the columns ascending or descending. 
1. A user can click on a row in the table to view more detailed data about that date (additional info like solar noon, civil twilight begin/end, & c. is displayed). On this page, please include a display of rfNauticalAfternoon, defined by our business people as the time elapsed from solar noon until the end of nautical twilight.

#### Bonus options:

If you're feeling inspired, bonus points for:

* enabling a user to save settings for the table view (e.g. a specific seven day period sorted by day length, descending) with a url that can be linked to and display these settings.
* enabling a user to set the time zone in which all times are displayed.
 
#### Special note:

One of the APIs above does not accommodate cross domain requests. What workaround would you suggest we use to successfully run your app?

## Evaluation

Reviewers will assess your familiarity with standard libraries, single-page app best practices, and test coverage.

1. Did your application fulfill the basic requirements?
1. Did you document the method for setting up and running your application?
1. Did you follow the instructions for submission?
