/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava');
const Mailgun = require('./index');

ava('Can create Mailgun integration instance', async (test) => {
	const mailgun = new Mailgun({
		token: '1234',
		domain: 'example.com',
		baseUrl: 'https://api.mailgun.net/v3',
	});
	test.truthy(mailgun);
});
