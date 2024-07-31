describe('Android Native features Tests',()=>{
    it('Access an activity directly',async()=>{
        //access activity
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")
        //assertion

        const elementCheck = $('~Progress dialog')
        await expect(elementCheck).toExist()
    })
})