class completingForm{
    completingForm(text){
        cy.get("#email").type("jan@example.pl", {delay: 10 });
        cy.get("#haslo1").type("Haslo123#@!");
        cy.get("#haslo2").type("Haslo123#@!");
        cy.get("#kraj").select("Polska");
        cy.get("#nazwisko").type("Kowalski");
        cy.get("#imie").type("Jan");
        cy.get("#ulica").type("Kwiatowa");
        cy.get("#nrdomu").type("10");
        cy.get("#nrmieszkania").type("20A"); 
        cy.get("#miasto").type("Warszawa"); 
        cy.get("#kod").type("10-100");
    }

}

export default new completingForm();