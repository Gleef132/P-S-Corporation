const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


const getDateNow = () => {
	const date = new Date()
	const day = date.getDate()
	const month = Months[date.getMonth()]
	const year = date.getFullYear()

	return `${day} ${month} ${year}`
}

module.exports = getDateNow