import { MailOptions } from '@balena/jellyfish-environment';
import axios from 'axios';
import FormData from 'form-data';
import { SendEmailOptions } from '../types';
import { MailgunAuth, MailgunIntegration } from './types';

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

		const form = new FormData();
		form.append('from', from);
		form.append('to', options.toAddress);
		form.append('subject', options.subject);
		form.append('html', options.html);

		return await axios.post(`${this.requestDomain}/messages`, form, {
			auth: {
				username: this.auth.user,
				password: this.auth.pass,
			},
			headers: form.getHeaders(),
		});
	}
}
