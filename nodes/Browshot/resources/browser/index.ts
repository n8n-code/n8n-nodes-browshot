import type { INodeProperties } from 'n8n-workflow';

export const browserDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Browser"
					]
				}
			},
			"options": [
				{
					"name": "Get Browsers Info",
					"value": "Get Browsers Info",
					"action": "Get all browsers",
					"description": "Get all browsers.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/browser/list"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /browser/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Browser"
					],
					"operation": [
						"Get Browsers Info"
					]
				}
			}
		},
];
