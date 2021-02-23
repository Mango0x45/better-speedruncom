# Better speedrun.com

Photos of the before and after of each theme can be found in the `photos/` directory.

Currently included themes/extensions:

| Name                             | Description                                                                                                          |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `js/round_tabs.js`               | Have rounded tabs on leaderboards, but only on the top left and top right tabs as opposed to each tab being rounded. |
| `js/sort_mods.js`                | Sort game and series moderators by rank when viewing a leaderboard.                                                  |
| `css/no_footer.css`              | Remove the privacy policy footer at the bottom of the screen.                                                        |
| `css/no_sidebar.css`             | Remove the sidebar found on the home and profile pages.                                                              |
| `css/no_rejected_runs.css`       | When viewing runs awaiting verification, remove old rejected runs and show only pending runs.                        |
| `css/no_new_font.css`            | Change headings to use the old heading font as opposed to the new heading font.                                      |
| `css/big_videos.css`             | Make the video player when clicking on a run larger.                                                                 |
| `css/fixed_game_height.css`      | Change the fixed game height when viewing the "All Games" section to avoid weird wrapping and whatnot.               |
| `css/better_audit_log.css`       | An attempt to make the audit log look a little bit nicer.                                                            |
| `css/better_leaderboards.css`    | Make the leaderboards wider, display more players on one line, and category tabs with sensible placement.            |
| `css/better_profile_headers.css` | Decrease the size of the sliders to better fit the profile page, and make the different tabs a little bigger.        |
| `css/widescreen.css`             | Reduce the amount of unused space on the sides of the pages.                                                                                                                     |

## How to install the custom CSS/Javascript

This will be different based on whatever browser you use, however I will explain (until I update this) how to get this stuff on Chrome / Brave / Edge or any other chromium-based browser.

First, you will need 2 browser extentions:

* [Stylish](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe) (For CSS)
* [Custom Javascript](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk) (For JavaScript)

Once you have Stylish, you can grab the CSS easily [here](https://userstyles.org/styles/198183) and you should be set.
For the JavaScript, you first want to go to speedrun.com. Once you are there, open up the extension and select the "New RegExp" option. Enter `https:\/\/www\.speedrun\.com\/.+` as the regexp. Then you can enter your JS code, which is just copy+pasting the code found in the `js/` folder. Once you are done, press save.
