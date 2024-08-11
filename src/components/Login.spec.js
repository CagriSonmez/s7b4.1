describe('Login Form Success Test', () => {
    it('Başarılı form doldurulduğunda submit edilebiliyor', () => {
      cy.visit('/'); 
  
      cy.get('input[type="email"]').type('test@example.com');
      cy.get('input[type="password"]').type('password123');
      cy.get('input[type="checkbox"]').check();
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/success');
      cy.get('h2').should('contain', 'Başarılı Giriş');
    });
  });
  
  describe('Login Form Error Test', () => {
    it('Yanlış email ve şifre girdiğimde hata mesajı gösteriliyor ve buton disabled durumda', () => {
      cy.visit('/'); 
  
      cy.get('input[type="email"]').type('wrong-email');
      cy.get('input[type="password"]').type('short');
      cy.get('input[type="checkbox"]').uncheck();
      cy.get('button[type="submit"]').should('be.disabled');
        cy.get('p').should('contain', 'Geçerli bir email adresi girin');
      cy.get('p').should('contain', 'Şifreniz en az 8 karakter olmalıdır');
      cy.get('p').should('contain', 'Kullanım şartlarını kabul etmelisiniz');
    });
  
    it('Email ve password doğru ama kuralları kabul etmedim', () => {
      cy.visit('/'); 
  
      cy.get('input[type="email"]').type('test@example.com');
      cy.get('input[type="password"]').type('password123');
      cy.get('input[type="checkbox"]').uncheck();
      cy.get('button[type="submit"]').should('be.disabled');
  
      cy.get('p').should('contain', 'Kullanım şartlarını kabul etmelisiniz');
    });
  });