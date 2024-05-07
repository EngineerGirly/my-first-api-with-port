const express = require('express'); 
const path = require('path'); 
const cors = require('cors')
const app = express();
const PORT = 7000

const records = {
    'smith': {
        'age': 29,
        'birthName': 'smithy the man',
        'birthLocation': 'London, England'
    },

    'lily': {
        'age': 28,
        'birthName': 'lily the man',
        'birthLocation': 'Chicago, Illinois'
    },

    'sam': {
        'age': 29,
        'birthName': 'sam the man',
        'birthLocation': 'Dylan'
    },

}

//Get all students
app.get('/', (req,res) => {
    const filePath = path.join(__dirname, '..', 'dist', 'index.html');
    res.sendFile(filePath)

    // res.send('Server is running..');
});

//Create new record 
app.post('/add', (req,res) => {
    res.send('New record added.')
});

//Delete existing record
app.delete('/', (req,res) => {
    res.send('Deleted existing record');
});

//Updating existing record
app.put('/', (req,res) => {
    res.send('Updating existing record');
});

//Showing demo records
app.get('/demo', (req,res) => {
    res.json(records);
});

app.get('/:studentName', (request, response) => {
    const studentName = request.params.studentName.toLowerCase()
    if (records[studentName]) {
        response.json(records[studentName])
    }
    else {
        response.json(records['sam'])
    }
})

// app.use('/.netlify/functions/api', router);
app.listen(process.env.PORT || PORT, () => {
    console.log('server is running')
})
app.use(cors);
