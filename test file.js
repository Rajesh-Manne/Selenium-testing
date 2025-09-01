describe('Google Search', () => {
  it('should load Google homepage and check the title', () => {
    cy.visit('https://www.google.com')
    cy.title().should('include', 'Google')
  })
})
describe('Google Search', () => {
  it('should load Google homepage and check the title', () => {
    cy.visit('https://www.yahoo.com')
    cy.title().should('include', 'Google')
  })
})
