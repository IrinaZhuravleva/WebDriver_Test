// describe('webdriver.io page', () => {
//     it('should have the right title', () => {
//         browser.url('https://webdriver.io')
//         // expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
//         expect(browser).toHaveTitle('Супер сайт');
//     })
// })

describe('Quiz page', () => {
    it('should have the right title', () => {
        browser.url('https://irinazhuravleva.github.io/Quiz/')
        expect(browser).toHaveTitle('Вопросы на собеседование по JS');
    })
})