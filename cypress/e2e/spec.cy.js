describe('My first test', function(){

  it('Náš prvý test', function(){
  cy.visit('http://localhost:3000/shop')
  cy.get('[data-type="cookie-banner-allow-btn"]').click()
  })

})