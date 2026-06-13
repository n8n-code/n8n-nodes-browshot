import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { browserDescription } from './resources/browser';
import { instanceDescription } from './resources/instance';

export class Browshot implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Browshot',
                name: 'N8nDevBrowshot',
                icon: { light: 'file:./browshot.png', dark: 'file:./browshot.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Capture real-time website screenshots.',
                defaults: { name: 'Browshot' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevBrowshotApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Browser",
					"value": "Browser",
					"description": ""
				},
				{
					"name": "Instance",
					"value": "Instance",
					"description": ""
				}
			],
			"default": ""
		},
		...browserDescription,
		...instanceDescription
                ],
        };
}
