/*
    This file is the entry point.
    Here we have already created a basic server for you. 
    You will need to add appropriate URL paths (endpoints) to handle browser requests.
*/
const express = require('express');
const app = express();
const PORT = 3000;

// Company data stored in the COMPANIES object
const COMPANIES = require('./companyList.json')

// Here we specifiy our view engine to EJS templates
app.set('view engine', 'ejs');

function get_company_names_as_list() {
    // This just returns the list of company names
    // E.g It will return -->  ['Actifio', 'Agero', 'Akamai', 'AthenaHealth', 'LogMeIn', 'TripAdvisor', 'Wayfair']
    return Object.keys(COMPANIES);
}

// Write URL routes here
app.get('/', (req, res) => res.render('index'))

app.get('/jobs', (req, res) => res.render('jobs', { companyList: COMPANIES }))

app.get('/company/:company_name', (req, res) => {
    if (COMPANIES.hasOwnProperty(req.params.company_name)) {
        res.render('company', {
            companyDetails: JSON.stringify(COMPANIES[req.params.company_name])
        })
    } else {
        res.sendStatus(404)
        res.send('<h1> 404 Not Found</h1>')
    }
})


// Server is started on the given PORT
app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) });