class logInPage{
    get button() { 
        return cy.get('.button').contains(".button","Zarejestruj się");
    }

    

    clickBtnZarejestrujSie(){
        this.button.click();
    }

    verifyBtnVisible(){
        this.button.should("be.visible");
    }

}

export default new logInPage();