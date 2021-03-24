/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { MailOptions } from '@balena/jellyfish-environment';

export interface SendEmailOptions {
	toAddress: string;
	fromAddress: string;
	subject: string;
	html: string;
}

export interface MailIntegrationConstructor {
	new: (options: MailOptions) => MailIntegration;
}

export interface MailIntegration {
	sendEmail: (options: SendEmailOptions) => Promise<any>;
}
