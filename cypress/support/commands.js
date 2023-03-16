Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {

    cy.get('#firstName').type('Felipe')
    cy.get('#lastName').type('Oliveira')
    cy.get('#email').type('felipeexemplo@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})