import { evaluator } from '../evaluator'
import { token } from '../utils'
import { TokenType, Operation } from '../types'

describe('Evaluator', () => {
  // Valid cases
  describe('Valid cases', () => {
    const validCases = {
      // '': [],
      '1': {
        expr: [token([TokenType.NUMBER, 1])],
        result: token([TokenType.NUMBER, 1])
      },
      '4**': {
        expr: [token([TokenType.OP_UNARY, Operation.SQUARE, 4])],
        result: token([TokenType.NUMBER, 16])
      },
      '1 + 2 - 3': {
        expr: [
          token([TokenType.NUMBER, 1]),
          token([TokenType.OP_BINARY, Operation.PLUS]),
          token([TokenType.NUMBER, 2]),
          token([TokenType.OP_BINARY, Operation.MINUS]),
          token([TokenType.NUMBER, 3])
        ],
        result: token([TokenType.NUMBER, 0])
      },
      '1 * 4 / 2': {
        expr: [
          token([TokenType.NUMBER, 1]),
          token([TokenType.OP_BINARY, Operation.MULT]),
          token([TokenType.NUMBER, 4]),
          token([TokenType.OP_BINARY, Operation.DIV]),
          token([TokenType.NUMBER, 2])
        ],
        result: token([TokenType.NUMBER, 2])
      },
      '2** ^ 2 * 3!': {
        expr: [
          token([TokenType.OP_UNARY, Operation.SQUARE, 2]),
          token([TokenType.OP_BINARY, Operation.POW]),
          token([TokenType.NUMBER, 2]),
          token([TokenType.OP_BINARY, Operation.MULT]),
          token([TokenType.OP_UNARY, Operation.FACTORIAL, 3])
        ],
        result: token([TokenType.NUMBER, 96])
      },
      '-2 - 2 ^ 2 ^ 2 - 4! - 4** * 3 / 2 + 2** - 2 ^ 3 ^ 2': {
        expr: [
          token([TokenType.NUMBER, -2]),
          token([TokenType.OP_BINARY, Operation.MINUS]),
          token([TokenType.NUMBER, 2]),
          token([TokenType.OP_BINARY, Operation.POW]),
          token([TokenType.NUMBER, 2]),
          token([TokenType.OP_BINARY, Operation.POW]),
          token([TokenType.NUMBER, 2]),
          token([TokenType.OP_BINARY, Operation.MINUS]),
          token([TokenType.OP_UNARY, Operation.FACTORIAL, 4]),
          token([TokenType.OP_BINARY, Operation.MINUS]),
          token([TokenType.OP_UNARY, Operation.SQUARE, 4]),
          token([TokenType.OP_BINARY, Operation.MULT]),
          token([TokenType.NUMBER, 3]),
          token([TokenType.OP_BINARY, Operation.DIV]),
          token([TokenType.NUMBER, 2]),
          token([TokenType.OP_BINARY, Operation.PLUS]),
          token([TokenType.OP_UNARY, Operation.SQUARE, 2]),
          token([TokenType.OP_BINARY, Operation.MINUS]),
          token([TokenType.NUMBER, 2]),
          token([TokenType.OP_BINARY, Operation.POW]),
          token([TokenType.NUMBER, 3]),
          token([TokenType.OP_BINARY, Operation.POW]),
          token([TokenType.NUMBER, 2])
        ],
        result: token([TokenType.NUMBER, -126])
      }
    }

    Object.entries(validCases).forEach(([line, { expr, result }]) => {
      test(line, () => {
        expect(evaluator(expr)).toEqual(result)
      })
    })
  })
})
