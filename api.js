const db  = require('./dboperations');
var Customer = require('./customer');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
   console.log('middleware');
   next();
})



router.route('/customer').get((request,response)=>{

    db.getTest().then(result => {
       response.json(result[0]);
    })

})

router.route('/customer/:id').get((request,response)=>{

    db.getTests(request.params.id).then(result => {
       response.json(result[0]);
    })

})
router.route('/customer').post((request,response)=>{

    let tests = {...request.body}

    db.addTest(tests).then(result => {
       response.status(201).json(result);
    })

})


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is running at ' + port);


