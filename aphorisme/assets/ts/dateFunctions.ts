function createDate (day: string, month: string, year: string, months: Array<string>): string {
  const monthNumber = months.indexOf(month) + 1
  let date: string
  if (monthNumber < 10) {
    date = `${year}-0${monthNumber}-${day}`
  } else {
    date = `${year}-${monthNumber}-${day}`
  }
  return date
}

function calculateAge (birthDay: string): number {
  const birthDate = new Date(birthDay)
  const ageDifferenceInMonths = Date.now() - birthDate.getTime()
  const ageDate = new Date(ageDifferenceInMonths)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

export { calculateAge, createDate }
