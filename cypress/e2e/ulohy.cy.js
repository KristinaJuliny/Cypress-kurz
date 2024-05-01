describe("Ulohy", function() {

})
beforeEach(function(){
    cy.visit("http://localhost:3000/shop")
})
it('Cookie banner Details zmeny', function (){
    cy.get('[data-type="cookie-banner-adjust-btn"]').click()
    cy.get('[data-type="cookie-banner-preferencies-span"]').click()
    cy.get('[data-type="cookie-banner-stats-span"]').click()
    cy.get('[data-type="cookie-banner-allow-btn"]').click()
})
it('Pridat vec do kosiku', function (){
    cy.get('[data-type="cookie-banner-allow-btn"]').click()
    cy.get('[data-type="filter-search-input"]').type ('Pho')
    //cy.get('[data-type="product-wrapper"]').children().should ('have.length', "2")
    cy.get('[data-type="product-wrapper"]').children().should ('have.length', "2")
    cy.get('[data-type="product-title-0"]').click()
})
it('Pridať do košíka tričko', function (){
    cy.get('[data-type="cookie-banner-allow-btn"]').click()
    cy.get('[data-type="product-title-0"]').click()
    cy.get('[data-type="details-waranty"]').check()
    cy.get('[daat-type="detail-size-select"]').select ('M')
    cy.get('[data-type="details-add-to-cart-btn"]').click()
    cy.get('[data-type="navigate-to-cart"]').click()
    cy.get('[data-type="cart-single-item-0"]').should ('exist')
    cy.get('[data-type="cart-total-price-price"]').should ('have.text', "43.19 €")
})
