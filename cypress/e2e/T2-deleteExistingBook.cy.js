

describe('T2 - Delete Any Book', () => {
    it('Delete an existing book on database', () => {
      cy.visit('http://localhost:3000/')
      cy.get(':nth-child(6) > .del-update-buttons > .delete').click({force:true})
    })
  })