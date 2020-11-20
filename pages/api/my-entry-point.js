export default (req, res) => {
	console.log(req.query);
  res.statusCode = 200
  res.json({
	parameter: req.query.parameter
  })
}
