/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

function createModuleDescription(name, exclude) {
	var result = {};
	var excludes = ['vs/css', 'vs/nls'];
	result.name = name;
	if (Array.isArray(exclude) && exclude.length > 0) {
		excludes = excludes.concat(exclude);
	}
	result.exclude = excludes;
	return result;
}

exports.collectModules = function () {
	var modules = [
		createModuleDescription('vs/workbench/contrib/output/common/outputLinkComputer', ['vs/base/common/worker/simpleWorker', 'vs/editor/common/services/editorSimpleWorker']),

		createModuleDescription('vs/workbench/contrib/debug/node/telemetryApp', []),

		createModuleDescription('vs/workbench/services/search/node/searchApp', []),

		createModuleDescription('vs/workbench/services/files/node/watcher/unix/watcherApp', []),
		createModuleDescription('vs/workbench/services/files/node/watcher/nsfw/watcherApp', []),

		createModuleDescription('vs/workbench/services/extensions/node/extensionHostProcess', []),
	];

	return modules;
};