describe('T1 - Add a New Book', () => {
  it('Add a new book using book details', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(1000)
    cy.get('.formLink').click({force:true})
    cy.get('[placeholder="Book title"]').type('Tutunamayanlar')
    cy.get('textarea').type("Turgut Özben'in, söz konusu arkadaşı Selim Işık'ın modern hayata neden 'Tutunamadığı'nı öğrenme çabasını anlatmaktadır.")
    cy.get('[type="number"]').type("100")
    cy.get('[placeholder="Book cover image"]').type("tutunamayanlar.png")
    cy.get('.extend-btn-width').click({force:true})
  })
})