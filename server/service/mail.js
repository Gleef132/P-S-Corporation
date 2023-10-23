const nodemailer = require('nodemailer')

class MailService {

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD
			}
		})
	}
	async sendActivationMail(to, code) {
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject: 'Account activation for ' + process.env.APP_URL,
			text: 'Code for activation: ' + code,
			html: `
				<div>
					<h1>${code}</h1>
				</div>
			`
		})
	}
}

module.exports = new MailService();