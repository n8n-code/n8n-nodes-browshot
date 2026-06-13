import type { INodeProperties } from 'n8n-workflow';

export const instanceDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Instance"
					]
				}
			},
			"options": [
				{
					"name": "Get Instances Info",
					"value": "Get Instances Info",
					"action": "Get all instances",
					"description": "Get all instances.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instance/list"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /instance/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance"
					],
					"operation": [
						"Get Instances Info"
					]
				}
			}
		},
];
