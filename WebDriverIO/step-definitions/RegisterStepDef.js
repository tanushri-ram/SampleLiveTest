import {Given,When,Then} from 'cucumber';
//import {expect} from 'chai';

const assert=require('assert');

Given(/^User is on website landing page$/, {timeout: 60 * 1000}, function(){
    browser.url('/');
    var pageTitle = browser.getTitle();
    console.log(pageTitle);
    assert.equal(pageTitle, "My Store");
});

When(/^User clicks on Signin link$/, {timeout: 60 * 1000}, function(){
    const signinlink = $('a=Sign in');
    signinlink.click();
    //browser.pause(5000);
    assert.equal(browser.getTitle(), "Login - My Store");
});


When(/^User enters email address$/, {timeout: 60 * 1000}, function(){
const emailtab = $('#email_create');
emailtab.setValue("john.legend2@gmail.com");
//browser.pause(5000);
$('#SubmitCreate').click();
//browser.pause(5000);

const pageHeading = $('h1=Create an account');

pageHeading.waitForDisplayed(10000);

});

When(/^User enters personal information$/,{timeout: 60 * 1000}, function(){

    $('#id_gender2').click();
    browser.pause(2000);
    $('#customer_firstname').setValue("John");
    browser.pause(2000);
$('#customer_lastname').setValue("Legend");
browser.pause(2000);
$('#passwd').setValue("pass123");
browser.pause(2000);
$('#address1').setValue("Room 101, green Street");
browser.pause(2000);
$('#city').setValue("San Diego");
browser.pause(2000);
$('#id_state').selectByVisibleText("California");
browser.pause(2000);
$('#postcode').setValue("40123");
browser.pause(2000);
$('#phone_mobile').setValue("612234567");
browser.pause(2000);
$('#submitAccount').click();
browser.pause(2000);


//browser.$("//*[@id='uniform-id_state']/span").selectByVisibleText("California");
//browser.$("//*[@id='postcode']").setValue("41234");
//browser.$("//*[@id='phone_mobile']").setValue("612412512");
//browser.$("//*[@id='alias']").setValue("Alternate address");
//browser.$("//*[@id='submitAccount']/span").click;

});

Then(/^Registration should be successful$/, {timeout: 60 * 1000}, function(){

    var nameOnPage = $('#header > div.nav > div > div > nav > div:nth-child(1) > a > span').getText();
    console.log(nameOnPage);
assert.equal(nameOnPage, "John Legend");

});