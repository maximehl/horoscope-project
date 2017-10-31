/* Author: Maxime Hendrikse Liu
 * Date started: 21 8 2017
 */
SIGNS = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer",
    "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
IMAGES = ["7/76/Capricorn", "2/24/Aquarius", "9/95/Pisces", "5/5e/Aries",
    "3/3a/Taurus", "1/15/Gemini", "2/29/Cancer", "9/99/Leo", "0/0c/Virgo",
    "f/f7/Libra", "e/ea/Scorpio", "8/80/Sagittarius"];
CHINESE_ZODIAC = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"];
MONTH_CUTOFFS = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];
HOROSCOPES = ["What you say may seem obvious to you, but will" +
    " be easily understood by those around you." +
    " Choose your words with greater care today," +
    " see others for what they are, and listen to" +
    " exactly what they have to say. Listen, learn," +
    " and don’t jump to conclusions before you are" +
    " certain you have found understanding.",
    "You are arriving at your destination and becoming" +
    " the person you always wanted to be, but this isn’t" +
    " as satisfying when you have so many battles to fight" +
    " and so many conflicts to overcome. Stay calm and" +
    " positive today.",
    "Confusion could turn you to strange directions" +
    ", not really knowing where you’re going or why. Don’t" +
    " let others fuel your need for movement and" +
    " stay under control for the time being. There" +
    " is a difference between spontaneity and being" +
    " lost. Keep your goals and mission in mind.",
    "You know that you should love your work, but" +
    " you may be doing it for an audience you had" +
    " not imagined. Your patience may be tested" +
    " one too many times. Clear your mind and" +
    " embrace yourself and others.",
    "Today, things you thought would give you a sense" +
    " of discipline and durability will start to fade" +
    " and lose their meaning. You must chase your" +
    " purpose, not allowing it to slip away. Give up" +
    " those dark clouds that fill your mind, set" +
    " yourself free from any negative thoughts, and" +
    " do not allow anyone to endanger who you are within.",
    "Those around you are feeling overwhelmed by" +
    " too many invisible demands. Don’t put too" +
    " much pressure on those you meet, for life" +
    " is a bit demanding at the moment and you" +
    " might lack some of their perspective to give" +
    " enough understanding. These struggles will" +
    " be over soon. Love yourself, and you may" +
    " become an inspiration to many trying to do" +
    " so today.",
    "There seems to be something dangerous lurking" +
    " in the shadows today that has been building" +
    " up for much longer than you may expect. Don’t" +
    " spend too much time alone or in uncomfortable" +
    " new situations. The person closest to you" +
    " might hurt you today. Respect yourself, and" +
    " remember that maintaining your boundaries is" +
    " important in relationships.",
    "You have something you wish to say today, but" +
    " you might lack the right words to say it. It" +
    " is already hard enough to say, so make sure" +
    " you know what lies within your heart before" +
    " speaking it out loud. Cooperation will benefit" +
    " you greatly if you find someone as hardworking" +
    " as you working towards the same cause. Some" +
    " things may not go your way today, but do not" +
    " let this decenter you.",
    "You have many things to say, but you aren’t sure" +
    " if you should speak your mind around certain" +
    " people. You must become aware of your boundaries" +
    " and respect yourself before you can find the" +
    " understanding you seek. Although you may" +
    " understand everyone's motives, do not excuse" +
    " others' behavior that hurts you. Allow others" +
    " to acknowledge your emotions too.",
    "Widen your perspective. You will learn new" +
    " information today that will bring new context" +
    " into your life if you contemplate it. You" +
    " may find yourself filled with optimism: you" +
    " will see that your beliefs can shape the" +
    " world you live in. Follow thoughts that lead" +
    " in positive directions, and your life will" +
    " certainly improve.",
    "Follow your feelings, and you may be the savior" +
    " for someone today. Your heart will show you" +
    " the way, but make sure not to follow it blindly:" +
    " let your brain be part of the decision. An open" +
    " mind may take you in a surprising new direction" +
    " today, which may change your life.",
    "You may feel like wandering today, sick of the" +
    " place you have been for quite some time. New" +
    " worlds are calling you today, making your life" +
    " feel like a living hell. Follow the call and" +
    " your life will change for the better. Don’t" +
    " remain where you are if it doesn’t seem right." +
    " However, make sure to keep safety and security" +
    " in mind."];
CHECK_RETURNS = ["aren't you a little young to be on the internet?",
    "please enter your year of birth.",
    "predicting the future is our job, not yours."];

function onSubmit(){
    clearPage();
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var name = document.getElementById("name").value;
    var nowDate = new Date();
    var birthday = checkBirthday(day, month, nowDate);
    if (name===""){
        name = "Anonymous";
    }
    var sign;
    var check = checkData(year, nowDate);
    if(check===true){
        sign = determineSign(day, month);
        document.getElementById("sign").innerHTML = SIGNS[sign];
        determineHoroscope(sign, name, birthday);
        determineImage(sign);
        determineChineseZodiac(year);
    }else{
        document.getElementById("horoscope").innerHTML = "Dear " + name + ": " + CHECK_RETURNS[check];
    }
}

function determineSign(day, month){
    if(day<=MONTH_CUTOFFS[month]){
        return month;
    }else{
        if(month===11){
            return 0;
        }else{
            return month + 1;
        }
    }
}

function determineHoroscope(sign, name, birthday){
    var text = "our horoscope for today is: " + HOROSCOPES[sign];
    if(birthday){
        text = "Happy birthday, " + name + "! Y" + text;
    }else{
        text = name + ", y" + text;
    }
    document.getElementById("horoscope").innerHTML = text;
}

function determineImage(sign){
    var signImage = "https://upload.wikimedia.org/wikipedia/commons/" + IMAGES[sign] + ".svg";
    var location = document.getElementById("image");
    location.setAttribute("src", signImage);
    document.getElementById("image").style.display = "block";
    location.setAttribute("width", "250px");
    location.setAttribute("height", "150px");
}

function determineChineseZodiac(year){
    var text;
    if(year%12===9){
        text = "You were born in the Chinese year of the " + CHINESE_ZODIAC[year%12] +
            ". That makes you 53% more awesome than the average person not born in the year of the Snake.";
    }else{
        text = "You were born in the Chinese year of the " + CHINESE_ZODIAC[year%12] + ".";
    }
    document.getElementById("chinese zodiac").innerHTML = text;
}

function checkData(year, nowDate){
    if(document.getElementById("year").value===""){
        return 1;
    }else if((year+10)>=parseInt(nowDate.getFullYear())){
        if(year>parseInt(nowDate.getFullYear())){
            return 2;
        }else{
            return 0;
        }
    }else{
        return true;
    }
}

function checkBirthday(day, month, nowDate){
    if(month===nowDate.getMonth() && day===nowDate.getDate()){
        return true;
    }else{
        return false;
    }
}

/*This function clears the page, which is important,
 * because the next date input may be invalid,
 * in which case, we don't want to leave a picture
 * or any text from the previous horoscope on the page.
 */
function clearPage(){
    document.getElementById("image").style.display = "none";
    document.getElementById("sign").innerHTML = "";
    document.getElementById("horoscope").innerHTML = "";
    document.getElementById("chinese zodiac").innerHTML = "";
}

function makeDaysList(month){
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
    var returnList = "";
    for(var i = 1; i<=monthDays[month]; i++){
        returnList += "<option value='" + i + "'>" + i + "</option>";
    }
    document.getElementById("day").innerHTML = returnList;
}