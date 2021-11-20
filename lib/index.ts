import { defaultEnvironment, Mail } from '@balena/jellyfish-environment';
import { Mailgun } from './mailgun';
import { MailIntegration } from './types';
export { MailIntegration, SendEmailOptions } from './types';
export { MailgunIntegration, MailgunAuth } from './mailgun/types';

/**
 * @summary Return mail integration depending on mail type environment variable
 * @function
 *
 * @param options - mail integration options
 * @returns instantiated integration or undefined
 *
 * @example
 * ```typescript
 * const mailIntegration = getIntegration();
 * ```
 */
export function getIntegration(
	options: Mail = defaultEnvironment.mail,
): MailIntegration | undefined {
	if (options.type === 'mailgun' && options.options) {
		return new Mailgun(options.options);
	}
	return undefined;
}

// Export the integration specified by the mail type environment variable
const integration = getIntegration();
export default integration;
