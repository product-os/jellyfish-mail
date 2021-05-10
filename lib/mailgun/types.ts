/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { MailOptions } from '@balena/jellyfish-environment';
import { MailIntegration } from '../types';

export interface MailgunAuth {
	user: string;
	pass: string;
}

export interface MailgunIntegration extends MailIntegration {
	options: MailOptions;
	domain: string;
	requestDomain: string;
	auth: MailgunAuth;
}
