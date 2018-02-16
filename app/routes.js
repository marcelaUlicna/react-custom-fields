module.exports = function(app) {
    // application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./index.html'); // load the single view file
	});
};