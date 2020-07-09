/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const environment = require('@balena/jellyfish-environment')
const integrations = {
	mailgun: require('./mailgun')
}

/**
 * A module for sending emails through external services.
 *
 * @module mail
 */

module.exports = integrations[environment.mail.type]
