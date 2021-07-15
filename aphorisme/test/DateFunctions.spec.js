import { calculateAge, createDate } from '~/assets/util/dateFunctions'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dezember']

describe('testing date functions', () => {
  test('calculating age', () => {
    expect(calculateAge('2010-10-10')).toBe(10)
  })
  test('creating date with month less than 10', () => {
    expect(createDate('14', 'September', '2021', months)).toBe('2021-09-14')
  })
  test('creating date with month more than 10', () => {
    expect(createDate('14', 'November', '2021', months)).toBe('2021-11-14')
  })
})
