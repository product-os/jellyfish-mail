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
