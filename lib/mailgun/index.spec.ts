/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getEnvironment } from '@balena/jellyfish-environment';
import { strict as assert } from 'assert';
import nock from 'nock';
import { Mailgun } from './index';

/**
 * Check that a given string exists within form data payload
 * @function
 *
 * @param key - parameter name to check for
 * @param value - value expected to be assigned to key
 * @param text - full form data payload
 * @returns boolean denoting if parameter information was found
 */
function includes(key: string, value: string, text: string): boolean {
	const pattern = new RegExp(`name="${key}"\\s*${value}`, 'm');
	const regex = text.search(pattern);
	return regex !== -1;
}

const environment = getEnvironment({
	MAIL_TYPE: 'mailgun',
	MAILGUN_TOKEN: '1234',
	MAILGUN_DOMAIN: 'example.com',
	MAILGUN_BASE_URL: 'https://api.mailgun.net/v3',
});

afterAll(() => {
	nock.cleanAll();
});

test('sendEmail() should send emails through MailGun API', async () => {
	assert.ok(environment.mail.options);
	let requestPayload = '';

	nock(`${environment.mail.options.baseUrl}/${environment.mail.options.domain}`)
		.post('/messages', (payload) => {
			requestPayload = payload;
			return payload;
		})
		.basicAuth({
			user: 'api',
			pass: environment.mail.options.token,
		})
		.reply(200);

	const mailgun = new Mailgun({
		token: environment.mail.options.token,
		domain: environment.mail.options.domain,
		baseUrl: environment.mail.options.baseUrl,
	});
	expect(mailgun).toBeTruthy();

	const options = {
		toAddress: 'to@address.com',
		fromAddress: 'from@address.com',
		subject: 'test-subject',
		html: 'test-html',
	};

	const result = await mailgun.sendEmail(options);
	expect(result.status).toEqual(200);
	expect(includes('from', options.fromAddress, requestPayload)).toBe(true);
	expect(includes('to', options.toAddress, requestPayload)).toBe(true);
	expect(includes('subject', options.subject, requestPayload)).toBe(true);
	expect(includes('html', options.html, requestPayload)).toBe(true);
});
