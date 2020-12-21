// describe('Поиск на сайте', () => {
// 	  const _beforeEach = () => {
//         browser.url('https://webdriver.io')

// 		const searchInput = $('#search_input_react')
// 		searchInput.setValue('help')
// 	  };

//     it('должен корректно показывать в мини-окне', () => {
//     	_beforeEach()

// 		const searchResultsTestRunners = $('#algolia-autocomplete-listbox-0 .algolia-docsearch-suggestion--category-header')
// 		expect(searchResultsTestRunners).toHaveText('Testrunner')
// 		browser.saveScreenshot('./screenshots/mini.png')
//     })

//     it('должен корректно переходить на подсказку', () => {
// 		_beforeEach()

// 		const findAWayLink = $('.algolia-docsearch-suggestion--title=Find A Way To Contribute')
// 		findAWayLink.click()

// 		expect(browser).toHaveTitle('Contribute · WebdriverIO');
// 		browser.saveScreenshot('./screenshots/mini2.png')
//     }) 
// })