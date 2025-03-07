# Setting Up GitHub Teams For Your Next Project

This guide provides a step-by-step process on how to set up GitHub teams so yu can effectively manage collaboration and permissions. Pedro Pathing utilizes teams in order to effectively manage the different roles and permissions of its members, for better clarity and efficiency. 

## Prerequisites:
- You must have created a GitHub organization. If you haven't done this yet, follow the steps in this guide: [Creating a GitHub Organization](/general/GitHub/GitHub_Organization.md).
- You must have admin access to the organization.

## Steps: 
1. Go to your GitHub organization page. You can do this by clicking on your profile icon in the top right corner of the page and selecting the organization you want to work with.
2. Click on the `Teams` tab.
3. Click on the `New team` button.
4. Enter a name for your team.
5. Add a description for your team (optional).
6. Select the parent team for your team (optional). If you don't want your team to be a part of any other team, leave it as `Select parent team` or as `No parent team`.
   - If your organization follows a structured hierarchy, you can **assign a parent team** to the team you are creating.
   - Parent teams allow **nested team structures,** where child teams inherit the parent team’s repository permissions and access levels.
   - Important Notes:
     - Secret teams cannot have parent or child teams.
     - Child teams automatically inherit the repository permissions of their parent teams.
     - Parent teams can @mention all their child teams for efficient group notifications.
7. Choose a privacy level for your team. You can choose between `Secret` and `Visible`. 
   - `Secret`: Only members of the team can see the team and its members.
   - `Visible`: Anyone can see the team and its members, but only members can see the team's repositories.
8. Choose your teams' notification preferences.
9. **Congrats! Now you can click on `Create team`.**

## Team Management:
### Adding Members:
1. Once inside that team, you can add members by clicking on the `Add a member` button.
   - When adding any new members, you will need your password, authenticator app, or GitHub mobile, to verify that you would like to add this member.
### Adding Repositories:
1. As an admin, you can click on the `Repositories` tab and add repositories to your team.
2. You can also go into the settings of the repository itself and add the team to the repository.
    - If doing this method, you can then choose the level of access you would like to give the team, as explained here: [GitHub Permissions](/general/GitHub/GitHub_Permissions.md).
### Organization Roles:
1. You can assign specific all-repository permission levels for your team members, as explained here: [GitHub Permissions](/general/GitHub/GitHub_Permissions.md).
### Settings:
1. You can change the team's name, description, and notification settings by clicking on the `Settings` tab.
2. You can also delete the team by clicking on the `Delete team` button.
3. You can also change the team's visibility by clicking on the `Change visibility` button.
4. You can edit your code review settings by clicking on the `Code review` tab.
5. You can connect with Slack to create scheduled reminders for your team.