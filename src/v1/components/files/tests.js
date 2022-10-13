import { assert } from 'chai'

describe('Probando', () => {
	describe('Probando', () => {
		it('Deberia validar que 1 + 1 = 2', () => {
			assert.equal(1 + 1, 2)
		})

		it('Deberia validar que 1 + 1 != 4', () => {
			assert.notEqual(1 + 1, 4)
		})
	})
})
