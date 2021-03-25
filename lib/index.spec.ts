/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { getIntegration } from './index';
import { Mailgun } from './mailgun';

describe('getIntegration()', () => {
	test('returns integration class specified by mail type environment variable', async () => {
		const options = {
			type: 'mailgun',
			options: {
				token: 'foo',
				domain: 'foo.com',
				baseUrl: 'http://foo.com',
			},
		};
		const integration = getIntegration(options);
		expect(integration).toEqual(new Mailgun(options.options));
	});

	test('returns undefined mail type environment variable is not set', async () => {
		const integration = getIntegration({
			type: '',
			options: {
				token: '',
				domain: '',
				baseUrl: '',
			},
		});
		expect(integration).toBeUndefined();
	});
});
