import { browser, by, element } from 'protractor';

if (browser.params.runAllTests) {
    describe('Graph Page', () => {
        it('Page should load', () => {
            element(by.cssContainingText('a', 'Graph')).click();
            expect(browser.getCurrentUrl()).toContain('/demos/graph');
        });
        it('Changing "Width" input should change width on charts', () => {
            const myElement = element(by.xpath('//graph-demo/div[1]/div[1]/div[1]/input'));
            myElement.clear();
            myElement.sendKeys('400');
            const svg = element.all(by.tagName('svg')).first();
            expect(svg.getAttribute('width')).toEqual('400');
        });
        it('Changing "Height" input should change height on charts', () => {
            const myElement = element(by.xpath('//graph-demo/div[1]/div[1]/div[2]/input'));
            myElement.clear();
            myElement.sendKeys('350');
            const svg = element.all(by.tagName('svg')).first();
            expect(svg.getAttribute('height')).toEqual('350');
        });
        it('Changing "Label" dropdown to "none" should remove all chart labels', () => {
            // Click "none"
            element.all(by.xpath('//graph-demo/div[1]/div[2]/div[1]/select/option')).get(0).click();
            // Both "minmax" and "all" will place a label on the first rect (0)
            const rect = element.all(by.tagName('text'))
                .get(0)
                .getText()
                .then((text) => {
                    expect(text.length).toEqual(0);
                });
        });
        it('Changing "Label" dropdown to "all" should add all chart labels', () => {
            // Click "all"
            element.all(by.xpath('//graph-demo/div[1]/div[2]/div[1]/select/option')).get(1).click();
            // Both "none" and "minmax" will place a label on the first rect (0) but not the second (1)
            const rect = element.all(by.tagName('text'))
                .get(1)
                .getText()
                .then((text) => {
                    expect(text.length).toBeGreaterThan(0);
                });
        });
        it('Changing "Warning Level" input should change chart colors', () => {
            const myElement = element(by.xpath('//graph-demo/div[1]/div[2]/div[2]/input'));
            myElement.clear();
            // Setting warning level to zero will change color on all rects
            myElement.sendKeys('0');
            // The first rect (0) is usually not in a warning state unless the level drops below 100
            const rect = element.all(by.tagName('rect')).get(0);
            expect(rect.getAttribute('class')).toContain('d3-warning');
        });
    });
}
