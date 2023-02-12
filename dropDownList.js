class dropDownList{
    get list() { 
        return cy.get('#pelneDaneLink');
    }

    clickBtnPelneDane(){
        this.list.click();
    }

    verifyLinkText(){
        this.list.should("be.visible");
    }

}

export default new dropDownList();