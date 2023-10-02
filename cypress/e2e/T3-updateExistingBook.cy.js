describe('T3 - Update Any Book', () => {
    it('Update an existing book on database', () => {
      cy.visit('http://localhost:3000/')
      cy.get(':nth-child(7) > .del-update-buttons > .update').click({force:true})
      cy.wait(1000)
      cy.get('.formLink').click({force:true})
      cy.get('[placeholder="Book title"]').type('Tutunamayanlar')
      cy.get('textarea').type("Turgut Özben'in, söz konusu arkadaşı Selim Işık'ın modern hayata neden 'Tutunamadığı'nı öğrenme çabasını anlatmaktadır.")
      cy.get('[type="number"]').type("120")
      cy.get('[placeholder="Book cover image"]').type("tutunamayanlar.png")
      cy.get('.extend-btn-width').click({force:true})
    })
  })