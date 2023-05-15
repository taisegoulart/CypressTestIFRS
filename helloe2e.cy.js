describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.poa.ifrs.edu.br/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(7) > h2 > .visible-phone').click();
    cy.get('.item-383 > a').click();
    cy.get('.item-124 > a > img').click();
    cy.get('.item-839 > a > img').click();
    cy.get('.offset-sm-2 > .btn').click();
    cy.get('.select2-selection__placeholder').click();
    cy.get('.select2-search__field').clear();
    cy.get('.select2-search__field').type('porto');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.col-md-8 > [type="button"]').click();
    cy.get('#tipo_estagio').check();
    cy.get('#area_1').click();
    cy.get('#areaCheck_1').check();
    cy.get('#area_3').click();
    cy.get('#areaCheck_3').check();
    cy.get('#area_5').click();
    cy.get('#areaCheck_5').check();
    cy.get('#area_7').click();
    cy.get('#areaCheck_7').check();
    cy.get('.col-sm-10 > .row > :nth-child(8)').click();
    cy.get('#areaCheck_8').check();
    cy.get('#areaCheck_6').check();
    cy.get('#areaCheck_4').check();
    cy.get('#areaCheck_2').check();
    cy.get('#area_9').click();
    cy.get('#areaCheck_9').check();
    cy.get('#pesquisaDescricao').clear('P');
    cy.get('#pesquisaDescricao').type('Porto Alegre');
    cy.get('.modal-footer > .btn').click();
    /* ==== End Cypress Studio ==== */
  })
})