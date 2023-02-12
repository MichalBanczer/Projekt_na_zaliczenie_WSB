class logInPage{
    get button() { 
        return cy.get("#helloUser");
    }

    clickBtnZalogujSie(){
        this.button.click()
    }

    verifyBtnText(text){
        this.button.should("contain",text);
    }

}

export default new logInPage();