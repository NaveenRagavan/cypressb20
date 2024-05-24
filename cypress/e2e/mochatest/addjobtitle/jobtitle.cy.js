import data from"../../fixtures/logindata.json"
const availablefixtures=[
  {
    "name":"jobtitle/title1",
    "context":"1"
  },
  {
    "name":"jobtitle/title2",
    "context":"2"
  },
  {
    "name":"jobtitle/title3",
    "context":"3"
  }
]
describe('Add job title', () => {
  availablefixtures.forEach((afixture)=>{
    describe(afixture.context,()=>{
      before(function () {
        cy.fixture(afixture.name).then(function(data){
          this.data=data

        })
      })
    it('verify job titles', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type(data.username)
      cy.get('input[type="password"]').type(data.password)
      cy.get('button[type="submit"]').click()
      cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
      cy.contains('Job ').click()
      cy.contains('Job Titles').click()
      cy.contains(' Add ').click()
      cy.get('input[class="oxd-input oxd-input--active"]').last().type('jobtitle.jobtitle')
      cy.get('button[type="submit"]').click()
    })
  })
})
})