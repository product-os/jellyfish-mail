# Jellyfish Mail

This library contains email integration functionality for use in Jellyfish.

# Usage

Below is an example how to use this library:

```js
const environment = require('@balena/jellyfish-environment')
const Mail = require('@balena/jellyfish-mail')

const instance = new Mail(environment.mail)
await mail.sendEmail({
	toAddress,
	fromAddress,
	subject,
	htmlBody
})
```

# Documentation

A module for sending emails through external services.

