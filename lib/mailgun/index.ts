/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { MailOptions } from '@balena/jellyfish-environment';
import request from 'request-promise';
import { SendEmailOptions } from '../types';
import {
	MailgunAuth,
	MailgunIntegration,
	MailgunRequestOptions,
} from './types';

export class Mailgun implements MailgunIntegration {
	public options: MailOptions;
	public domain: string;
	public requestDomain: string;
	public auth: MailgunAuth;

	constructor(options: MailOptions) {
		this.options = options;
		this.domain = options.domain;
		this.requestDomain = `${this.options.baseUrl}/${this.domain}`;
		this.auth = {
			user: 'api',
			pass: this.options.token,
		};
	}

	/**
	 * @summary Send email using Mailgun api
	 * @function
	 *
	 * @param options - send email options
	 * @returns API request result
	 *
	 * @example
	 * ```typescript
	 * const result = await sendEmail({
	 *   toAddress: 'user@domain.com',
	 *   fromAddress: 'us@domain.com',
	 *   subject: 'Hello',
	 *   html: '<b>Hello</b>',
	 * });
	 * ```
	 */
	public async sendEmail(options: SendEmailOptions): Promise<any> {
		const from = options.fromAddress
			? options.fromAddress
			: `Jel.ly.fish <no-reply@${this.domain}>`;
		const requestOptions: MailgunRequestOptions = {
			method: 'POST',
			auth: this.auth,
			uri: `${this.requestDomain}/messages`,
			formData: {
				from,
				to: options.toAddress,
				subject: options.subject,
				html: options.html,
			},
		};
		return request(requestOptions);
	}
}
