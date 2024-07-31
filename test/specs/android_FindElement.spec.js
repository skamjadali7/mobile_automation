describe('Element Accessibilty in Android',()=>{
    it('accessibilty ID',async()=>{
        // find element by accessibilty ID
        const appOption = await $('~App');

        // Click on the element
        await appOption.click()

        // assertion after clicking
        const actionOption = await $('~Action Bar');
        await expect(actionOption).toBeExisting()
    })

    it('class name',async()=>{
        // find element by class Name
        const className = await $('android.widget.TextView')

        // Asserting the element now only
        await expect(className).toHaveText('API Demos');
    })

    it('using xpath',async()=>{
        // xpath - (//tagname[@attribute=value])
        //await $('//android.widget.TextView[@content-desc="App"]').click();
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //find by reosurce-id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        // find by text
        await $('//android.widget.TextView[@text="Command three"]').click()


        // find by class and assert

        const commandText = await $('android.widget.TextView')
        await expect(commandText).toHaveText('You selected: 2 , Command three');
    })

    xit('using android UIAutomator',async()=>{
       // find by text contains
       await $('android=new UiSelector().textContains("App")').click()

       await $('android=new UiSelector().textContains("Alert Dialogs")').click();
    })

    it('working with multiple elements',async()=>{
        const expectedList = ['API Demos',"Access'ibility",'Accessibility','Animation','App','Content',
            'Graphics','Media','NFC','OS','Preference','Text','Views']
        const actualList = []
        // find multiple elements  using $$ sign
        const listName = await $$('android.widget.TextView')
        // loop through it 

        for (const ele of listName){
            actualList.push(await ele.getText())
        }

        // asssertion
        await expect(actualList).toEqual(expectedList)
    })

    it.only('input text filed',async()=>{
        // Click on View Options 
        await $('android=new UiSelector().text("Views")').click()

        // Click Automcomplete
        await $('android= new UiSelector().text("Auto Complete")').click()

        //Click Sreen Top 
        await $('android= new UiSelector().text("1. Screen Top")').click();

        // Enter COuntry Name & Assert
        const inputCountry = await $('//*[@resource-id="io.appium.android.apis:id/edit"]')
        await inputCountry.addValue('India')

        await expect(inputCountry).toHaveText('India')

    })


})