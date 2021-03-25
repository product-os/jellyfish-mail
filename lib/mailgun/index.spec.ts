/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { Mailgun } from './index';

test('Can create Mailgun integration instance', async () => {
	const mailgun = new Mailgun({
		token: '1234',
		domain: 'example.com',
		baseUrl: 'https://api.mailgun.net/v3',
	});
	expect(mailgun).toBeTruthy();
});
