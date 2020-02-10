import {Given,When,Then} from 'cucumber';
import {expect} from 'chai';

Given(/^User is on website landing page$/, {timeout: 60 * 1000}, function(){
browser.url("http://automationpractice.com/index.php");
});

When(/^User clicks on Signin link$/, {timeout: 60 * 1000}, function(){
browser.$("//*[@id='header']/div[2]/div/div/nav/div[1]/a").click;

});


When(/^User enters email address$/, {timeout: 60 * 1000}, function(){
browser.$("//*[@id='email_create']").setValue("john.legend@gmail.com");
browser.$("//*[@id='SubmitCreate']/span").click;
});

When(/^User enters personal information$/,{timeout: 60 * 1000}, function(){
browser.$("//*[@id='id_gender2']").click;
browser.$("//*[@id='customer_firstname']").setValue("John");
browser.$("//*[@id='customer_lastname']").setValue("Legend");
browser.$("//*[@id='email']").setValue("john.legend@gmail.com");
browser.$("//*[@id='passwd']").setValue("pass123");
//browser.findElement("//*[@id='firstname']").setValue("John");
//browser.findElement("//*[@id='lastname']").setValue("Legend");
browser.$("//*[@id='address1']").setValue("Room 101, Green Street");
browser.$("//*[@id='city']").setValue("California");
browser.$("//*[@id='uniform-id_state']/span").selectByVisibleText("California");
browser.$("//*[@id='postcode']").setValue("41234");
browser.$("//*[@id='phone_mobile']").setValue("612412512");
browser.$("//*[@id='alias']").setValue("Alternate address");
browser.$("//*[@id='submitAccount']/span").click;

});

Then(/^Registration should be successful$/, {timeout: 60 * 1000}, function(){

    var pageTitle = browser.getTitle();
    console.log(pageTitle);

   var nameOfUser = browser.element("//*[@id='header']/div[2]/div/div/nav/div[1]/a/span").getText();
   console.log(nameOfUser);

   expect(nameOfUser).to.equal("john legend");

});