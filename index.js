var express = require('express'); //Import express module and store in a variable
var app = express();
var path = require('path');

var hbs = require('hbs');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));


var server = app.listen(process.env.PORT || 3000, function () { // a callback - will be called when app is ready!
	console.log('The app is listening!');
});

var list_of_animal_images = [
    {
		src: 'http://67.media.tumblr.com/ddd01ca3e6e3274a499e7f2430d39654/tumblr_odt19uASmn1vs67pfo2_500.gif', 
		title: '"Just Harry"', 
		desc: 'So long ago...'},
    {
		src: 'http://threeriversvetgroup.co.uk/wp-content/uploads/2012/05/farm-animals.jpg', 
		title: 'Pic 2', 
		desc: 'Pretty picture, huh?'},
    {
		src: 'https://i.imgflip.com/h92ym.jpg', 
		title: 'Pic 3', 
		desc: 'Pretty picture, huh?'},
    {
		src: 'http://justsomething.co/wp-content/uploads/2013/11/cutest-baby-animals-21.jpg', 
		title: 'Pic 4', 
		desc: 'Awesome picture, huh?'},
    {
		src: 'https://media.giphy.com/media/emWySpOLFLUAM/giphy.gif', 
		title: 'Pic 5', 
		desc: 'Pretty picture, huh?'},
    {
		src: 'http://s3-us-west-1.amazonaws.com/www-prod-storage.cloud.caltech.edu/styles/article_photo/s3/CT_Brain-Animal-Recog_SPOTLIGHT.jpg?itok=i4fXi7PO', 
		title: 'Pic 6', 
		desc: 'Pretty picture, huh?'},
    {
		src: 'http://udel.edu/~emmaauf/website%20project/final%20webpage/farmanimals/images/duckling.jpg', 
		title: 'Pic 7', 
		desc: 'Pretty picture, huh?'}
];

// Route = what happens in the browser when we go here?

app.get('/', function (req, res) { //incoming request, response to send out 
	res.render('index', {
		headline: 'Hello Web 2!',
		images: list_of_animal_images
	});
});

app.get('/animal_list_data', function (req, res) {
	res.header('Content-Type', 'application/json');
	res.send({
		animals: list_of_animal_images
	});
});

