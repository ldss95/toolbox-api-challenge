/**
 * @swagger
 * tags:
 *  name: Files
 */

/**
 * @swagger
 * /files/data:
 *  get:
 *      tags: [Files]
 *      summary: Obtiene la lista con todos los archivos en formato JSON
 *      parameters:
 *          - in: query
 *            name: fileName
 *            description: Nombre del archivo a consultar
 *            required: false
 *            schema:
 *              type: string
 *              example: test2.csv
 *      responses:
 *          400:
 *              description: Invalid file
 *          404:
 *              description: File not found
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  file:
 *                                      type: string
 *                                      example: test1.csv
 *                                  lines:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                              text:
 *                                                  type: string
 *                                                  example: OPMZitgaacAa
 *                                              number:
 *                                                  type: string
 *                                                  example: 52
 *                                              hex:
 *                                                  type: string
 *                                                  example: ec3a3a0b54fea1d2b40333a4a75b2c53
 */

/**
 * @swagger
 * /files/list:
 *  get:
 *      tags: [Files]
 *      summary: Obtiene la lista con todos los archivos disponibles
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              files:
 *                                  type: array
 *                                  items:
 *                                      type: string
 *                                      example: test1.csv
 */
