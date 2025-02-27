const sentences = [
    "2002 Ford Mustang GT, black, side angle, sunny day",
    "This car is very important to me because out of 3 4th generation Mustangs, I've owned this one for the longest and had the most experiences in it. It represents my graduation from teen to adult years.",
    "One night me and my friends took my car out to a dirt pit in my hometown and did donuts, after my car was covered in dust and for some reason we thought it would be suspicious and cops would pull us over, somehow knowing what we did. So we went to Menards and bought some gallons of water to wash it off. We were so stupid.",
    "This car is like a friend to me, when I mistreat it it gets unhappy, makes noises and clunks and drives bad until I fix it, or it just goes away on it's own. A lot of the time even when I take good care of it it still wants problems, like some of my actual friends.",
    "She's not the prettiest or the fastest, but she's mine and she makes me smile."
];
let index = 0;

function changeText() {
    index = (index + 1) % sentences.length;
    document.getElementById("text").innerText = sentences[index];
}// JavaScript Document