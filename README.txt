In this homework, you will create a listings page for software companies in Boston.

You are already provided with the following:
    - server.js
        This file contains the basic code to launch a server. You will add your URL paths here.
    - views folder
        This is an empty folder. This is where you will create your templates (.ejs files) 
    - package.json
        This contains all the dependencies you will require to be able to launch the server. 
        Use cd to change into the directory where package.json is and RUN 'npm install'

Tasks:

    1:  Create a '/' GET route. Use the .render() method to render the following HTML: "<h1> Welcome to Boston Software 
        Jobs </h1>" so when the user goes to localhost:3000, they should see "Welcome to Boston Software Jobs"
        Hint: You will need to create a file in the views directory and use that filename in the render() method.
        You can call this file index.ejs

    2:  Create another route called '/jobs'. When the user visits 'localhost:3000/jobs', your server should display the
        name of all companies as an unordered list. You will need to create another file in your views directory and use
        that filename in the render() method. 
        You can call this file jobs.ejs
        Hint 1: You will need to send the names of the companies through render, like this:
        response.render(FILE_NAME, {names: companies})
        Hint 2: From the COMPANIES, you can extract the list of company names by using the get_company_names_as_list()
        function. This function is already provided to you. Once you have the list, you can just use forEach loop.
        Alternatively, if you don't want to use that function, you will need to apply 'for/in' loop to get the name of the companies from the COMPANIES object (https://www.w3schools.com/jsref/jsref_forin.asp).
        

    3:  Create another route called '/company/:company_name'. Notice the parameter 'company_name'. As an example, when
        the user visits 'localhost:3000/company/Akamai', your server should display a page with the name of the
        company in between <h1> tags.
        Hint: You will need to get the company_name paramater using request.params and then send that information in the
        render(FILE_NAME, {name: company_name})
        You can call this page company.ejs

    == BONUS ==

    4:  Once Step #3 is done, modify your company.ejs template. Instead of just showing the name, you should also show 
        the company description and logo. 
        
    5:  At the end of the company.ejs template, create a link using the <a> tag. When the user clicks on the link, your
        page should take them to the '/jobs' URL. The link should read as 'View All Jobs'
    
    6:  Now go back to your GET route from Step #1. Modify the rendered file (index.ejs) to add a link using the <a> tag. 
        Clicking on this link should take the user to the '/jobs' URL. The link should read as 'View All Jobs'

    7:  Now modify your jobs.ejs template from Step #2. Now instead of just showing the company name in the unordered list, 
        make those names clickable using the <a> Tag. When the User clicks on it, take the user to the 

