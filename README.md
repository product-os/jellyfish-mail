**Notice: This utility has been discontinued. The functionality provided by this utility has been moved to [`jellyfish-plugin-default`](https://github.com/product-os/jellyfish-plugin-default) with [this PR](https://github.com/product-os/jellyfish-plugin-default/pull/947).**

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

[![Publish Documentation](https://github.com/product-os/jellyfish-mail/actions/workflows/publish-docs.yml/badge.svg)](https://github.com/product-os/jellyfish-mail/actions/workflows/publish-docs.yml)

Visit the website for complete documentation: https://product-os.github.io/jellyfish-mail
