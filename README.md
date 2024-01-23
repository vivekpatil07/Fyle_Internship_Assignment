# Fyle-Web-Development-Internship-challenge
Design a website that displays the public Github repositories belonging to any specific user.

For example: `johnpapa` is a valid Github username
### References & Requirements

- API Documentation https://docs.github.com/en/rest/reference
- The below image represents a `topic` of a particular repository, one repository could have multiple `topics`
    
    !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7743fc64-964a-4fb2-a231-d646d2d88e0a/Screenshot_2021-05-17_at_3.11.10_AM.png
    
- Pagination has to be `server`-side
    - By default, show `10` repositories per page
    - User should be able to choose a maximum of `100` repositories per page.
- When the API calls are in progress, consider showing loaders.
- Optionally, you can provide a search bar to filter the repositories.

###
# Github Repositories listing page
This project is a Fyle web development internship task created using HTML, CSS, Javascript and Bootstrap. The website contains a textbox in which user can write a username of any github account, the other part contains a list to select a limit to show the number of repositories on the page (default limit is 10) and the maximum limit is 100. Website also contains a button which when clicked shows the list of all the repositories available with that name. In addition, I have added a search bar to filter the repositories. 
