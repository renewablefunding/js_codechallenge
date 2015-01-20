Renewable Funding: jsCodeChallenge
=================================

Hi there!  We're ecstatic that you're interested in working for Renewable Funding's dev team.  To get a better idea of your current development skills, we'd like for you to complete a code challenge - build an application according to a set of requirements.  The actual business requirements are listed further down, but here are the general tech requirements:

1. Create a web application using the [AngularJS framework](https://angularjs.org/).
1. Make sure your app is runnable on Mac OS X or Linux.
1. Do not require any for-pay software.
1. Include instructions for setting up and running your application.

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

Unfortunately, Github no longer allows you to fork a public repo and make it private, so your submission would be visible to the entire world.  We'd love to keep this fair and not give the last responders a possible unfair advantage (since they'd be able to see all prior submissions); hence the patch method.

## Project Description

Imagine that Renewable Funding has just decided to get into the suddenly-lucrative market of apparent-solar-time analysis.

http://sunrise-sunset.org/api is a suggested free api

We want a user to be able to use our site as follows:

1. enter a latitude, longitude, and a date (default to today).
1. see seven-days worth (ending with user's requested date) of brief sunrise and sunset data (sunrise, sunset, day length) in a table-like view.
1. a user can sort the table by any of the columns ascending or descending (maybe something about saving settings?)
1. a user can click on a row in the table to view a more detailed page about that date (additional info like solar noon, civil twilight begin/end displayed).
1. maybe something about browser history


#### Bonus options:

If you're feeling inspired, bonus points for:

* allowing a user to request a city or zip code instead of latitude and longitude
* allow a user to save settings for the table view (e.g. a specific seven day period sorted by day length, descending) with a url that can be linked to and display these settings.

## Evaluation

Reviewers will assess your familiarity with standard libraries, and with object-oriented programming.

1. Did your application fulfill the basic requirements?
1. Did you document the method for setting up and running your application?
1. Did you follow the instructions for submission?
