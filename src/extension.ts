
'use strict';

import { workspace, ExtensionContext } from 'vscode';
import { LanguageClient, LanguageClientOptions, Executable } from 'vscode-languageclient';

export function activate(context: ExtensionContext) {
	let serverOptions: Executable = {
		command: 'flabbergast-langauge-server',
		args: [ ]
	};

	let clientOptions: LanguageClientOptions = {
		documentSelector: ['o_0'],
		synchronize: {
			configurationSection: 'o_0',
			fileEvents: [
				workspace.createFileSystemWatcher('**/*.o_0'),
			],
		}
	};

	let client = new LanguageClient('o_0','Language Support for Flabbergast', serverOptions, clientOptions);
	context.subscriptions.push(client.start());
}
