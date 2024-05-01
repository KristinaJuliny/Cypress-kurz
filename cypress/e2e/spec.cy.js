describe('My first test', function(){

  
  beforeEach(function(){
  cy.visit("http://localhost:3000/shop")
  })
  it('Náš prvý test', function(){
  cy.visit('http://localhost:3000/shop')
  cy.get('[data-type="cookie-banner-allow-btn"]').click()
  })

  it("Náš druhý test" , function(){
    cy.visit('http://localhost:3000/shop')
    cy.get('[data-type="filter-search-input"]').type ('T-shirt')
  })
  it('Checkbox', function (){
    cy.visit('http://localhost:3000/1')
    cy.get('[data-type="cookie-banner-allow-btn"]').click()
    cy.get('[daat-type="detail-size-select"]').select('M')
  })
  it("Vyber tričko" ,function(){
    cy.visit('http://localhost:3000/shop')
    cy.get('[data-type="cookie-banner-allow-btn"]').click()
    cy.get('[data-type="product-image-0"]').click()
  })
   it('Test na checkbox', function(){
    cy.visit('http://localhost:3000/shop')
    cy.get('[data-type="cookie-banner-allow-btn"]').click()
    cy.get('[data-type="product-image-0"').click()
    cy.get('[data-type="details-waranty"]').check()
   })

   it('Test Contains', function(){
    cy.visit('http://localhost:3000/shop')
    cy.get('[data-type="cookie-banner-allow-btn"]').click()
    cy.contains('Smart Watch').click()
   })
  })
  it('Náš prvý ozajstný test scenár', function(){
    cy.visit('http://localhost:3000/shop')
    cy.get('[data-type="cookie-banner-allow-btn"]').click()
    cy.get('[data-type="product-title-9"]').click()
    cy.get('[data-type="details-price"]').should('have.text', "129.99€")
  })
  