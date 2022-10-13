import swaggerJsDoc from 'swagger-jsdoc'

export const specsV1 = swaggerJsDoc({
	definition: {
		openapi: '3.0.1',
		info: {
			title: 'ToolBox Challenge API',
			version: '1.0.0'
		},
		servers: [
			{
				url: 'http://localhost:3000/v1'
			}
		]
	},
	apis: ['./src/v1/components/**/docs.ts']
})
